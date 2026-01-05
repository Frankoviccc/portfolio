<template>
    <section
        :class="[
            'content-block',
            { 'content-block--desktop': desktopOnly },
            { 'content-block--image': image }
        ]"
    >
        <div
            :class="[
                'content-block__inner bento',
                {
                    'content-block__inner--no-text': !text,
                }
            ]"
        >
            <div class="content-block__container">
                <h2 class="content-block__title">
                    {{ title }}
                </h2>

                <slot name="title" />

                <p
                    v-if="text"
                    v-html="text"
                    class="content-block__text"
                />

                <slot name="text" />
            </div>

            <div class="content-block__container">
                <div
                    v-if="buttonGroup"
                    class="content-block__button-group"
                >
                    <FskButton
                        v-for="(item, index) in buttonGroup"
                        :key="index"
                        :to="item.link"
                        :icon="item.icon"
                        :mirror="true"
                        :target="item.link ? '_blank' : undefined"
                        :rel="item.link ? 'noopener noreferrer' : undefined"
                    >
                        {{ item.label }}
                    </FskButton>
                </div>

                <div v-else-if="link">
                    <FskButton
                        :to="link"
                        :background="buttonBackground"
                        icon="arrow-up-right"
                    >
                        {{ label }}
                    </FskButton>
                </div>
            </div>
        </div>


        <NuxtPicture
            v-if="image"
            class="content-block__image bento"
            :src="image.src"
            :alt="image.alt"
            loading="lazy"
            sizes="100vw md:50vw xxl:75vw"
            format="avif, webp"
            densities="1x, 2x"
        />
    </section>
</template>
<script setup lang="ts">
import FskButton from "~/components/atoms/button/fsk-button.vue";
import type { Props } from './fsk-content-block.types';

defineProps<Props>()
</script>

<style lang="scss">
@use 'fsk-content-block';
</style>