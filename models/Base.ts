import Model from './Model';

class BaseModel extends Model {
    url: string;
    constructor(url: string) {
        super();
        this.url = url;
    }

    getList(page: number, filters = {}) {
        let url = `${this.url}?page=${page}`;
        let filtersStr = '';

        if (Object.keys(filters).length) {
            for (let key in filters) {
                filtersStr += `&${key}=${filters[key]}`;
            }
            url += filtersStr;
        }

        return new Promise((resolve, reject) => {
            this.request({
                type: 'GET',
                url
            })
                .then(r => {
                    resolve(r);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    getItem(id: number) {
        return new Promise((resolve, reject) => {
            this.request({
                type: 'GET',
                url: `${this.url}${id}/`
            })
                .then(r => {
                    resolve(r);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    createItem(data) {
        return new Promise((resolve, reject) => {
            this.request({
                type: 'POST',
                url: this.url,
                data
            })
                .then(r => {
                    resolve(r);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    updateItem(id, data) {
        return new Promise((resolve, reject) => {
            this.request({
                type: 'PUT',
                url: `${this.url}${id}/`,
                data
            })
                .then(r => {
                    resolve(r);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    removeItem(id: number) {
        return new Promise((resolve, reject) => {
            this.request({
                type: 'DELETE',
                url: `${this.url}${id}/`
            })
                .then(r => {
                    resolve(r);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}

export default BaseModel;
