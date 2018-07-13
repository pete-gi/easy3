<template>
    <div id="cookies-container">
        <button id="cookies-close">
            <i class="fa fa-times"></i>
        </button>
        <div class="content">
            <h5 class="title">
                Strona korzysta
                <br> z plików Cookies.
            </h5>
            <div>
                Korzystając ze strony wyrażasz zgodę na ich używanie.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            init() {
                this.check();
                document.getElementById('cookies-close').addEventListener('click', (e) => {
                    e.preventDefault();
                    this.create();
                    this.close();
                })
            },
            check() {
                let c = document.cookie;
                if (c.indexOf('cookies=accept') !== -1) {
                    this.close();
                }
            },
            create() {
                var CookieDate = new Date;
                CookieDate.setFullYear(CookieDate.getFullYear() + 10);
                document.cookie = "cookies=accept; expires=" + CookieDate.toGMTString();
            },
            close() {
                document.getElementById('cookies-container').style.display = 'none';
            }
        },
        mounted() {
            this.init();
        }
    }
</script>
