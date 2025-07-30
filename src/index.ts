import './index.css'
import type { Context } from '~types'
import createApp from '@dmtkpv/ssg/createApp'
import createComponents from '~/plugins/components'
import createState from '~/plugins/state'
import App from '~/index.vue'



// ---------------------
// Scrollbar
// ---------------------

function setScrollbar() {
    const outer = document.createElement('div');
    const inner = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);
    outer.appendChild(inner);
    document.documentElement.style.setProperty('--scrollbar', (outer.offsetWidth - inner.offsetWidth) + 'px');
    document.body.removeChild(outer);
}



// ---------------------
// Exports
// ---------------------

export default createApp(App, ({ app, data, isSSR }) => {

    const ctx: Context = { data, isSSR };
    const state = createState(ctx);
    const components = createComponents();

    app.use(state);
    app.use(components);

    if (!isSSR) setScrollbar();

})



