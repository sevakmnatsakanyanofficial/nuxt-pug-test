<template>
    <NuxtLink :to="link" class="btn" no-prefetch>
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