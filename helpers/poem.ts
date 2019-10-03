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

export { updatePoemList };
