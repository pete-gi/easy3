<template>
    <a :href="`tel:${tel.clean}`">{{tel.full}}</a>
</template>

<script>
    export default {
        computed: {
            tel: function () {
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