<template>
    <div
        class="mode-selector"
        :class="inDropdown ? 'mode-selector--in-dropdown' : ''"
        @click="toggleMode"
    >
        <div class="mode-selector__container">
            <div
                :class="[
                    'mode-selector__icon-container',
                    { 'mode-selector__icon-container--dark': isDark }
                ]"
            >
                <Transition name="fade">
                    <Icon
                        :key="icon"
                        :name="`tabler:${icon}`"
                        size="20"
                        class="mode-selector__icon"
                    />
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Props } from './fsk-mode-selector.types';

defineProps<Props>();

const colorMode = useColorMode();
const mounted = ref(false)

onMounted(() => {
    mounted.value = true
})

const icon = computed(() => {
    if (!mounted.value) return 'moon-filled'
    return colorMode.value === 'light' ? 'moon-filled' : 'sun';
});

const isDark = computed(() => {
    if (!mounted.value) return false
    return colorMode.value === 'dark';
})

const toggleMode = () => {
    colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
};
</script>

<style lang="scss">
@use 'fsk-mode-selector';
</style>