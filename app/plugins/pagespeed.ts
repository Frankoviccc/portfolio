export default defineNuxtPlugin(() => {
    const pagespeedStore = usePagespeedStore()

    pagespeedStore.fetchMetrics()
})