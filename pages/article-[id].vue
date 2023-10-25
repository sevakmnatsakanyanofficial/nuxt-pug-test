<template>
    <section v-for="d in article" key="{{ d.id }}" :class="d.type" style="margin-bottom: 100px;">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <component :is="getComponentByBlock(d.type)" :data="d"></component>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { findOne } from '../api/articles'
import ArticleIntro from '../components/blocks/ArticleIntro.vue'
import ArticleList from '../components/blocks/ArticleList.vue'
import Image from '../components/blocks/Image.vue'
import Slider from '../components/blocks/Slider.vue'
import Text from '../components/blocks/Text.vue'
import NewsLetterSubscribe from '../components/blocks/NewsLetterSubscribe.vue'
import CtaForm from '../components/blocks/CtaForm.vue'

const route = useRoute();
const article = ref([])

definePageMeta({
    middleware: [
        'article-access',
    ],
});

onMounted(() => {
    const res = findOne(route.params.id).then((data) => {
        useHead({
            title: data.meta.title,
        })

        useSeoMeta({
            title: data.meta.title,
            description: data.meta.description,
        })

        article.value = data.body;
    });
})

function getComponentByBlock(blockType) {
    // TODO: store consts like var
    switch (blockType) {
        case 'article_intro_block':
            return ArticleIntro;
        case 'text_block':
            return Text;
        case 'image_block':
            return Image;
        case 'slider_block':
            return Slider;
        case 'subscribe_form_block':
            return NewsLetterSubscribe;
        case 'article_list_block':
            return ArticleList;
        case 'cta_form_block':
            return CtaForm;
    }
}
</script>

<style lang="scss">

.text_block_data {
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

    >* {
        margin-left: 116px;
    }
}
</style>