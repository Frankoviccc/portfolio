<template>
    <h1>
        Home
    </h1>

    <FskButton
        type="primary"
        :background="true"
    >
        View my work
    </FskButton>
</template>
<script setup lang="ts">
import FskButton from "~/components/atoms/button/fsk-button.vue";
import NuxtLink from '#app/components/nuxt-link.js'
</script>