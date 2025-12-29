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

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>

        <FskFooter
            :title="config.footer.title"
            :links="config.footer.links"
            :icons="config.footer.icons"
        />
    </div>
</template>

<script setup lang="ts">
import config from "~/assets/data/config.json"
</script>