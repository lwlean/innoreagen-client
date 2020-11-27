import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router/index';
import store from './store/index';
import 'element-ui/lib/theme-chalk/index.css';
// import { Container, Header, Main, Footer, Aside, Menu, Submenu, MenuItem, Table, TableColumn, Message, Notification } from 'element-ui';

Vue.use(ElementUI);
Vue.config.productionTip = false
    // Vue.use(Container);
    // Vue.use(Header);
    // Vue.use(Main);
    // Vue.use(Footer);
    // Vue.use(Aside);
    // Vue.use(Menu);
    // Vue.use(Submenu);
    // Vue.use(MenuItem);
    // Vue.use(Table);
    // Vue.use(TableColumn);
    // Vue.prototype.$message = Message
    // Vue.prototype.$notify = Notification


new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');