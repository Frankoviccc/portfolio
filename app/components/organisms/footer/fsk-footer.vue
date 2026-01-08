<template>
    <footer class="footer">
        <div class="footer__header">
            <NuxtLink class="footer__logo-link" to="/">
                <Logo
                    class="footer__logo box bento"
                    aria-label="Navigate to homepage"
                />
            </NuxtLink>

            <FskIndicator text="Available"/>
        </div>

        <div class="footer__form bento">
            <FskContactForm :title="title" />
        </div>

        <nav class="footer__nav">
            <NuxtLink
                v-for="(item, index) in links"
                :key="index"
                :to="item.to"
                type="secondary"
                class="footer__nav-link bento"
            >
                {{ item.label }}

                <Icon
                    name="tabler:arrow-up-right"
                    class="footer__nav-icon"
                />
            </NuxtLink>

            <span class="footer__nav-link bento">
                {{ text }}
            </span>

            <div class="footer__socials bento">
            <span class="footer__copyright">
                Copyright ©2025
            </span>

                <div class="footer__icons">
                    <FskIconContainer
                        v-for="(item, index) in icons"
                        :key="index"
                        :to="item.to"
                        :aria-label="item.ariaLabel"
                        :icon="item.icon"
                        size="sm"
                    />
                </div>
            </div>
        </nav>
    </footer>
</template>
<script setup lang="ts">
import type { Props } from './fsk-footer.types';
import Logo from "~/assets/icons/logo.vue";

defineProps<Props>();
</script>

<style lang="scss">
@use 'fsk-footer';
</style>