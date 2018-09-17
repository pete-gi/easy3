import Vue from 'vue';
import VueResource from 'vue-resource';
import cookies from './components/cookies.vue';
import parallax from './components/parallax.vue';
import tel from './components/tel.vue';
import email from './components/email.vue';
import www from './components/www.vue';
import gallery from './components/gallery-loader.vue';
// import accordion from './components/accordion.vue';

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
        parallax,
        tel,
        email,
        www,
        gallery,
        // accordion,
    }
})

export default vue;