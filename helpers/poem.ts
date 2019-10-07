function getPoemIndexById(poemList, id) {
    return poemList.reduce((acc, poem, index) => (poem.id === id ? index : acc), -1);
}

function updatePoemList(currentList, newList) {
    newList.forEach(poem => {
        const poemIndex = getPoemIndexById(currentList, poem.id);

        if (poemIndex > -1) {
            currentList[poemIndex] = poem;
        } else {
            currentList.unshift(poem);
        }
    });

    // @ts-ignore
    return currentList.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}

function buildPoemArray(text: string) {
    let lines = text
        .trim()
        .split('\n')
        .reduce((acc, el) => [...acc, el.trim()], []);

    /**
     * Removing extra space between strophes
     */
    lines = lines
        .map((line, index) => (index === 0 || line !== '' || (line === '' && lines[index - 1] !== '') ? line : null))
        .filter(el => el !== null);

    return lines;
}

function getMaxLine(lines: string[]): number {
    return lines.reduce((acc, el) => (el.length > acc ? el.length : acc), 0);
}

export { updatePoemList, buildPoemArray, getMaxLine };
