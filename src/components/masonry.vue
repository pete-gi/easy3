<template>
    <div class="masonry">
        <slot></slot>
    </div>
</template>

<script>
    import grid from './masonry-grid.vue';
    export default {
        components: {
            grid
        }
    }
</script>