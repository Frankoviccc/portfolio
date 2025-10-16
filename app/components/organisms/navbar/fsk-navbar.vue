<template>
    <header class="navbar">
        <div class="navbar__logo bento">
            <NuxtLink class="navbar__logo-link" to="/">
                <Logo />
            </NuxtLink>
        </div>

        <FskIndicator
            text="Available for projects"
        />

        <nav class="navbar__menu">
            <div
                v-for="(item, index) in links"
                :key="index"
                class="navbar__menu-item bento"
            >
                <FskButton
                    :is="NuxtLink"
                    type="secondary"
                    :to="item.url"
                >
                    {{ item.label }}
                </FskButton>
            </div>
        </nav>

        <FskLanguageSelector :languages="languages" />

        <div
            class="navbar__mode bento"
            @click="toggleMode"
        >
            <div class="navbar__mode-container">

                <div
                    class="navbar__mode-icon-container"
                    :class="!general.lightMode ? 'navbar__mode-icon-container--dark' : ''"
                >
                    <Transition name="fade">
                        <Icon
                            :name="`tabler:${mode}`"
                            :key="mode"
                            size="20"
                            class="navbar__mode-icon"
                        />
                    </Transition>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import Logo from '~/assets/images/logo.svg'
import NuxtLink from '#app/components/nuxt-link.js'
import FskIndicator from "~/components/molecules/indicator/fsk-indicator.vue";
import FskButton from "~/components/atoms/button/fsk-button.vue";
import FskLanguageSelector from "~/components/molecules/language-selector/fsk-language-selector.vue";
const general = useGeneralStore();
const { toggleNavbar, toggleMode } = useGeneralStore();

interface Props {
    logo: string;
    links: { label: string; url: string }[];
    languages: { label: string; code: string }[];
}

const props = defineProps<Props>();

const mode = computed(() => {
    return general.lightMode ? 'moon-filled' : 'sun';
})
</script>

<style lang="scss">
@use 'fsk-navbar';

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
    position: absolute;
}

.fade-enter-from {
    opacity: 0;
    transform: rotate(-90deg) scale(0.8);
}

.fade-leave-to {
    opacity: 0;
    transform: rotate(90deg) scale(0.8);
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: rotate(0deg) scale(1);
}
</style>