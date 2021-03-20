import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return{
            counter: 0,
            isLoggedIn: false,
        }
    },

    mutations: {
        setAuth(state, payload) {
            console.log('payload:', payload)
            state.isLoggedIn = payload.isAuth
        }
    },

    actions: {
        login(context) {
            console.log('context:', context)
            context.commit('setAuth', { isAuth: true})
        },

        logout(context){
            console.log('context:', context)
            context.commit('setAuth', { isAuth: false})
        }
    },

    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn
        }
    }
})

const app = createApp(App);

app.use(store);

app.mount('#app');
