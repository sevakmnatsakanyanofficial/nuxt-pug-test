<template>
    <article class="article">
        <Img class="w-100 article_img" :src="data.image" />
        <h2 class="article_heading"> {{ data.title }} </h2>
        <UiArticleButton class="btn-black article_button" :link="data.link">
            Читать
        </UiArticleButton>
    </article>
</template>

<script setup>
defineProps({
    data: {
        type: Object
    }
})
</script>

<style scoped lang="scss">
.article {
    &_img {
        height: 320px
    }

    &_heading {
        overflow: hidden;
        color: var(--dark-color);
        text-overflow: ellipsis;
        font-family: Montserrat;
        font-size: 22px;
        font-style: normal;
        font-weight: 800;
        line-height: 30px;
        height: 60px;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    &_button {
        margin-bottom: 30px;
    }
}
</style>
