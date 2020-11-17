import vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'

export default new Router({
    routes: [{
        path: '/login',
        name: 'Login',
        component: Login
    }]
})