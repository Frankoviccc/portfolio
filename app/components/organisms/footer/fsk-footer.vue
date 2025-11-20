<template>
    <footer class="footer">
        <div class="footer__header">
            <NuxtLink class="footer__logo-link" to="/">
                <Logo class="box bento" />
            </NuxtLink>

            <FskIndicator text="Available"/>
        </div>

        <div class="footer__form bento">
            <FskContactForm
                title="Contact me"
            />
        </div>

        <nav class="footer__nav">
            <NuxtLink
                v-for="(item, index) in links"
                :key="index"
                :to="item.url"
                type="secondary"
                class="footer__nav-link bento"
            >
                {{ item.label }}

                <Icon
                    name="tabler:arrow-up-right"
                    class="footer__nav-icon"
                />
            </NuxtLink>

            <div class="footer__socials bento">
            <span class="footer__copyright">
                Copyright ©2025
            </span>

                <div class="footer__icons">
                    <FskIconContainer
                        v-for="(item, index) in icons"
                        :key="index"
                        :item="item"
                        :small="true"
                    />
                </div>
            </div>
        </nav>
    </footer>
</template>
<script setup lang="ts">
import FskIndicator from "~/components/molecules/indicator/fsk-indicator.vue";
import FskContactForm from "~/components/organisms/contact-form/fsk-contact-form.vue";
import FskButton from "~/components/atoms/button/fsk-button.vue";
import FskIconContainer from "~/components/atoms/icon-container/fsk-icon-container.vue";

import type { Props } from './fsk-footer.types';
import NuxtLink from "#app/components/nuxt-link";

import Logo from "~/assets/images/logo.svg";
import Github from "@/assets/icons/github.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import X from "@/assets/icons/x.svg";

defineProps<Props>();

const icons = [
    { to: '/', icon: Github },
    { to: '/', icon: Linkedin },
    { to: '/', icon: X },
]
</script>

<style lang="scss">
@use 'fsk-footer';
</style>