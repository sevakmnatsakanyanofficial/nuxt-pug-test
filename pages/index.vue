<template>
    <section>
        <div class="container">
            <div class="row">
                <ApiHomeArticle 
                class="col-12 col-sm-6 col-lg-4" 
                v-for="article in articlesData.articles" 
                :article="article" />
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';

const articlesData = ref({})
const res = await axios.get('https://devtwit8.ru/api/v1/page/', {
    params: {
        path: '/'
    }
});
const data = res.data;
articlesData.value = data.body[0].data;

useHead({
    title: data.meta.title,
})

useSeoMeta({
  title: data.meta.title,
  description: data.meta.description,
})
</script>