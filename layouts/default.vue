<template>
    <MainHeader />

    <Main>
        <slot />
    </Main>

    <MainFooter />
</template>

<script>
  import MainFooter from '../components/MainFooter.vue';
  import MainHeader from '../components/MainHeader.vue';

</script>