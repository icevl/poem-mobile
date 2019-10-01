import Model from './Model';
//import config from '../apps/common/config';

class BaseModel extends Model {
    constructor(private url: string) {
        super();
    }

    getList(page: number, filters = {}) {
        //const offset = (page - 1) * config.listLimit;
        //let filtersStr = '';

        // if (Object.keys(filters).length) {
        //     for (let key in filters) {
        //         filtersStr += `&${key}=${filters[key]}`;
        //     }
        // }

        return new Promise((resolve, reject) => {
            this.request({
                type: 'GET',
                url: this.url
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

    updateItem(id, data) {
        return new Promise((resolve, reject) => {
            this.request({
                type: 'PATCH',
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
}

export default BaseModel;
