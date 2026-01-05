<template>
    <FskSinglePageHeader
        title="Projects"
    />

    <FskCardCollection
        :cards="projects"
        :style="{ margin: 'var(--spacing)' }"
        path-name="projects"
    />
</template>

<script setup lang="ts">
const { getAllProjects } = await useContent()

const projects = getAllProjects()
</script>