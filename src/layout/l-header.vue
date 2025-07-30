<!--
    Template
-->

<style>

    @reference "~/index.css";

    .l-header { @apply



        /*
            Common
        */

        sticky
        top-0
        left-0
        w-full
        bg-white
        border-bottom
        z-1;



        /*
            Container
        */

        .container-lg { @apply
            h-(--header)
            px-(--padding-x)
            flex
            items-center;

            @variant lg { @apply
                gap-4;
            }

            @variant max-lg { @apply
                gap-3;
            }

        }



        /*
            Icon
        */

        &_icon { @apply

            text-gray-500
            transition-colors;

            svg { @apply
                h-5;
            }

            @variant hover { @apply
                text-black;
            }

        }



        /*
            Menu
        */

        &_menu {

            line {
                transform-box: fill-box;
                transform-origin: center;
                transition-property: transform, opacity;
                transition-duration: 300ms;
            }

            &.-active {
                line:nth-child(1) { transform: translatey(6px) rotate(-45deg) }
                line:nth-child(2) { opacity: 0 }
                line:nth-child(3) { transform: translatey(-6px) rotate(45deg) }
            }

        }



    }

</style>



<!--
    Template
-->

<template>
    <header class="l-header">
        <div class="container-lg">

            <button class="l-header_icon l-header_menu lg:hidden" @click="state.menu = !state.menu" :class="{ '-active': state.menu }">
                <icon-menu />
            </button>

            <h1 class="sr-only">
                Dmitriy Karpov
                <template v-if="state.tag"> - {{ state.tag }}</template>
            </h1>

            <ui-link class="mr-auto" to="/">
                <icon-logo class="h-6" />
            </ui-link>

            <a v-for="{ icon, href } in contacts" class="l-header_icon" :href="href" target="_blank">
                <component :is="icon" />
            </a>

        </div>
    </header>
</template>



<!--
    Scripts
-->

<script setup lang="ts">

    import contacts from '~db/contacts'
    import { useState } from '~/plugins/state'

    const state = useState();


</script>