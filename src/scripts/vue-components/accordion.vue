<template>
    <div class="accordion" :id="id">
        <button class="btn">{{title}}</button>
        <div class="accordion-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'id'
        ]
    }
</script>