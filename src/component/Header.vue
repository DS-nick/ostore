<template>
<div>
    <div class="backdrop"
    v-if = "menuOpen"
    @click="toggleOpen"
    ></div>
    <header class="main-header">
        <div>
            <button class="toggle-button"
            v-on:click = "toggleOpen"
            >
                <span class="toggle-button__bar"></span>
                <span class="toggle-button__bar"></span>
                <span class="toggle-button__bar"></span>
            </button>
            <router-link to="/" class="main-header__brand">OnlineStore</router-link>
        </div>
        <nav class="main-nav"

        >
        <span
        v-if="loading"
        >Loading...</span>
            <ul class="main-nav__items"
            v-else
            >
                <li class="main-nav__item">
                    <router-link to="/">ГЛАВНАЯ</router-link>
                    </li>
                <li class="main-nav__item"
                v-if="!user.userId"
                >
                    <router-link to="/login" title="Войти">
                    ВОЙТИ
                    <!-- <svg height="16px"  viewBox="0 0 1792 1792" width="16px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1312 896q0 26-19 45l-544 544q-19 19-45 19t-45-19-19-45v-288h-448q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h448v-288q0-26 19-45t45-19 45 19l544 544q19 19 19 45zm352-352v704q0 119-84.5 203.5t-203.5 84.5h-320q-13 0-22.5-9.5t-9.5-22.5q0-4-1-20t-.5-26.5 3-23.5 10-19.5 20.5-6.5h320q66 0 113-47t47-113v-704q0-66-47-113t-113-47h-312l-11.5-1-11.5-3-8-5.5-7-9-2-13.5q0-4-1-20t-.5-26.5 3-23.5 10-19.5 20.5-6.5h320q119 0 203.5 84.5t84.5 203.5z"/>
                    </svg> -->
                    </router-link>
                    </li>
                    <li class="main-nav__item" title="Зарегистрироваться"
                    v-if="!user.userId"
                    >
                    <router-link to="/regestration">
                        <!-- <img src='../assets/multimedia.png'/> -->
                        РЕГИСТРАЦИЯ
                    </router-link>
                </li>
                <li class="main-nav__item" title="Выйти"
                v-if="user.userId"
                @click="logout"
                >
                    <span>
                        <!-- <img src="../assets/logout.png" alt=""> -->
                        ВЫЙТИ
                    </span>
                </li>
                <li class="user-account"
                v-if="user.userId"
                >
                    <router-link to="/user"
                    
                    >
                    <!-- <span
                    v-if="loading"
                    >Loading...</span> -->
                        <!-- <img src="../assets/account.png" alt=""> -->
                        <div class="user-account__icon">
                            <span>{{ user.userName | toUpper}}</span>
                        </div>
                    </router-link>
                    <div class="block"></div>
                </li>
            </ul>
        </nav>
    </header>
    <compMobileNav
    v-if ="menuOpen"
    @closeMenu="closeMenu"
    />
    </div>
</template>

<script>

import { bus } from '../main'
import compMobileNav from './MobileNav'
export default {
    data() {
        return {
            menuOpen: false
        }
    },

    computed: {
        user() {
            if(this.$store.state.users.userData)
            return this.$store.getters.getUser
        },
        loading() {
            return this.$store.getters.loading
        }
    },

    methods: {
        toggleOpen() {
            
           
            
            this.menuOpen = !this.menuOpen
            
        },
        closeMenu(value) {
            
            this.menuOpen = !this.menuOpen
        },
        logout() {
            this.$store.dispatch('logout')
        }
    },
    filters: {
        toUpper(value) {
            return value.charAt(0).toUpperCase()
        }
    },
    components: {
        compMobileNav
    }, 

    created() {
        
    }
    
}
</script>

<style>

.backdrop {
    /* display: none; */
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.596);
}

.main-header {
   
    background: #4682B4;
    padding: 12px 20px;
}
.main-header > div {
    display: inline-block;
}

.toggle-button {
    width: 48px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding-top: 0;
    padding-bottom: 0;
    vertical-align: middle;
}
.user-account {
    display: inline-block;
    margin-left: 20px;
    vertical-align: top;
}

.user-account__icon {
    display: inline-block;
    background: gray;
    width: 28px;
    height: 28px;
    vertical-align: middle;
    border-radius: 50%;
    position: relative;
}

.user-account__icon span {
    position: absolute;
    left: 8px;
    top: 4px;
    color: white;
    font-weight: bold;
}

.main-nav__item span {
    font-weight: bold;
    font-size: 20px;

}

.main-nav__item span:hover {
    cursor: pointer;
    color: white;
    padding: 3px 0;
    border-bottom: white solid 5px;
}



@media (min-width: 40rem) {
    .toggle-button {
        display: none;
    }
}

.toggle-button:focus {
    outline: none;
}

.toggle-button__bar {
    width: 100%;
    height: 2px;
    background: black;
    display: block;
    margin: 6px 0;
}

.main-header__brand {
    text-decoration: none;
    font-size: 22px;
    color: rgba(240, 229, 229, 0.705);
    font-weight: bold;
    vertical-align: middle;
}

.main-nav {
    display: none;
   
   
}

@media (min-width: 40rem) {
    
.main-nav {
    display: inline-block;
    width: calc(100% - 120px);
    text-align: right;
    vertical-align: middle;
   
}
}

.main-nav__items {
   margin: 0;
   padding: 0;
   list-style: none;
   vertical-align: middle;
}

.main-nav__item {
    display: inline-block;
    margin-left: 40px;
    vertical-align: middle;
}

.main-nav__item a,
.mobile-nav__item a {
    text-decoration: none;
    color: rgb(41, 40, 40);
    font-weight: bold;
    font-size: 20px;
}

.main-nav__item a:hover,
.main-nav__item a:active {
    
    color: white;
    padding: 3px 0;
    border-bottom: white solid 5px;

}
</style>


