<template>
    <main>
        <FskPageHeader
            :title="index.header.title"
            :subtitle="index.header.subtitle"
            :text="index.header.text"
            :items="index.header.items"
            :image="index.header.image"
        />

        <FskContentBlock
            :title="index.contentBlock.title"
            :text="index.contentBlock.text"
            :button-group="index.contentBlock.items"
            :style="{ margin: 'var(--spacing)' }"
        />

        <FskCounterCollection />

        <FskLayout
            direction="row"
            layout="equal"
            collapse="lg"
            :style="{ margin: 'var(--spacing)' }"
        >
            <FskIconCarousel
                :title="index.technologies.title"
                :items="index.technologies.items"
                :animate="true"
                :double-track="true"
                :square="true"
                :glow-effect="true"
            />

            <FskGitWidget />
        </FskLayout>

        <FskExperience
            :title="index.experience.title"
            :items="index.experience.items"
        />

        <FskContentBlock
            :title="index.projects.title"
            :label="index.projects.label"
            :link="index.projects.link"
            :button-background="true"
            :style="{ margin: 'var(--spacing)' }"
        />

        <FskCardCollection
            :cards="projects"
            :style="{ margin: 'var(--spacing)' }"
            path-name="projects"
        />

        <FskLayout
            direction="row"
            layout="two-third"
            collapse="lg"
            :style="{ margin: 'var(--spacing)' }"
        >
            <FskStepCollection
                :title="index.stepCollection.title"
                :button-text="index.stepCollection.buttonText"
                :button-link="index.stepCollection.buttonLink"
                :items="index.stepCollection.items"
            />

            <FskIconCarousel
                :title="index.industries.title"
                :items="index.industries.items"
                :center-track="true"
                :double-track="true"
                :animate="true"
            />
        </FskLayout>

        <FskLayout
            direction="row"
            layout="equal"
            collapse="lg"
            :style="{ margin: 'var(--spacing)' }"
        >
            <FskCalculator
                :title="index.calculator.title"
                :text="index.calculator.text"
                :project-options="index.calculator.projectOptions"
                :design-options="index.calculator.designOptions"
                :timeline-options="index.calculator.timelineOptions"
            />

            <FskFaqs
                :title="index.FAQs.title"
                :items="index.FAQs.items"
            />
        </FskLayout>

        <FskLayout
            direction="row"
            layout="third-two"
            collapse="lg"
            :style="{ margin: 'var(--spacing)' }"
        >
            <FskSocialProof
                :title="index.socialProof.title"
                :icons="index.socialProof.items"
            />

            <FskTestimonialSlider
                :title="index.testimonials.title"
                :items="index.testimonials.items"
            />
        </FskLayout>

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

const { getAllBlogPosts, getAllProjects } = await useContent()
const blogPosts = getAllBlogPosts()
const projects = getAllProjects()

useHead({
    title: 'Frank Struik',
    meta: [
        {
            name: 'description',
            content: 'Frank Struik - Frontend Developer Portfolio',
        }
    ]
})
</script>