import { BaseURLOptions } from "./index";
declare type Config = {
    apiKey: string;
    baseUrlOption?: BaseURLOptions;
};
export declare abstract class Base {
    private apiKey;
    private baseUrl;
    constructor(config: Config);
    protected getRequest<T>(endpoint: string, options?: any): Promise<T>;
    protected postRequest<T>(endpoint: string, options?: any): Promise<T>;
}
export {};
