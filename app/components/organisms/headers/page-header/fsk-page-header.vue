<template>
    <div class="page-header">
        <div class="page-header__container bento">
            <div class="page-header__content">
                <div>
                    <h1 class="page-header__title">
                        <span class="page-header__title-sub">
                            {{ title }}
                        </span>

                        <span class="page-header__title-main">
                            {{ subTitle }}
                        </span>
                    </h1>

                    <p>
                        {{ text }}
                    </p>
                </div>

                <ul class="page-header__items">
                    <li
                        v-for="(item, index) in items"
                        :key="index"
                        class="page-header__item"
                    >
                        <component
                            :is="item.icon"
                            class="page-header__item-icon"
                        />

                        <span class="u-paragraph">
                            {{ item.label }}
                        </span>
                    </li>
                </ul>

                <div class="page-header__button-group">
                    <FskButton
                        v-for="(item, index) in buttonGroup"
                        :key="index"
                        :is="item.is"
                        :background="item.background"
                        :icon="item.icon"
                    >
                        View my work
                    </FskButton>
                </div>
            </div>
        </div>
        <div class="page-header__container bento">
            <NuxtPicture
                src="tokyo.webp"
                class="page-header__image"
                alt="Photo Frank in Ginza, Tokyo"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import FskButton from "~/components/atoms/button/fsk-button.vue";
import type { iconType } from '@/components/atoms/button/fsk-button.vue'
import NuxtLink from '#app/components/nuxt-link.js'

interface Props {
    title: string;
    subTitle: string;
    text: string;
    items: { icon: string; label: string }[];
    buttonGroup: { icon: iconType; label: string; link: string; background: boolean; is: 'button' | typeof NuxtLink; }[];
}

defineProps<Props>();
</script>
<style lang="scss">
@use 'fsk-page-header';
</style>