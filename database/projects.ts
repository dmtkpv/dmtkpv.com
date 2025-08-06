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
        },
        ffmpeg: {
            input: 'png'
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
        },
        ffmpeg: {
            input: 'mov'
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
            full: true,
            background: '#010414'
        },
        ffmpeg: {
            input: 'mov'
        }
    },
    {
        id: 'stage-app',
        title: 'Stage App - Internship placement platform',
        date: 'Nov 2023 - Apr 2025',
        url: 'https://stage-app.nl/',
        tags: ['PostgreSQL', 'ExpressJS', 'Directus', 'Stripe', 'Monorepo', 'Google Maps', 'Google Cloud Storage', 'Knex', 'Socket.io', 'Charts.js', 'Vue', 'Vite', 'SSR', 'SCSS', 'JWT', 'Node.js'],
        media: {
            type: 'video',
        },
        ffmpeg: {
            input: 'mov',
            chromeFix: true
        }
    },
    {
        id: 'odedwebman',
        title: 'Portfolio website for Oded Webman',
        date: 'Oct 2023',
        url: 'https://www.odedwebman.com',
        tags: ['Vue', 'Vite', 'SSR', 'Directus', 'MySQL', 'SCSS', 'Node.js', 'Docker'],
        media: {
            type: 'video',
            background: '#42220a'
        },
        ffmpeg: {
            input: 'mov',
            chromeFix: true
        }
    },
    {
        id: 'directus-grid',
        title: 'Directus grid interface',
        date: 'Sep 2023',
        tags: ['Rollup', 'Vue', 'Directus'],
        media: {
            type: 'video',
            background: '#d1d5db'
        },
        ffmpeg: {
            input: 'mov',
            chromeFix: true
        }
    },
    {
        id: 'jurgenostarhild',
        title: 'Jurgeno Starhild',
        date: 'Aug 2023',
        url: 'https://jurgenostarhild.eu/',
        tags: ['Vite', 'Vue', 'SSR', 'Directus', 'MySQL', 'JSDOM'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mov',
            chromeFix: true
        }
    },
    {
        id: 'abwaab',
        title: 'Learning managment system for Abwaab',
        date: 'Feb 2022 - July 2023',
        url: 'https://abwaab.com/',
        tags: ['Vue', 'Directus', 'PostgreSQL', 'Docker', 'MathJax', 'Node.js', 'Rollup'],
        media: {
            type: 'video',
            background: '#d1d5db'
        },
        ffmpeg: {
            input: 'mov',
            chromeFix: true
        }
    },
    {
        id: 'poisson',
        title: '2D Poisson disk sampling',
        date: 'Jan 2022',
        url: 'https://github.com/dmtkpv/poisson',
        tags: ['Webpack', 'HTML5 Canvas'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mov',
        }
    }
] satisfies Project[];