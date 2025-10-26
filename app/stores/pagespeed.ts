import { defineStore } from 'pinia'

export const usePagespeedStore = defineStore('pagespeed', () => {
    const metrics = ref({
        performance: { label: 'Performance', value: '' },
        accessibility: { label: 'Accessibility', value: '' },
        seo: { label: 'SEO', value: '' },
        bestPractices: { label: 'Best practices', value: '' }
    })
    const isLoading = ref(false)

    const fetchMetrics = async () => {
        isLoading.value = true
        try {
            const response = await $fetch('/api/pagespeed', {
                params: {
                    url: 'https://barcatrips.com'
                }
            })

            Object.entries(response).forEach(([key, value]) => {
                if (metrics.value[key]) {
                    metrics.value[key].value = value
                }
            })
        } catch (error) {
            isLoading.value = false
            console.error('Failed to fetch metrics:', error)
        } finally {
            isLoading.value = false
        }
    }

    return {
        metrics,
        fetchMetrics,
        isLoading
    }
})