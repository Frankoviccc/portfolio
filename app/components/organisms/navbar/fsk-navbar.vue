<template>
    <header class="navbar">
        <div class="navbar__logo bento box">
            <NuxtLink class="navbar__logo-link" to="/">
                <Logo />
            </NuxtLink>
        </div>

        <FskIndicator text="Available"/>

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

        <FskModeSelector
            :is-mobile="false"
            class="bento"
        />

        <div
            class="navbar__menu-icon bento box"
            @click="toggleNavbar"
        >
            <Icon
                name="tabler:menu-2"
                size="28"
            />
        </div>

        <Transition name="slide">
            <div
                v-show="navbarIsOpen"
                class="navbar__menu-mobile"
            >
                <nav class="navbar__menu-mobile-navigation">
                    <div
                        v-for="(item, index) in links"
                        :key="index"
                        class="navbar__menu-item bento"
                    >
                        <FskButton
                            :is="NuxtLink"
                            type="secondary"
                            :to="item.url"
                            :icon="'arrow-up-right'"
                            class="navbar__menu-mobile-button"
                        >
                            {{ item.label }}
                        </FskButton>
                    </div>

                    <FskModeSelector
                        :in-dropdown="true"
                        class="navbar__menu-item bento"
                    />

                    <FskLanguageSelector
                        :languages="languages"
                        :in-dropdown="true"
                    />
                </nav>
            </div>
        </Transition>
    </header>
</template>

<script setup lang="ts">
import Logo from '~/assets/images/logo.svg'
import NuxtLink from '#app/components/nuxt-link.js'
import FskIndicator from "~/components/molecules/indicator/fsk-indicator.vue";
import FskButton from "~/components/atoms/button/fsk-button.vue";
import FskLanguageSelector from "~/components/molecules/language-selector/fsk-language-selector.vue";
import FskModeSelector from "~/components/molecules/mode-selector/fsk-mode-selector.vue";

const general = useGeneralStore();
const { navbarIsOpen } = storeToRefs(general);
const { toggleNavbar } = useGeneralStore();

interface Props {
    logo: string;
    links: { label: string; url: string }[];
    languages: { label: string; code: "nl" | "en" }[];
}

defineProps<Props>();

watch(navbarIsOpen, (newValue) => {
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'unset';
    } else {
        document.body.style.overflow = 'hidden'
    }
})
</script>

<style lang="scss" scoped>
@use 'fsk-navbar';

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    opacity: 1;
}

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