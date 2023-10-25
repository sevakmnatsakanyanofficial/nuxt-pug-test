<template>
    <Img class="image_block_img w-100" :src="data.data.src" alt="data.data.caption" />
</template>

<script setup>

defineProps({
    data: {
        type: Object
    }
})
</script>