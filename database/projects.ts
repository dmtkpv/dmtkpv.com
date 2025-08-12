import type { Project } from '~types'
import clients from './clients'

export default [
    {
        id: 'dmtkpv-ssg',
        date: 'July 2025',
        title: 'Static-site generator for Vue 3',
        tags: ['Vue', 'Vite', 'Open Source', 'TypeScript', 'SSG', 'Monorepo', 'Node.js'],
        url: 'https://github.com/dmtkpv/ssg',
        media: {
            type: 'video',
        },
        ffmpeg: {
            input: 'png'
        },
    },
    {
        client: clients.gallaz,
        id: 'meditation-player',
        date: 'June 2025',
        title: 'Meditation player',
        tags: ['Vue', 'Vite', 'IndexedDB', 'TailwindCSS', 'HTML5 Audio', 'PWA', 'Mobile App', 'UI/UX Design', 'Vercel'],
        url: 'https://les-meditations-v2.vercel.app',
        media: {
            type: 'video',
        },
        ffmpeg: {
            input: 'mov'
        }
    },
    {
        client: clients.semantic,
        id: 'rechtsinformers',
        date: 'May 2025',
        title: 'Animated logo',
        tags: ['HTML5 Canvas', 'GSAP', 'Rollup', 'Animation'],
        url: 'https://rechtsinformer.netlify.app/showcase.html',
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
        client: clients.bizberg,
        id: 'stage-app',
        date: 'Nov 2023 - Apr 2025',
        title: 'Stage App - Internship placement platform',
        tags: ['PostgreSQL', 'ExpressJS', 'Directus', 'Stripe', 'Monorepo', 'Google Maps', 'Google Cloud Storage', 'Knex', 'Socket.io', 'Charts.js', 'Vue', 'Vite', 'SSR', 'SCSS', 'JWT', 'Node.js'],
        url: 'https://stage-app.nl/',
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mov',
            y: 2
        }
    },
    {
        client: clients.squarestudio,
        id: 'odedwebman',
        date: 'Oct 2023',
        title: 'Portfolio website for Oded Webman',
        tags: ['Vue', 'Vite', 'SSR', 'Directus', 'MySQL', 'SCSS'],
        url: 'https://www.odedwebman.com',
        media: {
            type: 'video',
            background: '#42220a'
        },
        ffmpeg: {
            input: 'mov',
            y: 2
        }
    },
    {
        client: clients.squarestudio,
        id: 'directus-grid',
        date: 'Sep 2023',
        title: 'Directus grid interface',
        tags: ['Rollup', 'Vue', 'Directus'],
        media: {
            type: 'video',
            background: 'bg-gray-300'
        },
        ffmpeg: {
            input: 'mov',
            y: 2
        }
    },
    {
        client: clients.squarestudio,
        id: 'jurgenostarhild',
        date: 'Aug 2023',
        title: 'Portfolio website for Jurgeno Starhild',
        tags: ['Vite', 'Vue', 'SSR', 'Directus', 'MySQL'],
        url: 'https://jurgenostarhild.eu/',
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mov',
            y: 2
        }
    },
    {
        id: 'dmtkpv-ssr',
        date: 'July 2023',
        title: 'Server-side renderer for Vue 3',
        tags: ['Vite', 'Vue', 'SSR', 'Open Source', 'Monorepo', 'Node.js', 'ExpressJS'],
        url: 'https://github.com/dmtkpv/vite-vue-ssr',
        media: {
            type: 'image'
        },
        ffmpeg: {
            input: 'png'
        }
    },
    {
        client: clients.abwaab,
        id: 'abwaab',
        date: 'Feb 2022 - June 2023',
        title: 'Learning management system on Directus',
        tags: ['Vue', 'Directus', 'PostgreSQL', 'Docker', 'MathJax', 'Node.js', 'Knex'],
        url: 'https://abwaab.com/',
        media: {
            type: 'video',
            background: 'bg-gray-300'
        },
        ffmpeg: {
            input: 'mov',
            y: 2
        }
    },
    {
        id: 'tabstats',
        date: 'Sep 2021',
        title: 'Performance monitor extension for Chrome',
        tags: ['Chrome extension', 'HTML5 Canvas', 'Open Source'],
        url: 'https://github.com/dmtkpv/tabstats',
        media: {
            type: 'video',
            background: '#e5e7eb'
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        client: clients.squarestudio,
        id: 'lvivsoft',
        date: 'Aug 2021',
        title: 'Corporate website for LvivSoft',
        tags: ['Webpack', 'SCSS', 'Vue', 'SSR', 'MySQL', 'Directus'],
        url: 'https://lvivsoft.com',
        media: {
            type: 'video',
            background: 'bg-gray-200'
        },
        ffmpeg: {
            input: 'mov',
            y: 2
        }
    },
    {
        client: clients.squarestudio,
        id: 'victorarwas',
        date: 'May 2021',
        title: 'Gallery website for Victor Arwas',
        tags: ['Webpack', 'SCSS', 'Vue', 'Vuex', 'SSR', 'MySQL', 'Directus'],
        url: 'https://victorarwasart.com',
        media: {
            type: 'video',
            background: '#fcf1e9'
        },
        ffmpeg: {
            input: 'mov',
            y: 2
        }
    },
    {
        client: clients.lightsail,
        id: 'lightsail',
        date: 'Feb 2021',
        title: 'Feature map',
        tags: ['Webpack', 'GSAP', 'Animation'],
        url: 'https://lightsailed.com/reading-at-home/es/feature-list-3d/',
        media: {
            type: 'video',
            background: '#000',
            full: true
        },
        ffmpeg: {
            input: 'mov',
            y: 2
        }
    },
    {
        client: clients.openroom,
        id: 'openroom-map',
        date: 'Dec 2020',
        title: 'Property explorer',
        tags: ['Webpack', 'Vue', 'Vuex', 'Google Maps', 'Charts.js'],
        media: {
            type: 'video',
            background: 'bg-blue-50'
        },
        ffmpeg: {
            input: 'mov',
            y: 148
        }
    },
    {
        client: clients.squarestudio,
        id: 'avenues',
        date: 'Sep 2020',
        title: 'Portfolio website for Avenues Studio',
        tags: ['Webpack', 'Vue', 'Vuex', 'Directus', 'MySQL', 'FFmpeg'],
        url: 'https://avenues.studio',
        media: {
            type: 'video',
            background: 'bg-gray-200'
        },
        ffmpeg: {
            input: 'mov'
        }
    },
    {
        client: clients.openroom,
        id: 'openroom-ocr',
        date: 'Apr 2020',
        title: 'Property diagram manager',
        tags: ['Webpack', 'Vue', 'Vuex', 'HTML5 Canvas'],
        url: 'https://forestapp.openrm.jp/',
        media: {
            type: 'video',
            background: '#4D9B48'
        },
        ffmpeg: {
            input: 'mov',
            y: 2
        }
    },
    {
        client: clients.raymond,
        id: 'holidaysnipe',
        date: 'Apr 2020',
        title: 'HolidaySnipe - Travel booking platform',
        url: 'https://www.holidaysnipe.com/',
        tags: ['Webpack', 'Vue', 'Vuex'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        client: clients.dynconnect,
        id: 'surveys',
        date: 'Sep 2019',
        title: 'Survey application',
        tags: ['Webpack', 'Apache Cordova', 'Mobile App', 'UI/UX Design', 'GSAP'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mp4',
        }
    },
    {
        client: clients.dynconnect,
        id: 'barcode',
        date: 'Aug 2019',
        title: 'Sticker creation tool',
        url: 'https://barcode-editor-ks.netlify.app/',
        tags: ['Webpack', 'Vue', 'Vuex', 'UI/UX Design', 'Fabric.js', 'HTML5 Canvas'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mp4',
        }
    },
    {
        client: clients.areon,
        id: 'pumb-2014',
        date: '2015',
        title: 'Bank annual report',
        tags: [],
        media: {
            type: 'video',
        },
        ffmpeg: {
            input: 'mov',
            y: 2
        }
    },
    {
        client: clients.areon,
        id: 'pumb-2013',
        date: '2014',
        title: 'Bank annual report',
        tags: [],
        media: {
            type: 'video',
        },
        ffmpeg: {
            input: 'mov',
            y: 2
        }
    },
    {
        client: clients.areon,
        id: 'kyivstar',
        title: 'Mobile operator application',
        date: '2013 - 2015',
        url: 'https://play.google.com/store/apps/details?id=com.kyivstar.mykyivstar',
        tags: ['Apache Cordova', 'Mobile App', 'AngularJS'],
        media: {
            type: 'video',
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        client: clients.whitelord,
        id: 'christmasfrenzy',
        date: '2012',
        title: 'Match-3 game with a Christmas theme',
        tags: ['Apache Cordova', 'Mobile App', 'Game', 'jQuery'],
        url: 'https://christmas-frenzy.netlify.app/',
        media: {
            type: 'video',
            background: '#C33C26'
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        id: 'bender',
        title: 'Bender (Futurama) animation',
        date: '2011',
        tags: ['Animation'],
        url: 'https://labs-ks.netlify.app/bender.html',
        media: {
            type: 'video',
            background: 'linear-gradient(to left, #547489, #85A0B1, #547489)',
            full: true
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        id: 'ft',
        date: '2011',
        title: 'Futuristic animation',
        tags: ['Animation'],
        url: 'https://labs-ks.netlify.app/ft.html',
        media: {
            type: 'video',
            background: 'bg-white',
            full: true
        },
        ffmpeg: {
            input: 'mov',
        }
    }


] satisfies Project[];