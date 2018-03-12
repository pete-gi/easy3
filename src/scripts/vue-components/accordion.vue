<template>
    <div class="accordion">
        <button class="btn">{{title}}</button>
        <div class="accordion-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'title'
        ]
    }
</script>