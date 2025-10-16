<template>
    <div
        ref="languageSelector"
        class="language-selector bento"
        @click="toggleList"
    >
        <Icon
            class="language-selector__icon"
            name="tabler:world"
            size="28"
        />
        <ul class="language-selector__list">
            <li class="language-selector__list-item">
                <FskButton
                    :is="NuxtLink"
                    type="secondary"
                    icon="chevron-down"
                >
                    {{ languages[currentIndex]?.label }}
                </FskButton>
            </li>
        </ul>

        <ul
            v-show="isOpen"
            class="language-selector__list-drop bento"
        >
            <li
                v-for="(item, index) in languages"
                :key="index"
                class="language-selector__list-item bento"
                @click="handleClick(index)"
            >
                <FskButton
                    :is="NuxtLink"
                    :to="switchLocalePath(item.code)"
                    type="secondary"
                >
                    {{ item.label }}
                </FskButton>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import NuxtLink from '#app/components/nuxt-link.js'
import FskButton from "~/components/atoms/button/fsk-button.vue";

const switchLocalePath = useSwitchLocalePath();

type locale = 'nl' | 'en';

interface Props {
    languages: { label: string; code: locale }[];
}

const props = defineProps<Props>();

const currentIndex = ref(0);
const isOpen = ref(false)
const languageSelector = ref()

function toggleList() {
    isOpen.value = !isOpen.value
}

function handleClick(index: number) {
    currentIndex.value = index
    console.log(currentIndex.value)
    console.log(props.languages)
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