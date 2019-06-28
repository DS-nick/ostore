import Vue from 'vue'
const FbAuth = 'https://www.googleapis.com/identitytoolkit/v3/'
const FbApiKey = 'AIzaSyBeQZEGCMQdWVuCD0XibiaMT1IyxP2SV9g'

import router from '../../router'
import { rejects } from 'assert';
// import fb from 'firebase'
var dbAcsessData = {}
export default {


    
    state: {
        userData: {
        email: '',
        userId: '',
        token: '',
        refresh: '',
        userName: ''
        }
        
    },
    mutations: {
        
        adduser(state, payload) {
            console.log(payload)
            state.userData.email = payload.email,
            state.userData.userId = payload.uid
            state.userData.token = payload.token,
            state.userData.refresh = payload.refresh
            state.userData.userName = payload.name

            
        },
        
        logout(state) {
            state.userData.email = '',
            state.userData.userId = '',
            state.userData.token = '',
            state.userData.refresh = '',
            state.userData.userName = ''

            localStorage.removeItem('token')
            localStorage.removeItem('refresh')

            router.push('/')
        },
        addUserInfo(state, userInfo) {
            state.user = userInfo
        }
    },
    actions: {
        async signup({ commit, getters }, {email, password, userName} ){

            

            // const rest = {
            //     email,
            //     password,
            //     returnSecureToken: true
            // }

            // // fb.auth().createUserWithEmailAndPassword(email, password)
            // // .then(user=>{})

            // Vue.http.post(`${FbAuth}/signupNewUser?key=${FbApiKey}`, rest)
            // .then(resourse=> resourse.json())
            // .then(authData=> {
            //     console.log(authData)
            //     commit('adduser', authData)
            //     localStorage.setItem('token', authData.idToken)
            //     localStorage.setItem('refresh', authData.refreshToken)
            //     router.push('/')
            // })
            // .catch(error=>{
                
            //     console.log(error)
            // })

            console.log(userName, email)
            commit('clearError')
            commit('setLoading', true)


            try {

                const rest = {
                    email,
                    password,
                    returnSecureToken: true
                }
                console.log(userName, email)
                const result = await Vue.http.post(`${FbAuth}relyingparty/signupNewUser?key=${FbApiKey}`, rest)
                commit('setLoading', false)
                console.log(result.body)
              
                // commit('adduser', result.body)
                var authData = await result.json()
                console.log('authData',authData)

                const dbData = await Vue.http.post(`https://fir-tut-d15e8.firebaseio.com/users/${authData.localId}.json`, {
                   email: authData.email,
                   uid: authData.localId,
                   name: userName
                })

                var dbDataJson = await dbData.json()

                

                console.log('dbData', dbDataJson)


                const getDataFromDB = await Vue.http.get(`https://fir-tut-d15e8.firebaseio.com/users/${authData.localId}.json`)
                const getDataFromDBJson = await getDataFromDB.json()
                var userDataDb
                Object.keys(getDataFromDBJson).forEach(key=> {
                    userDataDb = getDataFromDBJson[key]
                })

                console.log('qqqqqqq',userDataDb)

                commit('adduser', {
            email: getDataFromDBJson.email,
            name: getDataFromDBJson.name,
            uid: getDataFromDBJson.uid,
            token: authData.idToken,
            refresh: authData.refreshToken,
            
                })
                console.log('dbData', dbData)
                localStorage.setItem('token', authData.idToken)
                localStorage.setItem('refresh', authData.refreshToken)
                
                
                
                router.push('/')
                
            }catch(error) {
               
                console.log(error)
                throw error
                if(error.status === 400 ) {
                    commit('setLoading', false)
                    commit('setError', error.body.error.message)
                    throw error
                }
                
                const delAccount = await Vue.http.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/deleteAccount?key=${FbApiKey}`, {
                            idToken: authData.idToken
                        })
                        // Promise.reject
                        console.log('Ошибка тут')
                commit('setLoading', false)
                commit('setError', error.body.error.message)
                throw error

            }
            








            
            
          },
          async signin({commit}, {email, password}) {
            
            

            // commit('clearError')
            // commit('setLoading', true)

            

            // const rest = {
            //             email,
            //              password,
            //             returnSecureToken: true
            //         }
                    
            // return Vue.http.post(`${FbAuth}/verifyPassword?key=${FbApiKey}`, rest)
            
            //         .then(response=> {
                        
            //             if(response.status !== 200) {
            //             return Promise.reject(new Error('failed'))
            //             console.log(response.status)

                        
            //             }
            //             return Promise.reject(new Error('failed'))
            //             reject()
                        
            //         }
            //         )
            //         .catch(error=> {
            //             return Promise.reject(new Error('failed'))
            //         })
                
              

            

            

            try {
                const rest = {
                    email,
                    password,
                    returnSecureToken: true
                }
                const response = await Vue.http.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${FbApiKey}`, rest)

                const authDataLogin = await response.json()

                console.log(authDataLogin)
                

                const getLoginData = await Vue.http.get(`https://fir-tut-d15e8.firebaseio.com/users/${authDataLogin.localId}.json`)
                const getLoginDataJson = await getLoginData.json()
                    var userFromDB
                Object.keys(getLoginDataJson).forEach(key=> {
                    userFromDB = getLoginDataJson[key]
                })

                console.log('aaaaaaaaaaaaaaaaaa',authDataLogin.localId)

                console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',userFromDB)

                commit('adduser', {
                    email: userFromDB.email,
                    name: userFromDB.name,
                    uid: userFromDB.uid,
                    token: authDataLogin.idToken,
                    refresh: authDataLogin.refreshToken,
                    
                        })
                
                // commit('setLoading', false)
                // console.log(response.body)
                // commit('adduser', response.body)
                localStorage.setItem('token', response.body.idToken)
                localStorage.setItem('refresh', response.body.refreshToken)
                
               router.push(`user/`)
                
                    
            } catch(error) {
                console.log(error)
                commit('setLoading', false)
                commit('setError', error.body.error.message)

                throw error.body.error
                 
            }

          },
          logout({commit}) {
            commit('logout')
          },



        // //   Обновление токена


        async refreshToken( {commit} ) {
            const refreshToken = localStorage.getItem("refresh")

            commit('clearError')
            commit('setLoading', true)

            if(refreshToken) {

                try {

                const refreshUserData = await Vue.http.post(`https://securetoken.googleapis.com/v1/token?key=${FbApiKey}`, {
                grant_type: 'refresh_token',
                refresh_token: refreshToken
                })

                const refreshUserDataObj = await refreshUserData.json()
                console.log('zzzzzzzzzzz',refreshUserDataObj)
                const getLoginDataRefresh = await Vue.http.get(`https://fir-tut-d15e8.firebaseio.com/users/${refreshUserDataObj.user_id}.json`)
                const getLoginDataRefreshObj =await getLoginDataRefresh.json()

                var refFreshromDB
                Object.keys(getLoginDataRefreshObj).forEach(key=> {
                    refFreshromDB = getLoginDataRefreshObj[key]
                })

                console.log('pppppppppp',getLoginDataRefresh)
                
                commit('adduser', {
                    email: refFreshromDB.email,
                    name: refFreshromDB.name,
                    uid: refFreshromDB.uid,
                    token: refreshUserDataObj.id_token,
                    refresh: refreshUserDataObj.refresh_token,
                    
                        })

                        commit('setLoading', false)

        }catch(error) {
            throw error
        }
               
                
            }
        },
        

        
    },
    getters: {
        // isAuth(state) {
        //     if(state.user) {
        //         return true
        //     }
        //     return false
        // },

        getUser(state) {
            return state.userData
        },

        // userName(state) {
        //     return state.user.email
        // }
        }
    
}

