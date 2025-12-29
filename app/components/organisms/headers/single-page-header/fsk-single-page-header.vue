<template>
    <section class="single-page-header">
        <div class="single-page-header__header bento">
            <Icon
                name="tabler:arrow-left"
                class="single-page-header__header-icon"
                @click="router.back()"
            />

            <div class="single-page-header__header-text">
                <h1
                    class="single-page-header__header-title"
                    v-html="title"
                />

                <p
                    v-if="text"
                    class="single-page-header__header-text"
                    v-html="text"
                />
            </div>
        </div>

        <FskLayout
            v-if="image || items"
            layout="three-quarter"
            direction="row"
            collapse="md"
        >
            <NuxtPicture
                v-if="image"
                :src="image.src"
                :alt="image.alt"
                class="single-page-header__image"
            />

            <slot name="items">
                <ul class="single-page-header__items">
                    <li
                        v-for="(item, index) in items"
                        :key="index"
                        class="single-page-header__item bento"
                    >
                        <span
                            v-if="item.label"
                            class="single-page-header__item-label"
                            v-html="item.label"
                        />

                        <Icon
                            :name="'tabler:' + item.icon"
                            class="single-page-header__item-icon"
                        />

                        <span
                            class="single-page-header__item-text"
                            v-html="item.text"
                        />
                    </li>
                </ul>
            </slot>
        </FskLayout>
    </section>
</template>

<script setup lang="ts">
import type { Props } from './fsk-single-page-header.types';
import FskLayout from "~/components/organisms/layout/fsk-layout.vue";

defineProps<Props>();

const router = useRouter();
</script>

<style lang="scss">
@use 'fsk-single-page-header';
</style>