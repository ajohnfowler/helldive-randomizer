<script setup>
defineProps(['data', 'width', 'height', 'isOutlined']);
</script>

<template>
    <img :class="{ outlined: isOutlined }" :src=data.image :alt=data.name :width=width :height=height>
    <p>{{ data.name }}</p>
</template>

<style scoped>
.card {
    text-align: center;
    width: 100%;
    margin: auto;
}

p {
    height: 2lh;
}

img.outlined {
    filter: drop-shadow(3px 0 0 gray) drop-shadow(0 3px 0 gray) drop-shadow(-3px 0 0 gray) drop-shadow(0 -3px 0 gray);
}
</style>