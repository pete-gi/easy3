<template>
    <div class="gallery" :class="classes" v-cloak>
        <template v-if="editmode">
            <slot></slot>
        </template>
        <template v-else>
            <gallery-image v-for="img in data" :key="img.filename" :href="img.imagepath" className="gallery-item" :fancybox="img.galleryname"
                :src="img.thumbpath" alt="" :title="img.filename">
            </gallery-image>
        </template>
    </div>
</template>

<script>
    import galleryImage from './gallery-image.vue'
    export default {
        components: {
            galleryImage
        },
        data() {
            return {
                editmode: false,
                data: null
            }
        },
        props: [
            'classes'
        ],
        methods: {
            checkIsEditMode() {
                let mode = document.getElementById('page').getAttribute('data-editmode');
                if (mode == "true") {
                    this.editmode = true;
                } else {
                    this.editmode = false;
                }
            },
            loadImages() {
                let code = JSON.parse(this.$slots.default[0].text);
                this.data = code;
            }
        },
        mounted() {
            this.checkIsEditMode();
            if (!this.editmode) {
                this.loadImages();
            }
        }
    }
</script>