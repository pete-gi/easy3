<template>
    <div class="parallax-section" :style="`background:url(${img}) no-repeat center center / cover fixed;height:${height}`">
        <div class="parallax-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            img: {
                type: String
            },
            height: {
                type: String,
                default: '500px'
            }
        }
    }
</script>