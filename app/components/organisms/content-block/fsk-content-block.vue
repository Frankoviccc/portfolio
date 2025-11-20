<template>
    <section
        :class="[
            'content-block',
            { 'content-block--desktop': desktopOnly }
        ]"
    >
        <div
            :class="[
                'content-block__inner bento',
                {
                    'content-block__inner--no-text': !text,
                }
            ]"
        >
            <div class="content-block__container">
                <h2 class="content-block__title">
                    {{ title }}
                </h2>

                <p
                    v-if="text"
                    class="content-block__text"
                >
                    {{ text }}
                </p>
            </div>

            <div class="content-block__container">
                <div
                    v-if="buttonGroup"
                    class="content-block__button-group"
                >
                    <FskButton
                        v-for="(item, index) in buttonGroup"
                        :key="index"
                        :to="item.link"
                        :icon="item.icon"
                        :mirror="true"
                    >
                        {{ item.label }}
                    </FskButton>
                </div>

                <div v-else>
                    <FskButton
                        :to="link"
                        :icon="'arrow-up-right'"
                        :background="buttonBackground"
                    >
                        {{ label }}
                    </FskButton>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import FskButton from "~/components/atoms/button/fsk-button.vue";
import type { iconType } from '@/components/atoms/button/fsk-button.vue'

interface Props {
    title: string;
    text?: string;
    link?: string;
    label?: string;
    buttonGroup?: { icon: iconType; label: string; link: string; background: boolean }[];
    buttonBackground?: boolean;
    desktopOnly?: boolean;
}

defineProps<Props>();
</script>

<style lang="scss">
@use 'fsk-content-block';
</style>