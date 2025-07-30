<!--
    Template
-->

<style>

    @reference "~/index.css";

    .l-aside { @apply



        /*
            Common
        */

        fixed
        top-(--header)
        bottom-0
        overflow-hidden;

        &_container { @apply
            h-full;
        }



        /*
            Desktop
        */

        @variant lg { @apply

            !block;

            &_container { @apply
                py-(--padding-y)
                pl-(--padding-x)
            }

        }



        /*
            Mobile
        */

        @variant max-lg { @apply

            left-0
            right-0
            bg-black/60;
            --default-transition-duration: 300ms;

            &_container { @apply
                w-64
                p-(--padding-x)
                bg-white;
            }

            &.v-enter-active,
            &.v-leave-active { @apply
                transition-colors;
            }
            &.v-enter-from,
            &.v-leave-to { @apply
                bg-black/0;
            }

            &.v-leave-active &_container,
            &.v-enter-active &_container { @apply
                transition-transform;
            }

            &.v-enter-from &_container,
            &.v-leave-to &_container { @apply
                -translate-x-full;
            }

        }



    }

</style>



<!--
    Template
-->

<template>
    <transition>
        <aside class="l-aside" v-show="state.menu"  @click="hide">
            <div class="l-aside_container no-scrollbar" ref="container">

                <ui-tag
                    class="text-sm my-2"
                    v-for="{ text, count } in tags"
                    :text="text"
                    :count="count"
                />

            </div>
        </aside>
    </transition>
</template>



<!--
    Scripts
-->

<script setup lang="ts">


    import tags from '~db/tags'
    import { useState } from '~/plugins/state'

    const state = useState();

    function hide (event: MouseEvent) {
        if (event.currentTarget === event.target) state.menu = false;
    }

</script>