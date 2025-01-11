<script setup>
defineProps(['data']);
</script>

<template>
    <div class="card">
        <img width="100px" height="100px">
        <p>{{ data.name.toUpperCase() }}</p>
    </div>
</template>

<style scoped>
.card {
    text-align: center;
}
</style>