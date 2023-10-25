<template>
    <div class="row">
        <h3 class="col-12">{{ data.data.title }}</h3>
    </div>

    <div class="row">
        <BlocksArticleListItem class="col-12 col-sm-6 col-lg-4" v-for="article in data.data.articles" :data="article" />
    </div>
</template>

<script setup>

defineProps({
    data: {
        type: Object
    }
})
</script>