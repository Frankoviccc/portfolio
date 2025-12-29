export default defineCachedEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig()
        const url = 'https://www.frankstruik.com'

        if (!url) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Bad Request',
            })
        }

        const params = new URLSearchParams({
            url: url,
            key: config.pagespeedKey,
            strategy: 'mobile'
        })

        params.append('category', 'performance')
        params.append('category', 'accessibility')
        params.append('category', 'seo')
        params.append('category', 'best-practices')


        const response = await $fetch (
            `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`
        )

        return {
            performance: Math.round(response.lighthouseResult.categories.performance.score * 100),
            accessibility: Math.round(response.lighthouseResult.categories.accessibility.score * 100),
            seo: Math.round(response.lighthouseResult.categories.seo.score * 100),
            bestPractices: Math.round(response.lighthouseResult.categories['best-practices'].score * 100),
        }
    } catch (error) {
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.data?.error?.message || error.message || 'Failed to fetch metrics'
        })
    }
}, {
})