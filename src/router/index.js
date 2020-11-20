import Vue from "vue";
import Login from '@/components/Login.vue'
import Show from '@/components/Show.vue'
import Home from '@/components/Home.vue'
import Monitor from '@/components/Monitor.vue'
import Data from '@/components/Data.vue'
import User from '@/components/User.vue'
import Settings from '@/components/Settings.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
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
            children: [{
                    path: '/show',
                    name: 'show',
                    component: Show,
                },
                {
                    path: '/monitor',
                    name: 'monitor',
                    component: Monitor,
                },
                {
                    path: '/data',
                    name: 'data',
                    component: Data,
                },
                {
                    path: '/user',
                    name: 'user',
                    component: User,
                },
                {
                    path: '/settings',
                    name: 'settings',
                    component: Settings,
                },
            ]
        }
    ]
});