import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', () => {
    const navbarIsOpen = ref<boolean>(false);
    const calculatorHeight = ref<number | string>(0 + 'px');

    const toggleNavbar = (): void => {
        navbarIsOpen.value = !navbarIsOpen.value;
    }

    return {
        toggleNavbar,

        navbarIsOpen,
        calculatorHeight,
    }
})