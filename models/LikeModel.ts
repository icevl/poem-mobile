import Model from './Model';
import config from '../config';

class LikeModel extends Model {
    like(type: string, id: number) {
        return new Promise((resolve, reject) => {
            this.request({
                type: 'POST',
                url: config.paths.likes,
                data: {
                    id,
                    type
                }
            })
                .then(r => {
                    resolve(r);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    unLike(type: string, id: number) {
        return new Promise((resolve, reject) => {
            this.request({
                type: 'DELETE',
                url: `${config.paths.likes}${type}/${id}`
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

export default LikeModel;
