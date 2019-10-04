import Model from './Model';
import config from '../config';

class AuthModel extends Model {
    facebookAuth(token: string) {
        return new Promise((resolve, reject) => {
            this.request({
                type: 'POST',
                url: config.paths.facebookSignIn,
                data: {
                    token
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

    auth() {
        return new Promise((resolve, reject) => {
            this.request({
                type: 'GET',
                url: config.paths.auth
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

export default AuthModel;
