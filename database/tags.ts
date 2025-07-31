import projects from './projects'

export default projects.map(project => project.tags).flat().sort().reduce((tags, text) => {
    const tag = tags.find(tag => tag.text === text);
    if (tag) tag.count++;
    else tags.push({ text, count: 1 });
    return tags;
}, [] as { text: string; count: number }[]);