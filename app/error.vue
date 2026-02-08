<template>
    <div
        :style="{
            paddingBottom: '1px',
            minHeight: '100vh',
            backgroundColor: 'var(--page-background)'
        }"
    >
        <FskNavbar
            :links="config.navbar.links"
            :languages="config.navbar.languages"
        />

        <div class="error-page bento">
            <div>
                <h1 class="error-page__title">
                    {{ error.statusCode }}
                </h1>

                <p class="error-page__message">
                    {{ errorData.message }}
                </p>
            </div>

            <FskButton to="/">
                {{ errorData.label }}
            </FskButton>
        </div>

        <FskFooter
            :title="config.footer.title"
            :text="config.footer.text"
            :links="config.footer.links"
            :icons="config.footer.icons"
        />
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import config from "~/assets/data/en/config.json";

const { locale } = useI18n()
const errorData = (await import(`~/assets/data/${locale.value}/error.json`)).default

defineProps<{ error: NuxtError }>()
</script>

<style lang="scss">
.error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 var(--spacing);
    padding: var(--padding);
    gap: 1.5rem;
    text-align: center;
}
</style>
