<template>
    <section class="testimonial-slider bento">
        <div class="testimonial-slider__header">
            <h2 class="testimonial-slider__title">
                {{ title }}
            </h2>

            <FskButton
                icon="arrow-up-right"
                class="testimonial-slider__button-desktop"
            >
                Contact With Me
            </FskButton>
        </div>

        <div class="testimonial-slider__mobile">
            <FskTestimonial
                :stars="items[currentIndexMobile]?.stars"
                :text="items[currentIndexMobile]?.text"
                :author="items[currentIndexMobile]?.author"
                :date="items[currentIndexMobile]?.date"
            />

            <div class="testimonial-slider__navigation">
                <Icon
                    name="tabler:circle-arrow-left"
                    class="testimonial-slider__navigation-icon"
                    :class="[
                        'testimonial-slider__navigation-icon',
                        // { 'testimonial-slider__navigation-icon--disabled':  }
                    ]"
                    @click="clickLeft('mobile')"
                />

                <Icon
                    name="tabler:circle-arrow-right"
                    :class="[
                        'testimonial-slider__navigation-icon',
                        // { 'testimonial-slider__navigation-icon--disabled': disableArrowRight('mobile') }
                    ]"
                    @click="clickLeft('mobile')"
                />
            </div>
        </div>

        <div class="testimonial-slider__desktop">
            <div class="testimonial-slider__desktop-container">
                <FskTestimonial
                    :stars="items[currentIndexDesktop]?.stars"
                    :text="items[currentIndexDesktop]?.text"
                    :author="items[currentIndexDesktop]?.author"
                    :date="items[currentIndexDesktop]?.date"
                />

                <FskTestimonial
                    :stars="items[currentIndexDesktop + 1]?.stars"
                    :text="items[currentIndexDesktop + 1]?.text"
                    :author="items[currentIndexDesktop + 1]?.author"
                    :date="items[currentIndexDesktop + 1]?.date"
                />
            </div>

            <div class="testimonial-slider__navigation">
                <Icon
                    name="tabler:circle-arrow-left"
                    :class="[
                        'testimonial-slider__navigation-icon',
                        // { 'testimonial-slider__navigation-icon--disabled': isFirst }
                    ]"
                    @click="clickLeft"
                />

                <Icon
                    name="tabler:circle-arrow-right"
                    :class="[
                        'testimonial-slider__navigation-icon',
                        // { 'testimonial-slider__navigation-icon--disabled': isLast }
                    ]"
                    @click="clickRight"
                />
            </div>
        </div>

        <FskButton
            icon="arrow-up-right"
            class="testimonial-slider__button-mobile"
        >
            Contact With Me
        </FskButton>
    </section>
</template>

<script lang="ts" setup>
import type { Props } from './fsk-testimonial-slider.types'

const props = defineProps<Props>();

const isLast = ref<boolean>(false);
const isFirst = ref<boolean>(true);

const currentIndexMobile = ref<number>(0);
const currentIndexDesktop = ref<number>(0);

function clickRight(isMobile: string) {
    if (isMobile === 'mobile') {
        currentIndexMobile.value !== props.items.length - 1 ? currentIndexMobile.value++ : currentIndexMobile.value = 0;
    } else {
        currentIndexDesktop.value !== props.items.length - 2 ? currentIndexDesktop.value += 2 : currentIndexDesktop.value = props.items.length - 2
    }
}

function clickLeft(isMobile: string) {
    if (isMobile === 'mobile') {
        currentIndexMobile.value !== 0 ? currentIndexMobile.value-- : currentIndexMobile.value = props.items.length - 1
    } else {
        currentIndexDesktop.value !== 0 ? currentIndexDesktop.value -= 2 : currentIndexDesktop.value = 0
    }
}
</script>

<style lang="scss">
@use 'fsk-testimonial-slider';
</style>