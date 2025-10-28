<template>
    <section class="icon-carousel">
        <div class="icon-carousel__inner bento">
            <h2 class="icon-carousel__title">
                {{ title }}
            </h2>

            <div
                class="icon-carousel__track"
                :class="centerTrack ? 'icon-carousel__track--center' : ''"
            >
                <ul
                    v-if="items.length > 7"
                    v-for="(list, index) in doubleItems"
                    :key="index"
                    class="icon-carousel__list"
                    :class="[
                        items.length > 4 ? 'icon-carousel__list--animate' : '',
                        index % 2 !== 0 ? 'icon-carousel__list--reverse' : ''
                    ]"
                >
                    <li
                        v-for="(item, itemIndex) in list"
                        :key="itemIndex"
                        class="icon-carousel__list-item"
                    >
                        <component :is="item.icon" />
                    </li>
                </ul>

                <ul
                    v-else
                    class="icon-carousel__list"
                    :class="items.length > 4 ? 'icon-carousel__list--animate' : ''"
                >
                    <li
                        v-for="(item, index) in doubleItems"
                        :key="index"
                        class="icon-carousel__list-item"
                    >
                        <component :is="item.icon" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
interface Props {
    title: string;
    centerTrack?: boolean;
    items: { icon: Component | string }[];
}

const props = defineProps<Props>();

const doubleItems = computed(() => {
    if (props.items.length < 8) {
        return [...props.items, ...props.items]
    }
    if (props.items.length > 7) {
        return  [
            [...props.items.slice(0, props.items.length / 2), ...props.items.slice(0, props.items.length / 2)],
            [...props.items.slice(props.items.length / 2, props.items.length), ...props.items.slice(props.items.length / 2, props.items.length)],
        ]
    }
    return [];
})
</script>

<style lang="scss">
@use 'fsk-icon-carousel';
</style>