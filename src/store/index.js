import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'

import users from './modules/users'
import common from './modules/common'



Vue.use(Vuex)

export default new Vuex.Store({
    

    
    modules: {
        common,
        products,
        users
    }
})