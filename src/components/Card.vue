<script setup>
defineProps(['data']);
</script>

<template>
    <div class="card">
        <img :src="'https://helldivers.wiki.gg/images/0/0e/' + data.image + '_Stratagem_Icon.png'">
        <p>{{ data.name.toUpperCase() }}</p>
    </div>
</template>

<style scoped>
.card {
    text-align: center;
    width: 150px;
    margin: auto;
}

img {
    height: 100px;
    width: 100px;
}

p {
    height: 2lh;
}
</style>