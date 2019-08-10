export declare class Bank {
    url?: string;
    options: {
        headers?: {
            [key: string]: string;
        };
        json: boolean;
    };
    constructor(url?: string);
    _paystack(methodman: BANK.methodman, body: any, urlP?: string): Promise<any>;
    _resolveBvn(bvn: string): Promise<{
        status: boolean;
    } | {
        status: boolean;
        message: string;
        data: PAYSTACK._bvnResolved_data;
        meta: any;
    }>;
    s: any;
}
