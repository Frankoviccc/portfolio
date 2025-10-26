<template>
    <section class="experience">
        <div class="experience__inner bento">
            <h2 class="experience__title">
                {{ title }}
            </h2>

            <div class="experience__content">
                <ul class="experience__list">
                    <li
                        v-for="(item, index) in items"
                        :key="index"
                        class="experience__list-item"
                    >
                        <div class="experience__list-item-header">
                            <div class="experience__list-item-icon">
                                <component :is="item.logo" />
                            </div>

                            <div class="experience__list-item-content">
                                <p class="experience__list-item-name">
                                    {{ item.name }}
                                </p>

                                <div class="experience__list-item-text">
                                <span class="experience__list-item-title">
                                    {{ item.title }}
                                </span>

                                    <span class="experience__list-item-date">
                                    {{ item.date }}
                                </span>
                                </div>
                            </div>
                        </div>

                        <ul class="experience__list-item-tasks">
                            <li
                                v-for="(item, itemIndex) in item.tasks"
                                :key="itemIndex"
                                class="experience__list-item-task"
                            >
                                <span>
                                    {{ item.task }}
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Props {
    title: string;
    items: { logo: Component; name: string; title: string; date: string; items: { tasks: string }}[]
}

const props = defineProps<Props>()

console.log(props)
</script>

<style lang="scss">
@use 'fsk-experience';
</style>