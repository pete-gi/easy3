import Vue from 'vue';
import VueResource from 'vue-resource';
import cookies from './vue-components/cookies.vue';
import gmap from './vue-components/gmap.vue';
import gmarker from './vue-components/gmarker.vue';
import parallax from './vue-components/parallax.vue';
import tel from './vue-components/tel.vue';
import email from './vue-components/email.vue';
import www from './vue-components/www.vue';
import gallery from './vue-components/gallery-loader.vue';
// import accordion from './vue-components/accordion.vue';
// import masonry from './vue-components/masonry.vue';
// import gridItem from './vue-components/masonry-grid.vue';

Vue.use(VueResource)
let vue = new Vue({
    el: '#page',
    data: {
        sendingMail: false,
        rodo: {
            checkbox: null,
            info: false,
            warning: false
        }
    },
    methods: {
        sendMail(id) {
            if (this.rodo.checkbox === false || this.rodo.checkbox === null) {
                this.rodo.warning = true;
            } else if (this.rodo.checkbox === true) {
                this.rodo.warning = false;
                let form = document.getElementById(id);
                let formData = new FormData(form);
                this.sendingMail = 'sending';

                form.classList.add('form-sending');

                Vue.http.post(form.action, formData).then(res => {
                    form.classList.remove('form-sending');
                    form.classList.add('form-success');
                    this.sendingMail = 'success';
                }, res => {
                    form.classList.remove('form-sending');
                    form.classList.add('form-failure');
                    this.sendingMail = 'failure';
                });
            }

        },
        rodoPopup() {
            this.rodo.checkbox = true;
            this.rodo.warning = false;
        },
        checkRodoWarning() {
            if (this.rodo.checkbox === true) {
                this.rodo.warning = false;
            }
        }
    },
    components: {
        cookies,
        gmap,
        gmarker,
        parallax,
        tel,
        email,
        www,
        gallery,
        // accordion,
        // masonry,
        // gridItem
    }
})

export default vue;