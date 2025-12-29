<template>
    <section class="step-collection bento">
        <div class="step-collection__inner">
            <div class="step-collection__header">
                <h2 class="step-collection__title">
                    {{ title }}
                </h2>

                <FskButton
                    :to="buttonLink"
                    type="primary"
                    class="step-collection__button"
                >
                    {{ buttonText }}
                </FskButton>
            </div>

            <ul class="step-collection__items">
                <FskStep
                    v-for="(item, index) in items"
                    :key="index"
                    :number="item.number"
                    :title="item.title"
                    :text="item.text"
                />
            </ul>

            <FskButton
                :to="buttonLink"
                type="primary"
                class="step-collection__button-mobile"
            >
                {{ buttonText }}
            </FskButton>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Props } from './fsk-step-collection.types'

defineProps<Props>()
</script>

<style lang="scss">
@use 'fsk-step-collection';
</style>