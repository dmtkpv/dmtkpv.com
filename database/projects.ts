import type { Project } from '~types'
import clients from './clients'

export default [
    {
        id: 'dmtkpv-ssg',
        date: '2025',
        title: 'Static-site generator for Vue 3',
        tags: ['Vue', 'Vite', 'Open Source', 'TypeScript', 'SSG', 'Node.js'],
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
        date: '2025',
        title: 'Meditation player',
        tags: ['Vue', 'Vite', 'IndexedDB', 'TailwindCSS', 'HTML5 Audio', 'PWA', 'Mobile App', 'UI/UX Design', 'Vercel', 'Frontend'],
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
        date: '2025',
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
        date: '2024',
        title: 'Internship placement platform',
        tags: ['PostgreSQL', 'ExpressJS', 'Directus', 'Stripe', 'Google Maps', 'Google Cloud Storage', 'Knex', 'Socket.io', 'Charts', 'Vue', 'Vite', 'SSR', 'SCSS', 'Node.js', 'Fullstack', 'Web App'],
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
        date: '2023',
        title: 'Artist portfolio website',
        tags: ['Vue', 'Vite', 'SSR', 'Directus', 'MySQL', 'SCSS', 'Fullstack', 'Website'],
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
        date: '2023',
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
        id: 'dmtkpv-ssr',
        date: '2023',
        title: 'Server-side renderer for Vue 3',
        tags: ['Vite', 'Vue', 'SSR', 'Open Source', 'Node.js', 'ExpressJS'],
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
        date: '2022',
        title: 'Learning management system on Directus',
        tags: ['Vue', 'Directus', 'PostgreSQL', 'Docker', 'MathJax', 'Node.js', 'Knex', 'Fullstack'],
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
        date: '2022',
        title: 'Performance monitor extension for Chrome',
        tags: ['Chrome Extension', 'HTML5 Canvas', 'Open Source'],
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
        date: '2021',
        title: 'Corporate website for IT services company',
        tags: ['Webpack', 'SCSS', 'Vue', 'SSR', 'MySQL', 'Directus', 'Fullstack', 'GraphQL', 'Website'],
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
        date: '2021',
        title: 'Art gallery website',
        tags: ['Webpack', 'SCSS', 'Vue', 'Vuex', 'SSR', 'MySQL', 'Directus', 'Fullstack', 'Node.js', 'Website'],
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
        date: '2021',
        title: 'Interactive 3D feature map',
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
        client: clients.squarestudio,
        id: 'avenues',
        date: '2021',
        title: 'Corporate website for video editing company',
        tags: ['Webpack', 'Vue', 'Vuex', 'Directus', 'MySQL', 'FFmpeg', 'Fullstack', 'HTML5 Video', 'Node.js', 'Website'],
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
        id: 'openroom-map',
        date: '2020',
        title: 'Property explorer',
        tags: ['Webpack', 'Vue', 'Vuex', 'Google Maps', 'Charts', 'Web App', 'Frontend'],
        media: {
            type: 'video',
            background: 'bg-blue-50'
        },
        ffmpeg: {
            input: 'mov',
            y: 100
        }
    },

    {
        client: clients.openroom,
        id: 'openroom-ocr',
        date: '2020',
        title: 'Property diagram manager',
        tags: ['Webpack', 'Vue', 'Vuex', 'HTML5 Canvas', 'Web App', 'Frontend'],
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
        date: '2019',
        title: 'Travel booking platform',
        url: 'https://www.holidaysnipe.com/',
        tags: ['Webpack', 'Vue', 'Vuex', 'Web App', 'Frontend'],
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
        date: '2019',
        title: 'Survey application',
        tags: ['Webpack', 'Apache Cordova', 'Mobile App', 'UI/UX Design', 'GSAP', 'Frontend'],
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
        date: '2018',
        title: 'Sticker creation tool',
        url: 'https://barcode-editor-ks.netlify.app/',
        tags: ['Webpack', 'Vue', 'Vuex', 'UI/UX Design', 'Fabric.js', 'HTML5 Canvas', 'Web App', 'Frontend'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mp4',
        }
    },
    {
        client: clients.dynconnect,
        id: 'altaviasumis',
        date: '2018',
        title: 'Order management application',
        tags: ['Webpack', 'Vue', 'Vuex', 'UI/UX Design', 'Web App', 'Frontend'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mp4',
        }
    },
    {
        client: clients.upgames,
        id: 'upgames',
        date: '2018',
        title: 'Corporate website for game developer',
        url: 'https://upgames.ltd',
        tags: ['AngularJS', 'GSAP', 'SVG', 'Directus', 'Fullstack', 'Website'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        client: clients.raymond,
        id: 'printfellow',
        date: '2017',
        title: 'Printing service platform',
        url: 'https://printfellow.com/',
        tags: ['AngularJS', 'Web App', 'Frontend'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        client: clients.marc,
        id: 'icons',
        date: '2017',
        title: 'Animated SVG icons',
        url: 'https://svg-icons.netlify.app/icm.html',
        tags: ['Animation', 'SVG', 'GSAP'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        client: clients.raymond,
        id: 'mediascheppers',
        date: '2016',
        title: 'Corporate website for design agency',
        url: 'http://www.mediascheppers.nl',
        tags: ['AngularJS', 'Website', 'Frontend'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mp4',
        }
    },
    {

        id: 'vpn',
        date: '2016',
        title: 'Animated promo for VPN provider',
        url: 'https://vpn-movie.netlify.app/',
        tags: ['Animation', 'CSS Animation', 'SVG'],
        media: {
            type: 'video',
            full: true
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        client: clients.areon,
        id: 'pumb-2014',
        date: '2015',
        title: 'Bank annual report',
        tags: ['Charts', 'jQuery', 'Website'],
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
        date: '2014',
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
        tags: ['Apache Cordova', 'Mobile App', 'jQuery'],
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
        tags: ['Animation', 'CSS Animation'],
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
        tags: ['Animation', 'CSS Animation'],
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