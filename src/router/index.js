import Vue from "vue";
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    // base: __dirname,
    routes: [{
            path: '/',
            name: 'login',
            component: Login,
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        }
    ]
});