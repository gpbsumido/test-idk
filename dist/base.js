"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const axios_1 = __importDefault(require("axios"));
const index_1 = require("./index");
class Base {
    constructor(config) {
        this.apiKey = config.apiKey;
        switch (config.baseUrlOption) {
            case index_1.BaseURLOptions.LOCAL:
                this.baseUrl = 'http://localhost:3000';
                return;
            case index_1.BaseURLOptions.MAINNET:
                this.baseUrl = 'https://app.refmint.xyz';
                return;
            case index_1.BaseURLOptions.TESTNET:
            default:
                this.baseUrl = 'https://test.refmint.xyz';
                return;
        }
    }
    getRequest(endpoint, options) {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            "Content-Type": "application/json",
            "x-api-key": this.apiKey,
        };
        const config = {
            params: options,
            headers: headers,
        };
        return new Promise((resolve, reject) => {
            axios_1.default
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
            axios_1.default
                .post(`${url}`, options, config)
                .then((resp) => {
                resolve(resp.data);
            })
                .catch(reject);
        });
    }
}
exports.Base = Base;
