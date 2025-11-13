<template>
    <section class="faqs bento">
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
                    :title="item.title"
                    :text="item.text"
                />
            </ul>
        </div>
    </section>
</template>

<script lang="ts" setup>
import FskAccordion from "~/components/molecules/accordion/fsk-accordion.vue";
import type { Props } from './fsk-faqs.types';

const general = useGeneralStore();
const { calculatorHeight } = storeToRefs(general);

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use 'fsk-faqs';

.faqs {
    --calculator-height: v-bind(calculatorHeight);
}
</style>