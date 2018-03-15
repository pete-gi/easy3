<template>
    <div class="gallery" :class="classes" v-cloak>
        <template v-if="editmode">
            <slot></slot>
        </template>
        <template v-else>
            <a v-for="img in data" :key="img.filename" :href="img.imagepath" class="gallery-item" :data-fancybox="img.name">
                <img :src="img.thumbpath" alt="" :title="img.filename">
            </a>
        </template>
    </div>
</template>

<script>
    export default {
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
