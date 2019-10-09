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

export { buildPoemArray, getMaxLine };
