<template lang="pug">
div.row
    div.col-12.col-md-5
        Img.article_intro_block_img.w-100(:src="data.data.image")

    div.col-12.col-md-7
        h1.article_intro_block_heading {{ data.data.title }}
        small.article_intro_block_info
            |{{ data.data.reading_time }} мин на чтение
            br 
            |{{ data.data.views_count }} прочитали статью
        p.article_intro_block_description {{ data.data.short_description }}
</template>

<script setup>

defineProps({
    data: {
        type: Object
    }
})
</script>

<style lang="scss">
.article_intro_block {
    &_img {
        border-radius: 2px 220px 2px 2px;
        background: #D9D9D9;
    }

    &_heading {
        margin-top: 80px;
        margin-bottom: 20px;
        color: var(--dark-color);
        font-family: Montserrat;
        font-size: 44px;
        font-style: normal;
        font-weight: 800;
        line-height: 45px;
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
</style>