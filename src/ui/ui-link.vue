<!--
    Styles
-->

<style>

    @reference "~/index.css";
    
</style>



<!--
    Template
-->

<template>
    <a class="ui-link" :href="to" @click.prevent="navigate">
        <slot />
    </a>
</template>



<!--
    Scripts
-->

<script setup lang="ts">

    const props = defineProps<{
        to: string;
    }>()

    function navigate () {
        history.pushState(null, '', props.to);
        window.dispatchEvent(new CustomEvent('ui-link'));
    }

</script>