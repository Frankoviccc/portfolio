<template>
    <div class="testimonial">
        <div class="testimonial__inner">
            <div class="testimonial__rating">
                <Icon
                    v-for="(item, index) in stars"
                    :key="index"
                    name="tabler:star-filled"
                    class="testimonial__icon"
                />
            </div>

            <p class="testimonial__text">
                {{ text }}
            </p>

            <div class="testimonial__footer">
                <span class="testimonial__author">
                    -- {{ author }}
                </span>

                <span class="testimonial__date">
                    {{ date }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Props } from './fsk-testimonial.types';

defineProps<Props>();
</script>

<style lang="scss">
@use 'fsk-testimonial';
</style>