<template>
    <section class="counter-collection">
        <div class="counter-collection__inner">
            <FskCounter
                v-for="(item, index) in metrics"
                :key="index"
                :counter="Number(item.value)"
                :label="item.label"
                :percentage="Number(item.value)"
                :isLoading="loading"
            />

            <div
                class="counter-collection__pull bento"
                :class="{ 'counter-collection__pull--pulled': isPulled }"
                @click="handlePull"
            >
                <div class="counter-collection__pull-container">
                    <div class="counter-collection__lever">
                        <div class="counter-collection__lever-knob" />
                        <div class="counter-collection__lever-stick" />
                    </div>

                    <div class="counter-collection__base">
                        <div class="counter-collection__base-pivot" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import FskCounter from "~/components/molecules/counter/fsk-counter.vue";

const isPulled = ref(false)

const handlePull = () => {
    Object.entries(metrics.value).forEach(([key]) => {
        metrics.value[key].value = 0
    })

    fetchMetrics()
    isPulled.value = true

    setTimeout(() => {
        isPulled.value = false
    }, 400)
}

const metrics = ref({
    performance: { label: 'Performance', value: '-' },
    accessibility: { label: 'Accessibility', value: '-' },
    seo: { label: 'SEO', value: '-' },
    bestPractices: { label: 'Best practices', value: '-' }
})
const loading = ref(false)

const fetchMetrics = async () => {
    loading.value = true
    try {
        const response = await $fetch('/api/pagespeed', {
            params: { url: 'https://formulier.bestealarmsystemen.nl' }
        })

        Object.entries(response).forEach(([key, value]) => {
            if (metrics.value[key]) {
                metrics.value[key].value = value
            }
        })

    } catch (error) {
        console.error('Failed to fetch metrics:', error)
    } finally {
        loading.value = false
    }
}
</script>

<style lang="scss">
@use 'fsk-counter-collection';
</style>