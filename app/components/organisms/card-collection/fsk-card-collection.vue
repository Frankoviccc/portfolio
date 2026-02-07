<template>
    <section
        :class="[
            'card-collection',
            { 'card-collection--background': isSwipe }
        ]"
    >
        <h2
            v-if="title"
            class="card-collection__title"
        >
            {{ title }}
        </h2>

        <div
            :class="[
                'card-collection__cards',
                { 'card-collection__cards--swipe': isSwipe }
            ]"
        >
            <FskCard
                v-for="(card, index) in cards"
                :key="index"
                :filterImage="filterImage"
                :link="`${pathName}/${card.slug}`"
                :image="card.thumbnail"
                :title="card.title"
                :text="card.text"
                :year="card.year"
                :items="card.items"
            />
        </div>

        <FskButton
            v-if="buttonLabel && buttonLink"
            :to="buttonLink"
            class="card-collection__button"
        >
            {{ buttonLabel }}
        </FskButton>
    </section>
</template>

<script setup lang="ts">
import type { Props } from './fsk-card-collection.types'

defineProps<Props>()
</script>

<style lang="scss">
@use 'fsk-card-collection';
</style>