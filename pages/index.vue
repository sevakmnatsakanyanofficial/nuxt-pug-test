<template>
    <section>
        <div class="container">
            <div class="row">
                <BlocksArticleListItem 
                    class="col-12 col-sm-6 col-lg-4" 
                    v-for="article in articlesData.articles"
                    :data="article" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAll } from '../api/articles'

const articlesData = ref({})

onMounted(() => {
    const res = getAll().then((data) => {
        useHead({
            title: data.meta.title,
        })

        useSeoMeta({
            title: data.meta.title,
            description: data.meta.description,
        })

        articlesData.value = data.body[0].data;
    });
}) 
</script>