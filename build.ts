import createSSG from '@dmtkpv/ssg/createSSG'
import tags from '~db/tags'

const ssg = await createSSG();
await ssg('/');

for (const { text } of tags) {
    await ssg(`/${text}`, { tag: text });
}