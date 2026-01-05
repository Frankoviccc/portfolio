<template>
    <div
        ref="languageSelector"
        class="language-selector bento"
        :class="inDropdown ? 'language-selector--in-dropdown' : ''"
        @click="toggleList"
    >
        <ul class="language-selector__list">
            <li
                v-for="(item, index) in filteredLanguages"
                :key="index"
                class="language-selector__list-item"
                @click="handleClick(index)"
            >
                <FskButton
                    :is="NuxtLink"
                    :to="switchLocalePath(item.code)"
                    :lang="item.code"
                    type="secondary"
                >
                    {{ item.label }}
                </FskButton>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { Props } from "./fsk-language-selector.types"
import NuxtLink from '#app/components/nuxt-link.js'

const props = defineProps<Props>();

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath();

const filteredLanguages = computed(() => {
    return props.languages.filter(lang => lang.code !== locale.value)
})

const currentIndex = ref(0);
const isOpen = ref(false)
const languageSelector = ref()

function toggleList() {
    isOpen.value = !isOpen.value
}

function handleClick(index: number) {
    currentIndex.value = index
}

watch(() => isOpen.value, (isOpen) => {
    if (isOpen === true) {
        setTimeout(() => {
            document.addEventListener('click', handleClickOutside)
        }, 100)
    } else {
        document.removeEventListener('click', handleClickOutside)
    }
})

const handleClickOutside = (event: MouseEvent) => {
    if (languageSelector.value && !languageSelector.value.contains(event.target as Node)) {
        isOpen.value = false
    }
}
</script>

<style lang="scss">
@use 'fsk-language-selector';
</style>