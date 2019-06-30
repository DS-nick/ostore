import Vue from 'vue'
export default {
    state: {
        products: [
            {   id: 1,
                name: 'Strech Boardshort',
                brand: 'Wellen',
                price: 75.25,
                imgSrc: 'https://huckberry.imgix.net/spree/products/401764/original/U7T9qpEMy2_wellen_66_stretch_boardshort_0_original.jpg?auto=compress%2Cformat&dpr=1&cs=tinysrgb&crop=top&fit=clip&w=300&h=300'
                    },
             {
                id: 2,
                name: 'Lorem ipsum dolor sit',
                brand: 'OAS',
                price: 128.25,
                imgSrc: 'https://huckberry.imgix.net/spree/products/404437/original/nQB3ONHIV0_oas_jacquard_woven_towel_shirt_0_original.jpg?auto=compress%2Cformat&dpr=1&cs=tinysrgb&crop=top&fit=clip&w=200&h=200'
                    },
                    {
                        id: 3,
                        name: 'Lorem ipsum dolor sit',
                        brand: 'Lorem',
                        price: 58.25,
                        imgSrc: 'https://huckberry.imgix.net/spree/products/402342/original/cApMt1LyQT_york-athletics-mfg_the_henry_low_optic_mesh_0_original.jpg?auto=compress%2Cformat&dpr=1&cs=tinysrgb&crop=top&fit=clip&w=200&h=200'
                            }
        ]
    },
    mutations: {},
    actions: {
       async addProduct({commit, getters}, payload) {

            
          const productRes = await  Vue.http.post(`https://fir-tut-d15e8.firebaseio.com/products.json`, {
                ...payload,
                uid: getters.getUser.userId

            })
            console.log(productRes)
        }
    },
    getters: {
        products(state) {
            return state.products
        },
        productById(state) {
            return productId => {
                return state.products.find(product => product.id === productId)
            }
        }
    }
}

