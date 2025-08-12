<!--
    Styles
-->

<style>

    @reference "~/index.css";

    .l-section { @apply
        pt-(--padding-y);

        article { @apply
            mb-16;
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

            <div class="max-sm:px-4 text-xs text-gray-400">
                <span>{{ project.date }}</span>
                <span v-if="project.client">&nbsp;•&nbsp;</span>
                <a v-if="project.client" class="inline hover:underline" :href="project.client.url">{{ project.client.title }}</a>
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

    const state = useState();

    const filtered = computed(() => {
        if (!state.tag) return projects;
        return projects.filter(project => project.tags.includes(state.tag));
    })

</script>