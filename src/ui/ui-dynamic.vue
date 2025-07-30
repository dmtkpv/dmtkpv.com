<!--
    Template
-->

<template>

    <ui-link v-if="to" :to="to">
        <slot />
    </ui-link>

    <a v-else-if="href" :href="href" target="_blank">
        <slot />
    </a>

    <button v-else-if="attrs.onClick">
        <slot />
    </button>

    <div v-else>
        <slot />
    </div>

</template>



<!--
    Scripts
-->

<script setup lang="ts">

    import { useAttrs } from 'vue'

    defineProps<{
        to?: string,
        href?: string
    }>()

    const attrs = useAttrs();

</script>