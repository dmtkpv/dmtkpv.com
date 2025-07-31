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
        <article v-for="project in filtered" :key="project.id">


            <!-- project -->

            <ui-dynamic :href="project.url">

                <div class="mb-2 max-sm:px-4">
                    <span class="text-xs text-gray-400">{{ project.date }}</span>
                    <h2>{{ project.title }}</h2>
                </div>

                <ui-media v-if="project.media" :id="project.id" v-bind="project.media" />

            </ui-dynamic>


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