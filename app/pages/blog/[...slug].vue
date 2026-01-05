<template>
    <main>
        <FskSinglePageHeader
            :title="post?.title"
            :image="post?.image"
        >
            <template #items>
                <FskIconCollection
                    :items="blogPost.share[0]?.items"
                    :responsive="true"
                    direction="column"
                    size="lg"
                >
                    <template #title>
                        <span class="u-text-xl">{{ blogPost.share[0]?.title }}</span>
                    </template>
                </FskIconCollection>
            </template>
        </FskSinglePageHeader>

        <FskLayout
            layout="third-two"
            direction="row"
            collapse="md"
            :style="{ margin: 'var(--spacing)' }"
        >
            <FskText :text="contentBlocks?.[0]?.text" />

            <FskText :text="contentBlocks?.[1]?.text" />
        </FskLayout>

        <NuxtImg
            v-if="contentBlocks?.[2]?.image"
            :src="contentBlocks[2].image.src"
            :alt="contentBlocks[2].image.alt"
            :style="{ margin: 'var(--spacing)' }"
            width="1200"
            height="500"
            loading="lazy"
            sizes="sm:640px md:768px lg:1024px xl:1200px"
            class="image bento"
        />

        <FskLayout
            direction="row"
            layout="two-third"
            collapse="lg"
            :style="{ margin: 'var(--spacing)' }"
        >
            <FskText :text="contentBlocks?.[3]?.text" />

            <FskLayout direction="column">
                <FskText :text="contentBlocks?.[4]?.text" />

                <FskIconCollection
                    direction="row"
                    size="lg"
                    :responsive="true"
                    :square="true"
                    :items="blogPost.share[1]?.items"
                >
                    <template #title>
                        <h3 class="text-center">
                            {{ blogPost.share[1]?.title }}
                        </h3>
                    </template>
                </FskIconCollection>
            </FskLayout>
        </FskLayout>

        <FskContentBlock
            :title="blogPost.contentBlock.title"
            :label="blogPost.contentBlock.label"
            :link="blogPost.contentBlock.link"
            :desktop-only="true"
        />

        <FskLayout
            direction="row"
            layout="equal"
            :style="{ margin: 'var(--spacing)' }"
        >
            <FskCardCollection
                :is-swipe="true"
                :filter-image="true"
                :cards="allBlogPosts"
                :title="blogPost.contentBlock.title"
                :button-label="blogPost.contentBlock.label"
                :button-link="blogPost.contentBlock.link"
                path-name="/blog"
            />
        </FskLayout>
    </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const blogPost = (await import(`~/assets/data/${locale.value}/blog-post.json`)).default

const route = useRoute()
const { getBlogPost, getAllBlogPosts } = await useContent()

const allBlogPosts = getAllBlogPosts()

const slug = computed(() => {
    return Array.isArray(route.params.slug)
        ? route.params.slug.join('/')
        : route.params.slug
})

const post = computed(() => {
    return slug.value ? getBlogPost(slug.value) : null
})

const contentBlocks = post.value?.contentBlocks
</script>