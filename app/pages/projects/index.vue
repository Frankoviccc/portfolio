<template>
    <div>
        <FskSinglePageHeader
            title="Projects"
        />

        <FskCardCollection
            :cards="projects"
            :style="{ margin: 'var(--spacing)' }"
            path-name="projects"
        />
    </div>
</template>

<script setup lang="ts">
const { getAllProjects } = await useContent()

const projects = getAllProjects()

useSeoMeta({
    title: 'Blog - Frank Struik',
    description: 'Read articles and insights about frontend development, Vue.js, Nuxt, web performance, and modern JavaScript by Frank Struik.',
    ogTitle: 'Blog - Frank Struik',
    ogDescription: 'Read articles and insights about frontend development, Vue.js, Nuxt, web performance, and modern JavaScript by Frank Struik.',
    ogImage: 'https://frankstruik.com/og-logo.png',
    ogImageWidth: '1200',
    ogImageHeight: '1200',
    twitterCard: 'summary_large_image',
    twitterImage: 'https://frankstruik.com/og-logo.png',
})
</script>