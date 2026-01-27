<template>
    <FskSinglePageHeader
        title="Blog"
    />

    <FskCardCollection
        :cards="blogPosts"
        :style="{ margin: 'var(--spacing)' }"
        path-name="blog"
    />

    {{ blogPosts }}
</template>

<script setup lang="ts">
const { getAllBlogPosts } = useContent()

const blogPosts = getAllBlogPosts()
</script>