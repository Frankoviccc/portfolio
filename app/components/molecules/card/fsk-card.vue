<template>
    <div class="card bento">
        <NuxtLink
            :to="link"
            class="card__link"
        >
            <div class="card__inner">
                <NuxtPicture
                    v-if="image"
                    :src="image.src"
                    :alt="image.alt"
                    :class="[
                        'card__image',
                        { 'card__image--filter': filterImage }
                    ]"
                    sizes="xs:274px sm:530px md:215px lg:299px xl:358px xxl:33vw"
                    format="avif,webp"
                    loading="lazy"
                />

                <div class="card__content">
                    <div class="card__content-header">
                        <p class="card__content-title">
                            {{ title }}
                        </p>

                        <p
                            v-if="year"
                            class="card__content-year u-tiny-text"
                        >
                            {{ year }}
                        </p>

                        <div
                            v-else
                            class="card__button"
                        >
                            <Icon
                                name="tabler:arrow-up-right"
                                class="card__button-icon"
                            />
                        </div>
                    </div>

                    <div class="card__content-footer">
                        <ul
                            v-if="items"
                            class="card__content-items"
                        >
                            <li
                                v-for="(item, index) in items"
                                :key="index"
                                class="card__content-item"
                            >
                                {{ item.label }}
                            </li>
                        </ul>

                        <div
                            v-if="year"
                            class="card__button"
                        >
                            <Icon
                                name="tabler:arrow-up-right"
                                class="card__button-icon"
                            />
                        </div>

                        <p
                            v-if="text"
                            class="card__content-text"
                        >
                            {{ text }}
                        </p>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import type { Props } from './fsk-card.types';

defineProps<Props>()
</script>

<style lang="scss">
@use 'fsk-card';
</style>