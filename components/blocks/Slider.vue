<template lang="pug">
Carousel
    Slide(v-for="slide in data.data" :key="slide")
        Img.carousel__item.w-100(:src="slide")

    template(#addons)
        Navigation
</template>

<script setup>

defineProps({
    data: {
        type: Object
    }
})
</script>

<style lang="scss">
.carousel__next,
.carousel__prev {
    width: 60px;
    height: 60px;
    background-color: var(--dark-color);
    color: white;
}

.carousel__next:hover,
.carousel__prev:hover {
    color: white;
}

.carousel__viewport {
    width: 80% !important;
    margin: auto;
}
</style>