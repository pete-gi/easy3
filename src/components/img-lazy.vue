<template>
    <img :data-src="src" :src="thesrc" alt="">
</template>

<script>
    export default {
        props: [
            'src',
        ],
        data() {
            return {
                offset: 0,
                thesrc: false
            }
        },
        methods: {
            loadImg() {
                if (!this.thesrc) {
                    this.offset = this.$el.getBoundingClientRect();
                    setTimeout(() => {
                        let difference = window.innerHeight - window.scrollY;
                        if (this.offset.top < window.innerHeight) {
                            let img = new Image();
                            img.src = this.$props.src;
                            this.thesrc = img.src;
                        }
                    }, 500);
                }
            }
        },
        mounted() {
            this.loadImg();
            window.addEventListener('scroll', () => {
                this.loadImg();
            });
        }
    }
</script>