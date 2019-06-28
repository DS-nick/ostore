export default {
    state: {
        loading: false,
        error: null,
        isAuthLod: false

    },
    mutations: {
        isAuthLoating(state, payload) {
            state.isAuthLod  = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        }, 
        setError(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null
        }

    },
    actions: {
        isAuthLoating( {commit}, payload) {
            commit('isAuthLoating', payload)
        },
        setLoading( {commit }, payload) {
            commit('setLoading', payload)
        },
        setError( {commit}, payload ) {
            commit('setError', payload)
        },
        clearError( {commit} ) {
            commit('clearError')
        }
    },
    getters: {

        isAuthLod(state) {
            return state.isAuthLod
        },
        loading(state) {
            return state.loading
        },
        error(state) {
            return state.error
        }
    }
}