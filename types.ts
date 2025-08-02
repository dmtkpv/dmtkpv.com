import type { Data } from '@dmtkpv/ssg/createApp'

export type Context = {
    isSSR: boolean,
    data: Data
}

export type State = {
    menu: boolean,
    tag: string,
    isSSR: boolean
}

export type Project = {
    id: string,
    title: string,
    date: string,
    url?: string,
    tags: string[],
    media: {
        type: 'video' | 'image',
        full?: boolean,
        background?: `#${string}`
    },
    ffmpeg: {
        input: 'png' | 'mov' | 'mp4',
        chromeFix?: boolean
    }
}