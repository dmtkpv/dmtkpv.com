import type { Component, App } from 'vue'



// ---------------------
// Imports
// ---------------------

const imports = import.meta.glob<{ default: Component }>([
    '~/layout/*',
    '~/ui/*',
    '~/icons/*',
], { eager: true })



// ---------------------
// Installation
// ---------------------

function install (app: App) {
    for (const key in imports) {
        const name = key.split('/').pop()?.split('.').shift();
        if (name) app.component(name, imports[key].default);
    }
}



// ---------------------
// Exports
// ---------------------

export default function () {
    return install;
}