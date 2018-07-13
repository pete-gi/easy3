<template>
    <a :href="`mailto:${email.full}`">{{email.at ? email.clean : email.full}}</a>
</template>

<script>
    export default {
        computed: {
            email: function () {
                var str = this.$slots.default[0]['text'];
                var strClean = str.replace(/([()-\s])/g, '');
                return {
                    full: str,
                    clean: strClean
                };
            }
        }
    }
</script>