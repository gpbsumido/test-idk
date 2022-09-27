import axios from "axios";
export class Base {
    constructor(config) {
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl || "http://localhost:3000";
    }
    getRequest(endpoint, options) {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            "Content-Type": "application/json",
            "x-api-key": this.apiKey,
        };
        const config = Object.assign(Object.assign({}, options), { headers });
        return new Promise((resolve, reject) => {
            axios
                .get(`${url}`, config)
                .then((resp) => {
                resolve(resp.data);
            })
                .catch(reject);
        });
    }
    postRequest(endpoint, options) {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            "Content-Type": "application/json",
            "x-api-key": this.apiKey,
        };
        const config = {
            headers,
        };
        return new Promise((resolve, reject) => {
            axios
                .post(`${url}`, options, config)
                .then((resp) => {
                resolve(resp.data);
            })
                .catch(reject);
        });
    }
}
