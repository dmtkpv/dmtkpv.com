import type { Project } from '~types'

export default [
    {
        id: 'dmtkpv-ssg',
        title: 'Static-site generator for Vue 3',
        date: 'July 2025',
        url: 'https://github.com/dmtkpv/ssg',
        tags: ['Vue', 'Vite', 'Open Source', 'TypeScript', 'JSDOM', 'SSG', 'Monorepo', 'Node.js'],
        media: {
            type: 'image',
            source: 'png',
        }
    },
    {
        id: 'meditation-player',
        title: 'Meditation player',
        date: 'June 2025',
        url: 'https://les-meditations-v2.vercel.app',
        tags: ['Vue', 'Vite', 'IndexedDB', 'TailwindCSS', 'HTML5 Audio', 'PWA', 'Mobile App', 'UI/UX Design', 'Vercel'],
        media: {
            type: 'video',
            source: 'mov'
        }
    },
    {
        id: 'rechtsinformers',
        title: 'Animated logo for Rechtsinformers',
        date: 'May 2025',
        url: 'https://rechtsinformer.netlify.app/showcase.html',
        tags: ['HTML5 Canvas', 'GSAP', 'Rollup', 'Animation'],
        media: {
            type: 'video',
            source: 'mov',
            full: true,
            background: '#010414'
        }
    },
    {
        id: 'stage-app',
        title: 'Stage App - internship placement platform',
        date: 'Nov 2023 - Apr 2025',
        url: 'https://stage-app.nl/',
        tags: ['PostgreSQL', 'ExpressJS', 'Directus', 'Stripe', 'Monorepo', 'Google Maps', 'Google Cloud Storage', 'Knex', 'Socket.io', 'Charts.js', 'Vue', 'Vite', 'SSR', 'SCSS', 'JWT', 'Node.js'],
        media: {
            type: 'video',
            source: 'mov'
        }
    },
    {
        id: 'odedwebman',
        title: 'Portfolio website for Oded Webman',
        date: 'Sep 2023',
        url: 'https://www.odedwebman.com',
        tags: ['Vue', 'Vite', 'SSR', 'Directus', 'MySQL', 'SCSS', 'Node.js'],
        media: {
            type: 'video',
            source: 'mov',
            background: '#42220a'
        }
    },
    {
        id: 'directus-grid',
        title: 'Directus grid interface',
        date: 'Aug 2023',
        tags: ['Rollup', 'Vue', 'Directus'],
        media: {
            type: 'video',
            source: 'mov',
            background: '#d1d5db'
        }
    },
    // {
    //     id: 'jurgenostarhild',
    //     title: 'Jurgeno Starhild',
    //     date: 'Feb 2023',
    //     url: 'https://jurgenostarhild.eu/',
    //     tags: ['Vite', 'Vue', 'SSR', 'Directus', 'MySQL', 'Fullstack'],
    //     media: {
    //         type: 'video'
    //     }
    // },
    // {
    //     id: 'poisson',
    //     title: '2D Poisson disk sampling',
    //     date: 'Sep 2022',
    //     url: 'https://github.com/dmtkpv/poisson',
    //     tags: ['Webpack', 'Library', 'HTML5 Canvas'],
    //     media: {
    //         type: 'video'
    //     }
    // }
] satisfies Project[];