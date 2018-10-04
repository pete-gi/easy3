import Vue from 'vue';
import Vuex from 'vuex';
// import modules
import settings from '../store/modules/settings';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        settings
    }
});
