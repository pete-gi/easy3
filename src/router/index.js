import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/Index.vue';
import Blocks from '../views/Blocks/Index.vue';
import Forms from '../views/Forms/Index.vue';
import Languages from '../views/Languages/Index.vue';
import Pages from '../views/Pages/Index.vue';
import Settings from '../views/Settings/Index.vue';
import Themes from '../views/Themes/Index.vue';
import Users from '../views/Users/Index.vue';
/* SUBPAGES */
import PagesAdd from '../views/Pages/Add.vue';
import PagesSettings from '../views/Pages/Settings.vue';
import PageManage from '../views/Pages/Manage.vue';

Vue.use(Router);

export default new Router({
    // base: document.baseURI,
    base: document.getElementsByTagName('base')[0].getAttribute('href'),
    linkExactActiveClass: 'is-active',
    linkActiveClass: 'is-parent-active',
    routes: [
        {
            path: '/admin',
            name: 'index',
            component: Index
        }, {
            path: '/admin/blocks',
            name: 'blocks',
            component: Blocks
        }, {
            path: '/admin/forms',
            name: 'forms',
            component: Forms
        }, {
            path: '/admin/languages',
            name: 'languages',
            component: Languages
        }, {
            path: '/admin/pages',
            name: 'pages',
            component: Pages
        }, {
            path: '/admin/settings',
            name: 'settings',
            component: Settings
        }, {
            path: '/admin/themes',
            name: 'themes',
            component: Themes
        }, {
            path: '/admin/users',
            name: 'users',
            component: Users
        }, /* SUBPAGES */ {
            path: '/admin/pages/add',
            name: 'pages-add',
            component: PagesAdd
        }, {
            path: '/admin/pages/settings',
            name: 'pages-settings',
            component: PagesSettings
        }, {
            path: '/admin/pages/manage/:id',
            name: 'page-manage',
            component: PageManage
        }
    ]
});
