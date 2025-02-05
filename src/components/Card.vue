<script setup>
const props = defineProps(['section', 'title', 'data', 'width', 'height', 'isOutlined']);

function imageSrc(section, data) {
    let format = '.png'
    if (section == "boosters") {
        format = '.svg'
    }
    let fileName = 'assets/images/' + section + '/' + data.name.replace(/ |\//g, '_') + format

    fileName = fileName.replaceAll('"', '')
    return fileName
}
</script>

<template>
    <div class="item">
        <h4>{{ title }}</h4>
        <img :class="{ outlined: isOutlined }" :src="imageSrc(section, data)" :alt=data.name :width=width
            :height=height>
        <p>{{ data.name }}</p>
    </div>
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