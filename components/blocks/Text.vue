<template lang="pug">
div.text_block_data(v-html="data.data")
</template>

<script setup>

defineProps({
    data: {
        type: Object
    }
})
</script>