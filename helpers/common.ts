type Sort = 'ASC' | 'DESC';

function getItemIndexById(itemList, id) {
    return itemList.reduce((acc, item, index) => (item.id === id ? index : acc), -1);
}

export function updateItemList(currentList, newList, sort: Sort = 'DESC') {
    newList.forEach(item => {
        const itemIndex = getItemIndexById(currentList, item.id);

        if (itemIndex > -1) {
            currentList[itemIndex] = item;
        } else {
            currentList.unshift(item);
        }
    });

    if (sort === 'DESC') {
        // @ts-ignore
        return currentList.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    // @ts-ignore
    return currentList.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
}
