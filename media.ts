import ffmpeg from 'fluent-ffmpeg'
import projects from './database/projects'
import type { Project } from '~types'



// ----------------------
// Data
// ----------------------

const src = 'media'
const dist = 'public/media';
const id = process.argv[2];



// ----------------------
// Select ID
// ----------------------

if (id) {
    const project = projects.find(project => project.id === id);
    if (!project) throw Error(`Project with id "${id}" not found`);
    projects.splice(0, projects.length, project);
}



// ----------------------
// Convert
// ----------------------

function convert (project: Project, format: string, options: string[]) {
    return new Promise((resolve, reject) => {

        const { id, media: { source }} = project;

        ffmpeg(`${src}/${id}.${source}`)
            .outputOptions('-vf scale=1024:1024:force_original_aspect_ratio=decrease:force_divisible_by=2')
            .outputOptions(options)
            .save(`${dist}/${id}.${format}`)
            .on('end', resolve)
            .on('error', reject)

    })
}



// ----------------------
// Start
// ----------------------

for (const project of projects) {

    console.log(project.id);
    const { type } = project.media;


    // image

    if (type === 'image') {
        await convert(project, 'jpg', [
            '-q:v 16'
        ])
    }


    // video

    if (type === 'video') {
        await convert(project, 'jpg', [
            '-q:v 16',
            '-frames:v 1'
        ])
        await convert(project, 'mp4', [
            '-an',
            '-c:v libx264',
            '-crf 28',
            '-preset slow',
        ])
    }


}



