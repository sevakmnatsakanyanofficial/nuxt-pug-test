<template>
    <section class="article-page">
        <div class="container">
            <div v-for="block in article" key="{{ block.id }}">
                    <div class="row" v-if="block.type === 'article_intro_block'">
                        <div class="col-12 col-md-5">
                            <Img class="article_intro_block_img w-100" :src="block.data.image" />
                        </div>
                        <div class="col-12 col-md-7">
                            <h1 class="article_intro_block_heading">{{ block.data.title }}</h1>
                            <small class="article_intro_block_info">
                                {{ block.data.reading_time }} мин на чтение
                                <br>
                                {{ block.data.views_count }} прочитали статью
                            </small>
                            <p class="article_intro_block_description">
                                {{ block.data.short_description }}
                            </p>
                        </div>
                    </div>
                    <div v-else-if="block.type === 'text_block'">
                        <div class="row">
                            <div class="col-12 text_block_data" v-html="block.data"></div>
                        </div>
                    </div>
                    <div class="row" v-else-if="block.type === 'image_block'">
                        <div class="col-12">
                            <Img class="image_block_img w-100" :src="block.data.src" alt="block.data.caption" />
                        </div>
                    </div>
                    <div style="margin-top: 100px;" class="row" v-else-if="block.type === 'slider_block'">
                        <div class="col-12">
                            <Carousel>
                                <Slide v-for="slide in block.data" :key="slide">
                                    <Img :src="slide" class="carousel__item w-100" />
                                </Slide>

                                <template #addons>
                                    <Navigation />
                                </template>
                            </Carousel>
                        </div>
                    </div>
                    <div style="margin-top: 100px;margin-bottom: 100px;" class="row" v-else-if="block.type === 'subscribe_form_block'">
                        <div class="col-12">
                            <NewsLetterSubscribe />
                        </div>
                    </div>
                    <div v-else-if="block.type === 'article_list_block'">
                        
                        <div class="row">
                            <h3 class="col-12">{{ block.data.title }}</h3>
                        </div>

                        <div class="row">
                            <ApiHomeArticle 
                            class="col-12 col-sm-6 col-lg-4" 
                            v-for="art in block.data.articles" 
                            :article="art" />
                        </div>
                    </div>
                </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';

const route = useRoute();

const article = ref([])
const res = await axios.get('https://devtwit8.ru/api/v1/page/', {
    params: {
        path: route.path
    }
});
const data = res.data;
article.value = data.body;

useHead({
    title: data.meta.title,
})

useSeoMeta({
  title: data.meta.title,
  description: data.meta.description,
})

definePageMeta({
  middleware: [
    'article-access',
  ],
});
</script>

<style lang="scss">
.article_intro_block {
    &_img {
        border-radius: 2px 220px 2px 2px;
        background: #D9D9D9;
    }

    &_heading {
        margin-top: 90px;
        margin-bottom: 20px;
        color: var(--dark-color);
        font-family: Montserrat;
        font-size: 50px;
        font-style: normal;
        font-weight: 800;
        line-height: 66px;
        padding: 0;
    }

    &_info {
        color: var(--grey-color);
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        display: inline-block;
        margin-bottom: 50px;
    }

    &_description {
        color: var(--dark-color);
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        margin: 0;
        padding: 0;
    }
}

.text_block_data {
    margin-top: 100px;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        padding-left: 180px;
        padding-right: 155px;
    }

    h2 {
        color: var(--dark-color);
        font-family: Montserrat;
        font-size: 34px;
        font-style: normal;
        font-weight: 800;
        line-height: 46px;
        margin-bottom: 50px !important;
    }

    p {
        color: var(--dark-color);
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
    }
}

.image_block_img {
    margin-top: 60px;
    border-radius: 2px 220px 2px 2px;
    background: #D9D9D9;
}

.article-page {
  blockquote {
    position: relative;

    &:before {
      position: absolute;
      content: url('./img/quotes.svg');
      display: block;
      float: left;
      top: 0;
      bottom: 0;
    }

    footer {
      color: var(--grey-color);
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }

    > * {
        margin-left: 116px;
    }
  }
}

.carousel__next, .carousel__prev {
    width: 60px;
    height: 60px;
    background-color: var(--dark-color);
    color: white;
}

.carousel__next:hover, .carousel__prev:hover {
    color: white;
}

.carousel__viewport {
    width: 80% !important;
    margin: auto;
}
</style>