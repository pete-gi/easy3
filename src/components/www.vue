<template>
    <a :href="address">{{www}}</a>
</template>

<script>
    export default {
        props: [
            'ssl'
        ],
        computed: {
            www: function () {
                let str = this.$slots.default[0]['text'];
                return str.trim();
            },
            clean: function () {
                let clean = this.www.replace('http://', '').replace('https://', '').replace('www.', '').replace(
                    ' ', '');
                return clean;
            },
            address: function () {
                let www = this.clean;
                let http = '';

                if (this.ssl == 'true' || this.ssl == true) {
                    http = 'https://';
                } else {
                    http = 'http://';
                }
                return `${http}${www}`;
            }
        }
    }
</script>