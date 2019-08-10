import * as rp from "request-promise";

export class Bank {
    url?: string;
    options: {
        headers?: {
            [key: string]: string;
        };
        json: boolean;
    };
    constructor(url?: string) {
        this.url = url;

        this.options = {
            headers: {
                Authorization: `Bearer ${process.env.PAY_STACK_SECRET}`
            },
            json: true
        };
    }

    async _paystack(methodman: BANK.methodman, body: any, urlP?: string) {
        if (methodman === "get") {
            return await rp.get(urlP ? urlP : this.url, { ...this.options });
        }

        if (methodman === "post") {
            return await rp.post(urlP ? urlP : this.url, {
                ...this.options,
                body
            });
        }
    }

    async _resolveBvn(bvn: string) {
        let rd: PAYSTACK._bvnResolved;
        const url = (process.env.PAY_STACK_RBVN as string) + `/${bvn}`;
        try {
            rd = await this._paystack("get", "", url);
        } catch (error) {
            return { status: false };
        }

        return { ...rd };
    }
    s;
}
