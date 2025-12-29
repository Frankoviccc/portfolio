<template>
    <FskSinglePageHeader
        :title="post?.title"
        :text="post?.text"
        :image="post?.image"
        :items="post?.areaOfWork"
    />

    <FskContentBlock
        :title="project.contentBlock.title"
        :text="contentBlocks?.[0]?.text"
        :image="contentBlocks?.[0]?.image"
        :link="post?.link"
        :button-background="true"
        :label="project.contentBlock.buttonLabel"
        :style="{ margin: 'var(--spacing)' }"
    />

    <FskLayout
        direction="row"
        layout="equal"
        collapse="lg"
        :style="{ margin: 'var(--spacing)' }"
    >
        <FskIconCarousel
            v-if="post?.technologies"
            :title="project.stack.title"
            :items="post?.technologies"
            :animate="true"
            :square="true"
        />

        <FskIconCollection
            :title="project.industries.title"
            :items="post?.industries"
            :center="true"
            size="md"
            color="#00dc82"
        />

        <FskIconCollection
            :title="project.duration.title"
            :items="post?.duration"
            :center="true"
            size="md"
            color="#00dc82"
        />
    </FskLayout>

    <FskContentBlock
        :title="project.contentBlockEmpty.title"
        :label="project.contentBlockEmpty.label"
        :link="project.contentBlockEmpty.link"
        :button-background="true"
        :style="{ margin: 'var(--spacing)' }"
    />

    <FskImage
        v-if="contentBlocks?.[1]?.image"
        :source="contentBlocks?.[1].image.src"
        :alt="contentBlocks?.[1].image.alt"
        class="bento"
        :style="{ margin: 'var(--spacing)' }"
    />

    <FskLayout
        direction="row"
        collapse="md"
        :style="{ margin: 'var(--spacing)' }"
    >
        <FskContentBlock
            :title="project.challenge.title"
            :text="contentBlocks?.[2]?.text"
        />

        <FskContentBlock
            :title="project.solution.title"
            :text="contentBlocks?.[3]?.text"
        />
    </FskLayout>

    <FskLayout
        :spacing="true"
        direction="row"
        layout="two-third"
        collapse="lg"
    >
        <FskImage
            v-if="post?.image"
            :source="post.image.src"
            :alt="post.image.alt"
        />

        <FskIconCollection
            title="Outcome"
            direction="column"
            size="md"
            color="#00dc82"
            :center="false"
            :items="post?.outcome"
        />
    </FskLayout>
</template>

<script lang="ts" setup>
import project from "@/assets/data/project.json"

const route = useRoute()
const { getProject } = useContent()

const slug = computed(() => {
    return Array.isArray(route.params.slug)
        ? route.params.slug.join('/')
        : route.params.slug
})

const post = computed(() => {
    return slug.value ? getProject(slug.value) : null
})

const contentBlocks = post.value?.contentBlocks
</script>