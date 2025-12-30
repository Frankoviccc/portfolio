<template>
    <section class="counter-collection">
        <div class="counter-collection__inner">
            <FskCounter
                v-for="(value, key) in formattedMetrics"
                :key="key"
                :counter="value.counter"
                :label="value.label"
                :percentage="value.counter"
                :isLoading="pending"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
const { data, pending } = await useFetch('/api/pagespeed')

const labels: Record<string, string> = {
    performance: 'Performance',
    accessibility: 'Accessibility',
    seo: 'SEO',
    bestPractices: 'Best practices'
}

const formattedMetrics = computed(() => {
    if (!data.value) return {}

    return Object.entries(data.value).reduce((acc, [key, value]) => {
        acc[key] = {
            counter: Number(value),
            label: labels[key] || key
        }
        return acc
    }, {} as Record<string, { counter: number; label: string }>)
})
</script>

<style lang="scss">
@use 'fsk-counter-collection';
</style>