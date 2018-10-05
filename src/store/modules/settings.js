const settings = {
    namespaced: true,
    state: {
        base: document.getElementsByTagName('base')[0].getAttribute('href'),
        lang_active: 'pl',
        lang_opposite: 'en',
        lang_list: [
            'pl', 'en'
        ],
        nav_on: false
    },
    mutations: {
        lang_toggle(state) {
            state.lang_active = state.lang_active === 'pl' ? 'en' : 'pl';;
            state.lang_opposite = state.lang_opposite === 'pl' ? 'en' : 'pl';
        }
    },
    actions: {

    }
};

export default settings;