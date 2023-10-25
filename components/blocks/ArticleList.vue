<template lang="pug">
div.row
    h3.col-12 {{ data.data.title }}

div.row
    BlocksArticleListItem.col-12.col-sm-6.col-lg-4(v-for="article in data.data.articles" :data="article")
</template>

<script setup>

defineProps({
    data: {
        type: Object
    }
})
</script>