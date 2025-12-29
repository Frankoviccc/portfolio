export const usePagespeed = () => {
    const { data, status } = useFetch('/api/pagespeed', {
        key: 'pagespeed-metrics'
    })

    const metrics = computed(() => ({
        performance: { label: 'Performance', value: data.value?.performance ?? '' },
        accessibility: { label: 'Accessibility', value: data.value?.accessibility ?? '' },
        seo: { label: 'SEO', value: data.value?.seo ?? '' },
        bestPractices: { label: 'Best practices', value: data.value?.bestPractices ?? '' }
    }))

    const isLoading = computed(() => status.value === 'pending')

    return { metrics, isLoading }
}