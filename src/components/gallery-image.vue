<template>
    <a :href="href" :class="className" :data-fancybox="fancybox">
        <img :data-src="src" :src="thesrc" alt="" :title="title">
    </a>
</template>

<script>
    export default {
        props: [
            'href',
            'fancybox',
            'src',
            'title',
            'className'
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