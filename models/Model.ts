import axios from 'react-native-axios';
// import { AsyncStorage } from 'react-native';
import config from '../config';

export default class Model {
    request(params: any) {
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY5OTQxNTk4fQ.tzN0k0RaMgD3TOA2mdWzrSZLwJ3OP3muXMrsIQUqKWQ';

        // const token = await AsyncStorage.getItem('token');
        const method = params.type ? params.type.toUpperCase() : 'GET';

        const setup: any = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };

        if (token) {
            setup.Authorization = 'JWT ' + token;
        }

        return new Promise((resolve, reject) => {
            axios({
                method: method,
                url: config.API + params.url,
                data: params.data,
                headers: setup
            })
                .then(response => {
                    resolve(response.data);
                })
                .then(returnedValue => {
                    resolve(returnedValue);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}
