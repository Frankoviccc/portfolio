<template>
    <section class="icon-collection bento">
        <div class="icon-collection__inner">
            <h2
                v-if="title"
                class="icon-collection__title"
                v-html="title"
            />

            <slot name="title" />

            <div
                :class="[
                    'icon-collection__icons',
                    responsive && 'icon-collection__icons--responsive',
                    `icon-collection__icons--${direction}`,
                    { 'icon-collection__icons--square': square }
                ]"
            >
                <FskIconContainer
                    v-for="(item, index) in items"
                    :key="index"
                    :to="item.link || undefined"
                    :icon="item.icon"
                    :image="item.image"
                    :label="item.label"
                    :icon-color-item="item.color"
                    :icon-color="color"
                    :size="size"
                    :center="center"
                    @click="item.action ? handleAction(item.action) : undefined"
                />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import type { Props } from './fsk-icon-collection.types';
import FskIconContainer from "~/components/atoms/icon-container/fsk-icon-container.vue";
const { shareToFacebook, shareToLinkedIn, copyLink } = useShare()

withDefaults(defineProps<Props>(), {
    direction: "row",
})

const handleCopyLink = async () => {
    const success = await copyLink()
    if (success) {
        alert('Link copied!')
    }
}

const actionMap: Record<string, () => void> = {
    shareToFacebook,
    shareToLinkedIn,
    handleCopyLink,
    copyLink
}

const handleAction = (action: string) => {
    if (actionMap[action]) {
        actionMap[action]()
    }
}
</script>

<style lang="scss">
@use 'fsk-icon-collection';
</style>