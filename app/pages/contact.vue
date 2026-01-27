<template>
    <FskSinglePageHeader :title="contact.title"/>

    <FskLayout
        direction="row"
        layout="quarter-three"
        collapse="lg"
        :style="{ margin: 'var(--spacing)' }"
    >
        <FskText
            ref="textEl"
            :text="contact.text"
        />

        <NuxtPicture
            v-if="contact.image"
            :src="contact.image.src"
            :alt="contact.image.alt"
            :style="{ maxHeight: imageMaxHeight }"
            sizes="100vw md:75vw"
            format="avif,webp"
            class="picture bento"
        />
    </FskLayout>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const contact = (await import(`~/assets/data/${locale.value}/contact.json`)).default


const textEl = ref<any>(null)
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
    title: 'Contact - Frank Struik',
    description: 'Get in touch with Frank Struik for frontend development projects, collaborations, or inquiries. Let\'s build something great together!',
    ogTitle: 'Contact - Frank Struik',
    ogDescription: 'Get in touch with Frank Struik for frontend development projects, collaborations, or inquiries. Let\'s build something great together!',
    ogImage: 'https://frankstruik.com/og-logo.png',
    ogImageWidth: '1200',
    ogImageHeight: '1200',
    twitterCard: 'summary_large_image',
    twitterImage: 'https://frankstruik.com/og-logo.png',
})
</script>