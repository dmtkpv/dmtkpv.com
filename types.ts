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
        source: 'png' | 'mov' | 'mp4'
        full?: boolean,
        background?: string
    }
}