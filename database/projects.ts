import type { Project } from '~types'

export default [
    {
        id: 'dmtkpv-ssg',
        title: 'Static-site generator for Vue 3',
        date: 'July 2025',
        url: 'https://github.com/dmtkpv/ssg',
        tags: ['Vue', 'Vite', 'Open Source', 'TypeScript', 'SSG', 'Monorepo', 'Node.js'],
        media: {
            type: 'image'
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
            type: 'video'
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
        tags: ['Vue', 'Vite', 'SSR', 'Directus', 'MySQL', 'SCSS'],
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
            background: 'bg-gray-300'
        },
        ffmpeg: {
            input: 'mov',
            chromeFix: true
        }
    },
    {
        id: 'jurgenostarhild',
        title: 'Portfolio website for Jurgeno Starhild',
        date: 'Aug 2023',
        url: 'https://jurgenostarhild.eu/',
        tags: ['Vite', 'Vue', 'SSR', 'Directus', 'MySQL'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mov',
            chromeFix: true
        }
    },
    {
        id: 'dmtkpv-ssr',
        title: 'Server-side renderer for Vue 3',
        date: 'July 2023',
        url: 'https://github.com/dmtkpv/vite-vue-ssr',
        tags: ['Vite', 'Vue', 'SSR', 'Open Source', 'Monorepo', 'Node.js', 'ExpressJS'],
        media: {
            type: 'image'
        },
        ffmpeg: {
            input: 'png'
        }
    },
    {
        id: 'abwaab',
        title: 'Learning managment system for Abwaab',
        date: 'Feb 2022 - June 2023',
        url: 'https://abwaab.com/',
        tags: ['Vue', 'Directus', 'PostgreSQL', 'Docker', 'MathJax', 'Node.js', 'Knex'],
        media: {
            type: 'video',
            background: 'bg-gray-300'
        },
        ffmpeg: {
            input: 'mov',
            chromeFix: true
        }
    },
    // {
    //     id: 'poisson',
    //     title: '2D Poisson disk sampling',
    //     date: 'Jan 2022',
    //     url: 'https://github.com/dmtkpv/poisson',
    //     tags: ['Webpack', 'HTML5 Canvas', 'Open Source'],
    //     media: {
    //         type: 'video'
    //     },
    //     ffmpeg: {
    //         input: 'mov',
    //     }
    // },
    {
        id: 'tabstats',
        title: 'Performance monitor extension for Chrome',
        date: 'Sep 2021',
        url: 'https://github.com/dmtkpv/tabstats',
        tags: ['Chrome extension', 'HTML5 Canvas', 'Open Source'],
        media: {
            type: 'video',
            background: '#e5e7eb'
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        id: 'lvivsoft',
        title: 'Corporate website for LvivSoft',
        date: 'Aug 2021',
        url: 'https://lvivsoft.com',
        tags: ['Webpack', 'SCSS', 'Vue', 'SSR', 'MySQL', 'Directus'],
        media: {
            type: 'video',
            background: 'bg-gray-200'
        },
        ffmpeg: {
            input: 'mov',
            chromeFix: true
        }
    },
    {
        id: 'victorarwas',
        title: 'Website for Victor Arwas gallery',
        date: 'May 2021',
        url: 'https://victorarwasart.com',
        tags: ['Webpack', 'SCSS', 'Vue', 'SSR', 'MySQL', 'Directus'],
        media: {
            type: 'video',
            background: '#fcf1e9'
        },
        ffmpeg: {
            input: 'mov',
            chromeFix: true
        }
    }
] satisfies Project[];