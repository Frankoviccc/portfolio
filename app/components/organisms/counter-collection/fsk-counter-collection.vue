<template>
    <section class="counter-collection">
        <div class="counter-collection__inner">
            <FskCounter
                v-if="metrics"
                v-for="(item, index) in metrics"
                :key="index"
                :counter="Number(item.value)"
                :label="item.label"
                :percentage="Number(item.value)"
                :isLoading="isLoading"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import FskCounter from "~/components/molecules/counter/fsk-counter.vue";
import {usePagespeedStore} from "~/stores/pagespeed";

const pagespeed = usePagespeedStore();
const { metrics, isLoading } = storeToRefs(pagespeed);
</script>

<style lang="scss">
@use 'fsk-counter-collection';
</style>