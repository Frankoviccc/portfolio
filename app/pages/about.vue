<template>
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
</template>

<script setup lang="ts">
const { locale } = useI18n()
const about = (await import(`~/assets/data/${locale.value}/about.json`)).default
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
</script>