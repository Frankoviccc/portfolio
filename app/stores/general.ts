import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', () => {
    const navbarIsOpen = ref<boolean>(false);
    const lightMode = ref<boolean>(true);
    const calculatorHeight = ref<number | string>(0 + 'px');

    const toggleNavbar = (): void => {
        navbarIsOpen.value = !navbarIsOpen.value;
    }

    const toggleMode = (): void => {
        lightMode.value = !lightMode.value;
    }

    return {
        toggleNavbar,
        toggleMode,

        navbarIsOpen,
        lightMode,
        calculatorHeight,
    }
})