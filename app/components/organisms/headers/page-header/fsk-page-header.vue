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
                            {{ subtitle }}
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
                        <Icon
                            :name="'tabler:' + item.icon"
                            class="page-header__item-icon"
                        />

                        <span class="u-paragraph">
                            {{ item.label }}
                        </span>
                    </li>
                </ul>

                <div class="page-header__button-group">
                    <FskButton
                        :background="true"
                        icon="arrow-up-right"
                        aria-label="Navigate to my projects page"
                        to="/projects"
                    >
                        View my work
                    </FskButton>

                    <FskButton
                        icon="download"
                        to="/cv.pdf"
                        aria-label="Download my CV"
                        download="frank-struik.pdf"
                        external
                    >
                        Download CV
                    </FskButton>
                </div>
            </div>
        </div>
        <div class="page-header__container bento">
            <NuxtPicture
                :src="image.src"
                :alt="image.alt"
                loading="eager"
                fetchpriority="high"
                sizes="xs:530px sm:750px md:500px lg:590px xl:785px xxl:50vw"
                format="avif,webp"
                class="page-header__image"
            />

<!--            <FskDistortionImage />-->
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Props } from "./fsk-page-header.types";
import FskDistortionImage from "~/components/atoms/distortion-image/fsk-distortion-image.vue";

defineProps<Props>();
</script>
<style lang="scss">
@use 'fsk-page-header';
</style>