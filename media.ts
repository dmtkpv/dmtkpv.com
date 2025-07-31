import ffmpeg from 'fluent-ffmpeg'
import projects from './database/projects'



// ----------------------
// Data
// ----------------------

const src = 'media'
const dist = 'public/media';
const id = process.argv[2];

const project = projects.find(project => project.id === id);
if (!project) throw Error(`Project with id "${id}" not found`);

const { type, source } = project.media;



// ----------------------
// Helpers
// ----------------------

function base () {
    return ffmpeg(`${src}/${id}.${source}`).outputOptions([
        '-vf', `scale=1024:1024:force_original_aspect_ratio=decrease:force_divisible_by=2`
    ])
}



// ----------------------
// Image
// ----------------------

if (type === 'image') {

    base()
        .outputOptions(['-q:v', '16'])
        .save(`${dist}/${id}.jpg`);

}



// ----------------------
// Video
// ----------------------

if (type === 'video') {

    base()
        .noAudio()
        .videoCodec('libx264')
        .save(`${dist}/${id}.mp4`)

    base()
        .outputOptions(['-frames:v 1'])
        .outputOptions(['-q:v', '16'])
        .save(`${dist}/${id}.jpg`)
}