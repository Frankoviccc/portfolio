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
            :items="post?.technologies"
            :animate="true"
            :square="true"
        >
            <template #title>
                <h2 class="u-text-xl">{{ project.stack.title }}</h2>
            </template>
        </FskIconCarousel>

        <FskIconCollection
            :items="post?.industries"
            :center="true"
            size="md"
            color="var(--color-green)"
        >
            <template #title>
                <h2 class="u-text-xl">{{ project.industries.title }}</h2>
            </template>
        </FskIconCollection>

        <FskIconCollection
            :items="post?.duration"
            :center="true"
            size="md"
            color="var(--color-green)"
        >
            <template #title>
                <h2 class="u-text-xl">{{ project.duration.title }}</h2>
            </template>
        </FskIconCollection>
    </FskLayout>

    <FskContentBlock
        :title="project.contentBlockEmpty.title"
        :label="project.contentBlockEmpty.label"
        :link="project.contentBlockEmpty.link"
        :button-background="true"
        :style="{ margin: 'var(--spacing)' }"
    />

    <div
        v-if="contentBlocks?.[1]?.image"
        class="bento"
        :style="{
            display: 'flex',
            justifyContent: 'center',
            margin: 'var(--spacing)',
            background: 'var(--bento-background)',
        }"
    >
        <NuxtPicture
            :src="contentBlocks?.[1].image.src"
            :alt="contentBlocks?.[1].image.alt"
            loading="lazy"
            format="avif, webp"
            densities="1x, 2x"
            class="picture"
            :style="{ maxWidth: '1500px' }"
        />
    </div>

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
        <div
            class="bento"
            :style="{
                display: 'flex',
                justifyContent: 'center',
                background: 'var(--bento-background)',
                padding: 'var(--padding)',
            }"
        >
            <NuxtPicture
                v-if="contentBlocks?.[4]?.image"
                :src="contentBlocks[4].image.src"
                :alt="contentBlocks[4].image.alt"
                loading="lazy"
                format="avif, webp"
                densities="1x, 2x"
                sizes="100vw lg:75vw"
                class="picture"
            />
        </div>

        <FskIconCollection
            title="Outcome"
            direction="column"
            size="md"
            color="var(--color-green)"
            :center="false"
            :items="post?.outcome"
        />
    </FskLayout>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
const project = (await import(`~/assets/data/${locale.value}/project.json`)).default

const route = useRoute()
const { getProject } = await useContent()

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