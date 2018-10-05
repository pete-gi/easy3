import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import store from './store/index';
import router from './router/index';
// import {sync} from 'vuex-router-sync';
import 'bulma/css/bulma.min.css';

// sync(store, router);
Vue.config.productionTip = false

Vue.use(VueResource);
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
}).$mount('#app');