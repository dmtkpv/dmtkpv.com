<!--
    Styles
-->

<style>

    @reference "~/index.css";

    .l-section {
        article { @apply
            first:pt-[var(--padding-y)]
            not-first:pt-[calc(var(--header)+var(--padding-y))];
        }
    }
    
</style>



<!--
    Template
-->

<template>
    <section class="l-section container-sm">
        <article v-for="project in filtered" :key="project.id" :id="project.id">


            <!-- note -->

            <div class="max-sm:px-4 text-xs text-gray-400 [&>a]:hover:underline">
                <span>{{ project.date }}</span>
                <span v-if="project.client">&nbsp;•&nbsp;</span>
                <ui-dynamic v-if="project.client" class="inline" :href="project.client.url" target="_blank">{{ project.client.title }}</ui-dynamic>
            </div>


            <!-- title -->

            <h2 class="max-sm:px-4 mb-2">{{ project.title }}</h2>


            <!-- media -->

            <ui-media v-bind="project" />


            <!-- tags -->

            <div class="flex flex-wrap gap-2 mt-4 max-sm:px-4">
                <ui-tag
                    v-for="tag in project.tags.sort()"
                    :text="tag"
                    class="text-xs"
                />
            </div>


        </article>
    </section>
</template>



<!--
    Scripts
-->

<script setup lang="ts">

    import { computed } from 'vue'
    import { useState } from '~/plugins/state'
    import projects from '../../database/projects'
    import UiDynamic from "~/ui/ui-dynamic.vue";

    const state = useState();

    const filtered = computed(() => {
        if (!state.tag) return projects;
        return projects.filter(project => project.tags.includes(state.tag));
    })

</script>