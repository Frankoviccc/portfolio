<template>
    <div>
        <FskSinglePageHeader :title="about.title" />

        <FskLayout
            direction="row"
            layout="equal"
            collapse="lg"
            :style="{ margin: 'var(--spacing)' }"
        >
            <FskText
                ref="textEl"
                :text="about.text"
            />

            <NuxtPicture
                v-if="about.image"
                :src="about.image.src"
                :alt="about.image.alt"
                :style="{ maxHeight: imageMaxHeight }"
                loading="lazy"
                sizes="100vw lg:50vw"
                format="avif,webp"
                class="picture bento"
            />
        </FskLayout>
    </div>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'

const { locale } = useI18n()
const about = (await import(`~/assets/data/${locale.value}/about.json`)).default
const textEl = ref<ComponentPublicInstance | null>(null)
const textElHeight = ref<number>(0)

const imageMaxHeight = computed(() => `${textElHeight.value}px`)

const updateHeight = () => {
    if (textEl.value) {
        textElHeight.value = useHeight(textEl.value.$el)
    }
}

onMounted(() => {
    if (textEl.value) {
        textElHeight.value = useHeight(textEl.value.$el)
    }

    window.addEventListener('resize', updateHeight)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateHeight)
})

useSeoMeta({
    title: 'About - Frank Struik',
    description: 'Learn more about Frank Struik, a proactive Frontend Developer specializing in creating smooth web experiences.',
    ogTitle: 'About - Frank Struik',
    ogDescription: 'Learn more about Frank Struik, a proactive Frontend Developer specializing in creating smooth web experiences.',
    ogImage: 'https://frankstruik.com/og-logo.png',
    ogImageWidth: '1200',
    ogImageHeight: '1200',
    twitterCard: 'summary_large_image',
    twitterImage: 'https://frankstruik.com/og-logo.png',
})
</script>