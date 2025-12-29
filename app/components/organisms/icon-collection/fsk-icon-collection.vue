<template>
    <section class="icon-collection bento">
        <div class="icon-collection__inner">
            <h2
                v-if="title"
                class="icon-collection__title"
                v-html="title"
            />

            <slot name="title" />

            <div
                :class="[
                    'icon-collection__icons',
                    responsive && 'icon-collection__icons--responsive',
                    `icon-collection__icons--${direction}`,
                    { 'icon-collection__icons--square': square }
                ]"
            >
                <FskIconContainer
                    v-for="(item, index) in items"
                    :key="index"
                    :to="item.link"
                    :icon="item.icon"
                    :image="item.image"
                    :label="item.label"
                    :icon-color-item="item.color"
                    :icon-color="color"
                    :size="size"
                    :center="center"
                />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import type { Props } from './fsk-icon-collection.types';
import FskIconContainer from "~/components/atoms/icon-container/fsk-icon-container.vue";

withDefaults(defineProps<Props>(), {
    direction: "row",
})
</script>

<style lang="scss">
@use 'fsk-icon-collection';
</style>