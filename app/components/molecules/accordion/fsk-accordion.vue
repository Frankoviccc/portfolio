<template>
    <li
        ref="accordion"
        class="accordion"
        @click="toggle"
    >
        <div class="accordion__header">
            <p class="accordion__title">
                {{ title }}
            </p>

            <Icon
                class="accordion__icon"
                :name='`tabler:${switchIcon}`'
            />
        </div>

        <div
            v-show="isOpen"
            ref="content"
            class="accordion__content"
        >
            <p>
                {{ text }}
            </p>
        </div>
    </li>
</template>

<script lang="ts" setup>
defineProps({
    title: String,
    text: String,
})

const isOpen = ref(false)
const accordion = ref()
const content = ref()

function toggle() {
    isOpen.value = !isOpen.value
}

const switchIcon = computed(() => {
    return isOpen.value ? 'circle-minus' : 'circle-plus';
})
</script>

<style lang="scss">
@use 'fsk-accordion';
</style>