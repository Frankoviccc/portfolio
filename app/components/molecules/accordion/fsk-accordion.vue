<template>
    <li
        ref="accordion"
        class="accordion"
        @click="toggle"
    >
        <div class="accordion__header">
            <slot name="title"/>

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
            <slot name="text"/>
        </div>
    </li>
</template>

<script lang="ts" setup>
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