<!--
    Template
-->

<style>

    @reference "~/index.css";

    .ui-tag { @apply
        flex
        items-center
        gap-1
        px-2
        py-1
        rounded-sm
        w-max
        transition-colors;

        &.-active { @apply
            bg-gray-500
            text-white
        }

        &:not(.-active) { @apply
            bg-gray-100
            text-gray-900;
            @variant hover { @apply
                bg-gray-200
            }
        }

    }

</style>



<!--
    Template
-->

<template>
    <ui-link class="ui-tag" :class="{ '-active': active }" :to=" active ? '/' : `/${encodeURIComponent(text)}`">
        <span>{{ text }}</span>
        <span class="opacity-60 text-[0.8em]" v-if="count !== undefined">({{ count }})</span>
    </ui-link>
</template>



<!--
    Scripts
-->

<script setup lang="ts">

    import { computed } from 'vue'
    import { useState } from '~/plugins/state'

    const props = defineProps<{
        text: string,
        count?: number,
    }>()

    const state = useState();

    const active = computed(() => {
        return state.tag === props.text;
    })

</script>