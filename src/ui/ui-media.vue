<!--
    Template
-->

<style>

    @reference "~/index.css";

    .ui-media { @apply
        relative
        aspect-square
        overflow-hidden;

        &_container { @apply
            relative
            w-full
            h-full
            flex;
        }

        img, video { @apply
            max-w-full
            max-h-full
        }

        img { @apply
            absolute
            top-1/2
            left-1/2
            shadow-xl
            -translate-1/2
        }

        video { @apply
            relative
            m-auto
        }

    }

</style>



<!--
    Template
-->

<template>
    <ui-dynamic :href="url" class="ui-media" :class="{ 'p-6': !media.full }" v-bind="background">
        <div class="ui-media_container">
            <img ref="img" :src="`/media/${id}.jpg`">
            <ui-video v-if="media.type === 'video' && visible" :id="id" />
        </div>
    </ui-dynamic>
</template>



<!--
    Scripts
-->

<script setup lang="ts">

    import { ref, watch, computed, onMounted, onUnmounted, nextTick } from 'vue';
    import { useState } from '~/plugins/state'
    import type { Project } from '~types';

    const { id, url, media } = defineProps<Project>()
    const el = ref<HTMLElement | null>(null);
    const state = useState();
    const visible = ref(false);

    const background = computed(() => {
      const { background = 'bg-slate-100' } = media;
      if (background.startsWith('bg-')) return { class: background };
      return { style: { background } };
    })

    function onScroll () {
        if (!el.value) return;
        const { top, bottom } = el.value.getBoundingClientRect();
        visible.value = bottom > 0 && top < window.innerHeight;
    }

    function show () {
        if (!el.value) return;
        const $wrapper = el.value.firstElementChild as HTMLElement;
        const $img = $wrapper?.firstElementChild as HTMLImageElement;
        if ($wrapper && $img && !$img.complete) {
            $wrapper.style.opacity = '0';
            $img.onload = () => $wrapper.style.opacity = '1';
            nextTick(() => $wrapper.style.transition = 'opacity .3s');
        }
    }

    onMounted(() => {
        el.value = document.querySelector(`#${id} .ui-media`);
        window.addEventListener('scroll', onScroll);
        onScroll();
        show();
        watch(() => state.tag, () => nextTick(onScroll))
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll);
    })

</script>