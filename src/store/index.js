import Vue from 'vue';
import Vuex from 'vuex';
// import modules
import settings from '../store/modules/settings';
import pages from '../store/modules/pages';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        settings,
        pages
    }
});
