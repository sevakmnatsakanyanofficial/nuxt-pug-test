<template>
    <NuxtLink :to="link" class="btn">
        <slot />
    </NuxtLink>
</template>

<script setup>
defineProps({
    link: {
        type: String,
        defult: '#',
    }
})
</script>