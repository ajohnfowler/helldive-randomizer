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

img {
    border-radius: 2px;
}

img.outlined {
    border: 3px gray solid;
}
</style>