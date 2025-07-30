import path from 'path'
import vue from '@vitejs/plugin-vue'
import svg from 'vite-svg-loader'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfig from './tsconfig.json'



// ---------------------
// Alias
// ---------------------

const paths = tsconfig.compilerOptions.paths as Record<string, string[]>;
const regexp = /\/\*$/;

const alias = Object.keys(paths).reduce<Record<string, string>>((alias, key) => {
    const name = key.replace(regexp, '');
    const value = paths[key][0].replace(regexp, '');
    alias[name] = path.resolve(__dirname, value);
    return alias
}, {})



// ---------------------
// Exports
// ---------------------

export default defineConfig({

    server: {
        host: '0.0.0.0'
    },

    plugins: [
        vue(),
        svg({ svgo: false }),
        tailwindcss(),
    ],

    resolve: {
        alias
    },

})