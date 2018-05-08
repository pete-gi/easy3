<template>
    <div class="grid-item" :class="[size, classname]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'grid-item',
        props: [
            'width',
            'height',
            'classname'
        ],
        computed: {
            size() {
                let w = this.$props.width;
                let h = this.$props.height ? this.$props.height : null;
                let sizeClass = `grid-item--w-${w}`;
                if (h !== null) {
                    sizeClass += ` grid-item--h-${h}`;
                }
                return sizeClass;
            }
        }
    }
</script>