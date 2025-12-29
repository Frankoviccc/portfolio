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
const { getAllProjects } = useContent()

const projects = getAllProjects()
</script>