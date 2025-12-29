<template>
    <picture
        :class="[
            'image',
            { pictureClass },
        ]"
    >
        <template
            v-for="(size, index) in sizes"
            :key="index"
        >
            <source
                :srcset="`${source}/m/${imageSize(size.width, size.height)}/filters:format(avif)`"
                :media="size.media"
            >
            <source
                :srcset="`${source}/m/${imageSize(size.width, size.height)}/filters:format(webp)`"
                :media="size.media"
            >
            <source
                :srcset="`${source}/m/${imageSize(size.width, size.height)}`"
                :media="size.media"
            >
        </template>
        <NuxtImg
            class="image__img"
            :src="source"
            :alt="alt"
            fetchpriority="high"
        />
    </picture>
</template>

<script lang="ts" setup>
import type { Props } from './fsk-image.types';

withDefaults(defineProps<Props>(), {
    objectFit: 'default'
})

function imageSize(width = 0, height = 0) {
    return `${width}x${height}`
}
</script>

<style lang="scss">
@use 'fsk-image';
</style>

<style lang="scss" scoped>
.image {
    --object-fit: v-bind(objectFit);
}
</style>
