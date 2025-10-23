<template>
    <div
        class="mode-selector"
        :class="inDropdown ? 'mode-selector--in-dropdown' : ''"
        @click="toggleMode"
    >
        <div class="mode-selector__container">
            <div
                class="mode-selector__icon-container"
                :class="!general.lightMode ? 'mode-selector__icon-container--dark' : ''"
            >
                <Transition name="fade">
                    <Icon
                        :name="`tabler:${mode}`"
                        :key="mode"
                        size="20"
                        class="mode-selector__icon"
                    />
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    inDropdown?: boolean;
}

defineProps<Props>();

const general = useGeneralStore();
const { toggleMode } = useGeneralStore();

const mode = computed(() => {
    return general.lightMode ? 'moon-filled' : 'sun';
})
</script>

<style lang="scss">
@use 'fsk-mode-selector';
</style>