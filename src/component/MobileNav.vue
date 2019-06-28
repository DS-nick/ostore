<template>
    <nav class="mobile-nav"
   
    >

    <div class="user-account-mob"
    v-if="user.userId"
    >
    <div class="user-account__icon-mob">

        </div>
        <router-link to="/user" class="user-account__link-mob">
        
        {{user.userName}}
        </router-link>
    </div>
        <ul class="mobile-nav__items">


            <!-- <li class="user-account-mob">
                <router-link to="/user">
                <div class="user-account__icon-mob">

                </div>
                <div class="user-account__name-mob">Hello</div>
                </router-link>
                </li> -->
            <li class="mobile-nav__item"
            @click="dropMenu"
            >
                <router-link to="/">Главная</router-link>
                </li>
            <li class="mobile-nav__item"
            @click="logout"
            
            v-if="user.userId"
            >
                <span>Выйти</span>
                </li>
             <li class="mobile-nav__item"
             v-if="!user.userId"
             @click="dropMenu">
                  <router-link to="/login">Войти</router-link>
             </li>
              <li class="mobile-nav__item"
              @click="dropMenu"> 
                  <router-link to="/regestration"
                  v-if="!user.userId"
                  >Регистрация</router-link>
                  </li>
        </ul>
    </nav>
</template>

<script>
import { mapState } from 'vuex'
import { bus } from '../main'
export default {
 
    data() {
        return {
            open: true,
            stylePropert: {
                name:'none',
                isActive: false
                }
        }
    },

    computed: {
        
        isAuth() {
            return this.$store.getters.isAuth
        },
        user() {
           if(this.$store.state.users.userData) {
                return this.$store.state.users.userData
            }
        }
        
        
    },

    methods: {
        setStyle() {
            
            this.stylePropert.isActive ? this.stylePropert.name = 'none' : this.stylePropert.name = 'block'
            console.log(this.stylePropert.name)
        },
        logout() {
            this.$store.dispatch('logout')
            this.$emit('closeMenu')
        },
        dropMenu() {
            
            this.$emit('closeMenu')
        }
    },

    created() {
        bus.$on('toggleOpen', (value)=> {
            
            this.stylePropert.isActive = value
            console.log(this.stylePropert.isActive)
        })
    }
    
}
</script>

<style scoped>
.mobile-nav {
    /* display: none; */
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;
    background: white;
    width: 80%;
    height: 100vh;
    
}

.mobile-nav__items {
    width: 90%;
    height: 100%;
    list-style: none;
    margin: 40% auto;
    padding: 0;
    text-align: center;
    vertical-align: center;
    
}

.mobile-nav__item {
    margin: 0 auto;
    padding: 8px 0;
}

.mobile-nav__item span {
    color: black;
    font-weight: bold;
    font-size: 20px;
}

.mobile-nav__item span:hover {
    cursor:pointer;
}


.user-account-mob {
    margin-top: 50px;
    text-align: center;
    width: 80%;
    margin-left:auto;
    margin-right: auto;
    text-align: center;
}
.user-account__link-mob {
    /* display: inline-block; */
    
    
}

.user-account__icon-mob {
    width: 28px;
    height: 28px;
    background: gray;
    border-radius: 50%;
    display: inline-block;
    margin: 0 50px;
    vertical-align: middle;
}

.user-account-mob a {
    text-decoration: none;
    vertical-align: middle;
    color: blue;
    font-size: 22px;
    vertical-align: middle;
}


</style>



