import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/Index.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    // base: document.baseURI,
    base: document.getElementsByTagName('base')[0].getAttribute('href'),
    linkExactActiveClass: 'is-active',
    linkActiveClass: 'is-parent-active',
    routes: [
        {
            path: '/admin',
            name: 'index',
            component: Index
        }
    ]
});
