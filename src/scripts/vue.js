import Vue from 'vue';
import VueResource from 'vue-resource';
import gmap from './vue-components/gmap.vue';
import gmarker from './vue-components/gmarker.vue';
import parallax from './vue-components/parallax.vue';
import tel from './vue-components/tel.vue';
import email from './vue-components/email.vue';
import gallery from './vue-components/gallery-loader.vue';
// import accordion from './vue-components/accordion.vue';
// import masonry from './vue-components/masonry.vue';
// import grid from './vue-components/masonry-grid.vue';

Vue.use(VueResource)
let vue = new Vue({
    el: '#page',
    methods: {
        sendMail(id) {
            let form = document.getElementById(id);
            let formData = new FormData(form);
        
            form.classList.add('form-sending');
        
            Vue.http.post(form.action, formData).then(res => {
                form.classList.remove('form-sending');
                form.classList.add('form-success');
            }, res => {
                form.classList.remove('form-sending');
                form.classList.add('form-failure');
            });
        }
    },
    components: {
        gmap,
        gmarker,
        parallax,
        tel,
        email,
        gallery,
        // accordion,
        // masonry,
        // grid
    }
})

export default vue;