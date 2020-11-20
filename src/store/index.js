import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: 'lalala',
    },
    getters: {
        getUsername: state => {
            return state.username;
        },
    },
    mutations: {
        updateUsername: (state, newName) => {
            if (newName === '') {
                newName = 'love lean'
            }
            state.username = newName;
        }
    },
})