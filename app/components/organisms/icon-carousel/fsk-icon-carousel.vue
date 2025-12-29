<template>
    <section
        class="icon-carousel"
        :class="[
            'icon-carousel',
            { 'icon-carousel--glow-effect': glowEffect && isDark }
        ]"
    >
        <div class="icon-carousel__inner bento">
            <h2
                v-if="title"
                class="icon-carousel__title"
            >
                {{ title }}
            </h2>

            <slot name="title"/>

            <div
                :class="[
                    'icon-carousel__track',
                    { 'icon-carousel__track--center': centerTrack }
                ]"
            >
                <ul
                    v-if="doubleTrack"
                    v-for="(list, index) in doubleLists"
                    :key="index"
                    :style="{ animationDuration: `${animationDuration}s` }"
                    :class="[
                        'icon-carousel__list',
                        { 'icon-carousel__list--animate': animate || items.length >= 7 },
                        { 'icon-carousel__list--reverse': index % 2 !== 0 }
                    ]"
                >
                    <li
                        v-for="(item, itemIndex) in list"
                        :key="itemIndex"
                        :class="[
                            'icon-carousel__list-item',
                            { 'icon-carousel__list-item--square': square }
                        ]"
                    >
                        <component
                            v-if="!item.label"
                            :is="getIcon(item.icon)"
                        />

                        <div
                            v-else
                            class="icon-carousel__list-item-content"
                        >
                            <Icon
                                :name="'tabler:' + item.icon"
                                class="icon-carousel__list-item-icon"
                            />

                            <span>
                                {{ item.label }}
                            </span>
                        </div>
                    </li>
                </ul>

                <ul
                    v-else
                    :style="{ animationDuration: `${animationDuration}s` }"
                    :class="[
                        'icon-carousel__list',
                        { 'icon-carousel__list--animate': animate }
                    ]"
                >
                    <li
                        v-for="(item, index) in singleList"
                        :key="index"
                        :class="[
                            'icon-carousel__list-item',
                            { 'icon-carousel__list-item--square': square }
                        ]"
                    >
                        <component
                            v-if="!item.label"
                            :is="getIcon(item.icon)"
                        />

                        <div
                            v-else
                            class="icon-carousel__list-item-content"
                        >
                            <Icon
                                :name="'tabler:' + item.icon"
                                class="icon-carousel__list-item-icon"
                            />

                            <span>
                                {{ item.label }}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Props } from './fsk-icon-carousel.types';
import { getIcon } from "@/composables/useIcon"

const colorMode = useColorMode()

const props = defineProps<Props>();

const singleList = computed(() => {
    if (props.animate) {
        return [...props.items, ...props.items]
    } else {
        return [...props.items]
    }
})

const doubleLists = computed(() => {
    const half = Math.floor(props.items.length / 2)
    const firstHalf = props.items.slice(0, half)
    const secondHalf = props.items.slice(half)
    return [
        [...firstHalf, ...firstHalf],
        [...secondHalf, ...secondHalf]
    ]
})

const animationDuration = computed(() => {
    const baseSpeed = 3
    return props.items.length * baseSpeed
})

const mounted = ref(false)

onMounted(() => {
    mounted.value = true
})

const isDark = computed(() => {
    if (!mounted.value) return false
    return colorMode.value === 'dark';
})
</script>

<style lang="scss">
@use 'fsk-icon-carousel';
</style>