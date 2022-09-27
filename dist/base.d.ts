declare type Config = {
    apiKey: string;
    baseUrl?: string;
};
export declare abstract class Base {
    private apiKey;
    private baseUrl;
    constructor(config: Config);
    protected getRequest<T>(endpoint: string, options?: any): Promise<T>;
    protected postRequest<T>(endpoint: string, options?: any): Promise<T>;
}
export {};
