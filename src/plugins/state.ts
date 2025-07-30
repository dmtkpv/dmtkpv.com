import type { State, Context } from '~types'
import type { App } from 'vue'
import { reactive, watch, inject } from 'vue'

export function useState () {
    const state = inject<State>('state');
    if (!state) throw new Error('state is not provided');
    return state;
}

export default function ({ data, isSSR }: Context) {



    // ---------------------
    // Data
    // ---------------------

    const defaults: State = {
        menu: false,
        isSSR: false,
        tag: '',
    }

    const state = reactive<State>({
        ...defaults,
        ...data
    });



    // ---------------------
    // Actions
    // ---------------------

    function setTag () {
        state.tag = decodeURIComponent(location.pathname.slice(1));
        state.menu = false;
        window.scrollTo(0, 0);
    }

    function resize () {
        const breakpoint = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-lg'));
        if (state.menu && window.innerWidth >= breakpoint) state.menu = false;
    }

    function toggleScroll (value: boolean) {
        document.body.style.paddingRight = value ? 'var(--scrollbar)' : '';
        document.body.style.overflow =  value ? 'hidden' : '';
    }



    // ---------------------
    // Init
    // ---------------------

    if (!isSSR) {
        window.addEventListener('popstate', setTag);
        window.addEventListener('ui-link', setTag);
        window.addEventListener('resize', resize);
        watch(() => state.menu, toggleScroll)
        !state.tag && setTag();
    }



    // ---------------------
    // Plugin
    // ---------------------

    return function (app: App) {
        app.provide('state', state);
    }



}