export const usePagespeed = () => {
    const config = useRuntimeConfig()

    const { data, status, error } = useAsyncData('pagespeed-metrics', async () => {
        const url = 'https://www.barcatrips.com'

        const params = new URLSearchParams({
            url: url,
            key: config.public.pagespeedKey,
            strategy: 'mobile'
        })
        params.append('category', 'performance')
        params.append('category', 'accessibility')
        params.append('category', 'seo')
        params.append('category', 'best-practices')

        const response = await $fetch<any>(
            `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`
        )

        return {
            performance: Math.round(response.lighthouseResult.categories.performance.score * 100),
            accessibility: Math.round(response.lighthouseResult.categories.accessibility.score * 100),
            seo: Math.round(response.lighthouseResult.categories.seo.score * 100),
            bestPractices: Math.round(response.lighthouseResult.categories['best-practices'].score * 100),
        }
    }, {
        server: true,
        lazy: false
    })

    const metrics = computed(() => ({
        performance: {
            label: 'Performance',
            value: data.value?.performance ?? ''
        },
        accessibility: {
            label: 'Accessibility',
            value: data.value?.accessibility ?? ''
        },
        seo: {
            label: 'SEO',
            value: data.value?.seo ?? ''
        },
        bestPractices: {
            label: 'Best practices',
            value: data.value?.bestPractices ?? ''
        }
    }))

    const isLoading = computed(() => status.value === 'pending')

    return { metrics, isLoading, error }
}