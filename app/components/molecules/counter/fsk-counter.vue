<template>
    <div class="counter bento">
        <div class="counter__metrics">
            <svg
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
                class="counter__metric"
            >
                <circle cx="60" cy="60" r="54" fill="var(--surface)"/>
                <circle cx="60" cy="60" r="53.9" fill="none" stroke="#B3B3B3" stroke-width="12"/>
                <circle
                    class="counter__metrics-progress"
                    cx="60" cy="60" r="54"
                    fill="none"
                    stroke="url(#gradient)"
                    stroke-width="12"
                    :stroke-dashoffset="dashOffset"
                    :stroke-dasharray="circumference"
                    transform="rotate(-90 60 60)"
                />
            </svg>

            <div
                v-if="isLoading"
                class="counter__metrics-skeleton"
            />

            <span
                v-if="percentage"
                class="counter__metrics-label u-heading-3"
                :style="{ '--target': percentage }"
            />

            <svg width="0" height="0">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#00DC82" />
                        <stop offset="100%" stop-color="#42B883" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <span class="counter__label">
            {{ label }}
        </span>
    </div>
</template>

<script setup lang="ts">
interface Props {
    counter: number;
    label: string;
    percentage: number;
    isLoading: boolean
}

const props = withDefaults(defineProps<Props>(), {
    isLoading: true
})

const radius = 54
const circumference = 2 * Math.PI * radius

const dashOffset = computed(() => {
    if (!props.percentage) return circumference

    return circumference - (props.percentage / 100) * circumference
})
</script>

<style lang="scss">
@use 'fsk-counter';
</style>