import Vue from 'vue'
import App from './App.vue'
// import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select, Message } from 'element-ui'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
Vue.use(Message)


new Vue({
    render: h => h(App),
}).$mount('#app');