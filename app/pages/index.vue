<template>
    <main>
        <FskPageHeader
            :title="index.header.title"
            :subtitle="index.header.subtitle"
            :text="index.header.text"
            :items="index.header.items"
            :image="index.header.image"
        />

        <LazyFskContentBlock
            :title="index.contentBlock.title"
            :text="index.contentBlock.text"
            :button-group="index.contentBlock.items"
            :style="{ margin: 'var(--spacing)' }"
        />

        <LazyFskCounterCollection />

        <LazyFskLayout
            direction="row"
            layout="equal"
            collapse="lg"
            :style="{ margin: 'var(--spacing)' }"
        >
            <LazyFskIconCarousel
                :title="index.technologies.title"
                :items="index.technologies.items"
                :animate="true"
                :double-track="true"
                :square="true"
                :glow-effect="true"
            />

            <LazyFskGitWidget />
        </LazyFskLayout>

        <LazyFskExperience
            :title="index.experience.title"
            :items="index.experience.items"
        />

        <LazyFskContentBlock
            :title="index.projects.title"
            :label="index.projects.label"
            :link="index.projects.link"
            :button-background="true"
            :style="{ margin: 'var(--spacing)' }"
        />

        <LazyFskCardCollection
            :cards="projects"
            :style="{ margin: 'var(--spacing)' }"
            path-name="projects"
        />

        <LazyFskLayout
            direction="row"
            layout="two-third"
            collapse="lg"
            :style="{ margin: 'var(--spacing)' }"
        >
            <LazyFskStepCollection
                :title="index.stepCollection.title"
                :button-text="index.stepCollection.buttonText"
                :button-link="index.stepCollection.buttonLink"
                :items="index.stepCollection.items"
            />

            <LazyFskIconCarousel
                :title="index.industries.title"
                :items="index.industries.items"
                :center-track="true"
                :double-track="true"
                :animate="true"
            />
        </LazyFskLayout>

        <LazyFskLayout
            direction="row"
            layout="equal"
            collapse="lg"
            :style="{ margin: 'var(--spacing)' }"
        >
            <LazyFskCalculator
                :title="index.calculator.title"
                :text="index.calculator.text"
                :project-options="index.calculator.projectOptions"
                :design-options="index.calculator.designOptions"
                :timeline-options="index.calculator.timelineOptions"
            />

            <LazyFskFaqs
                :title="index.FAQs.title"
                :items="index.FAQs.items"
            />
        </LazyFskLayout>

        <LazyFskLayout
            direction="row"
            layout="third-two"
            collapse="lg"
            :style="{ margin: 'var(--spacing)' }"
        >
            <LazyFskSocialProof
                :title="index.socialProof.title"
                :icons="index.socialProof.items"
            />

            <LazyFskTestimonialSlider
                :title="index.testimonials.title"
                :items="index.testimonials.items"
            />
        </LazyFskLayout>

<!--        <FskContentBlock-->
<!--            :title="index.contentBlockEmpty.title"-->
<!--            :label="index.contentBlockEmpty.label"-->
<!--            :link="index.contentBlockEmpty.link"-->
<!--            :desktop-only="true"-->
<!--            :style="{ margin: 'var(&#45;&#45;spacing)' }"-->
<!--        />-->

<!--        <FskLayout-->
<!--            direction="row"-->
<!--            layout="equal"-->
<!--            :style="{ margin: 'var(&#45;&#45;spacing)' }"-->
<!--        >-->
<!--            <FskCardCollection-->
<!--                :is-swipe="true"-->
<!--                :filter-image="true"-->
<!--                :cards="blogPosts"-->
<!--                :title="index.contentBlockEmpty.title"-->
<!--                :button-label="index.contentBlockEmpty.label"-->
<!--                :button-link="index.contentBlockEmpty.link"-->
<!--                path-name="/blog"-->
<!--            />-->
<!--        </FskLayout>-->
    </main>
</template>
<script setup lang="ts">
const { locale } = useI18n()
const index = (await import(`~/assets/data/${locale.value}/index.json`)).default

const { getAllProjects } = await useContent()
const projects = getAllProjects()

useSeoMeta({
    title: 'Frank Struik - Frontend Developer',
    description: 'Frank Struik - Frontend Developer Portfolio',
    ogTitle: 'Frank Struik - Frontend Developer',
    ogDescription: 'Frank Struik - Frontend Developer Portfolio',
    ogImage: 'https://frankstruik.com/mt-fuji.webp',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterCard: 'summary_large_image',
    twitterImage: 'https://frankstruik.com/mt-fuji.webp',
})
</script>