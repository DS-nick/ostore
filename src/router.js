import VueRouter from 'vue-router'

import Home from './component/pages/Home.vue'
import Login from './component/pages/Login.vue'
import Registration from './component/pages/Registration.vue'
import Product from './component/pages/Product.vue'
import UserAccount from './component/pages/UserAccount.vue'

export default new VueRouter({
   routes: [{
        path: '',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/regestration',
        name: 'regestration',
        component: Registration
    },
    {
        path: '/product/:id',
        name: 'product',
        props: true,
        component: Product
    },
    {
        path: '/user',
        name: 'user',
        props: true,
        component: UserAccount
    }

],
mode: 'history'
})
    
