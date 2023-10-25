<template>
    <div class="text_block_data" v-html="data.data"></div>
</template>

<script setup>

defineProps({
    data: {
        type: Object
    }
})
</script>