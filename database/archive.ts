import clients from "~db/clients";

export default [
    {
        id: 'poisson',
        title: '2D Poisson disk sampling',
        date: 'Jan 2022',
        tags: ['Webpack', 'HTML5 Canvas', 'Open Source'],
        url: 'https://github.com/dmtkpv/poisson',
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        id: 'grave',
        title: 'Funeral services website',
        date: 'Nov 2019',
        url: 'http://xn--80abhuhjendq4a.com.ua/',
        tags: ['Webpack', 'WebGL', 'Netlify', 'SSG', 'UI/UX Design'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mov',
            y: 2
        }
    },
    {
        id: 'marijuana',
        title: 'Infographic landing page',
        date: 'Mar 2019',
        url: 'https://www.nylawnet.com/recreational-marijuana-legalization-implications/',
        tags: ['Webpack', 'Vue', 'Vuex', 'UI/UX Design'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        id: 'holier',
        title: 'Infographic landing page',
        date: 'Mar 2019',
        url: 'https://www.nylawnet.com/recreational-marijuana-legalization-implications/',
        tags: ['Webpack', 'Vue', 'Vuex', 'UI/UX Design'],
        media: {
            type: 'video'
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        client: clients.areon,
        id: 'pumb-2013',
        date: '2014',
        title: 'Bank annual report',
        tags: ['Highcharts', 'jQuery'],
        media: {
            type: 'video',
        },
        ffmpeg: {
            input: 'mov',
            y: 2
        }
    },
    {
        id: 'shooter',
        title: 'Click-to-hit shooter',
        date: '2012',
        client: 'WhiteLord Solutions LLP',
        url: 'https://dmtkpv-portfolio.github.io/shooter/',
        tags: ['Game'],
        media: {
            type: 'video',
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        hidden: true,
        id: 'hot-numbers',
        title: 'Number guessing reveal game',
        date: '2012',
        client: 'WhiteLord Solutions LLP',
        url: 'https://4pda.to/forum/index.php?showtopic=393724',
        tags: ['Apache Cordova', 'Mobile App', 'Game', 'jQuery', 'UI/UX Design'],
        media: {
            type: 'video',
            full: true,
            background: 'bg-pink-500'
        },
        ffmpeg: {
            input: 'mov',
        }
    },
    {
        id: 'overland',
        date: 'Mar 2016',
        title: 'Logo animation',
        url: 'https://labs-ks.netlify.app/logo.html',
        tags: ['Animation'],
        media: {
            type: 'video',
            full: true
        },
        ffmpeg: {
            input: 'mp4',
        }
    },
    {
        client: clients.squarestudio,
        id: 'jurgenostarhild',
        date: 'Mar 2023',
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
]