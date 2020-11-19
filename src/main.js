import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index';
import { Message, Notification } from 'element-ui';

Vue.config.productionTip = false
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification


new Vue({
    render: h => h(App),
    router,
}).$mount('#app');