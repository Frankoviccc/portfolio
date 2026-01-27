<template>
    <section
        class="faqs bento"
        :style="{ '--calculator-height': `${calculatorHeight}` }"
    >
        <div class="faqs__inner">
            <div class="faqs__content">
                <h2 class="faqs__title">
                    {{ title }}
                </h2>
            </div>

            <ul class="faqs__list">
                <FskAccordion
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <template #title>
                        <p>
                            {{ item.title }}
                        </p>
                    </template>

                    <template #text>
                        <p class="u-tiny-text">
                            {{ item.text }}
                        </p>
                    </template>
                </FskAccordion>
            </ul>
        </div>
    </section>
</template>

<script lang="ts" setup>
import type { Props } from './fsk-faqs.types';

const general = useGeneralStore();
const { calculatorHeight } = storeToRefs(general);

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use 'fsk-faqs';
</style>