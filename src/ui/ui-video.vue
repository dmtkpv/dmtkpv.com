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
    <video class="opacity-0" ref="el" muted loop @canplay="play()">
        <source :src="`/media/${id}.mp4`">
    </video>
</template>



<!--
    Scripts
-->

<script setup lang="ts">

    import { ref, useTemplateRef, onBeforeUnmount } from 'vue'

    defineProps<{
        id: string
    }>()

    const el = useTemplateRef<HTMLVideoElement>('el');
    const destroying = ref(false);

    function play () {
        if (destroying.value) return;
        if (!el.value) return;
        el.value.style.opacity = '1';
        el.value.play();
    }

    onBeforeUnmount(() => {
        destroying.value = true;
        if (!el.value) return;
        el.value.pause();
        el.value.src = '';
    })

</script>