import * as rp from "request-promise";

export class heremaps_Geocode {
    url: string;
    options: {
        headers?: {
            [key: string]: string;
        };
        json: boolean;
    };
    appId: string;
    appCode: string;
    constructor() {
        this.url = process.env.HERE_MAP_BASE_URL as string;
        this.options = {
            json: true
        };
        this.appId = process.env.HERE_MAPS_app_id as string;
        this.appCode = process.env.HERE_MAPS_app_code as string;
    }

    private urlConstructor(
        params: HereMaps.gcpa,
        model: HereMaps.geocode_models
    ) {
        if (model === "pa") {
            return `${this.url}?app_id=${this.appId}&app_code=${
                this.appCode
            }&country=${params.country}&housenumber=${
                params.housenumber
            }&city=${params.city}&street=${params.street}`;
        }

        if (model === "ffa") {
            const searchtext = params.fft.trim().replace(" ", "%20");
            return `${this.url}?app_id=${this.appId}&app_code=${
                this.appCode
            }&searchtext=${searchtext}`;
        }
    }

    /**
     * gc_Partial_Address
     */
    public async gc_Partial_Address(params: HereMaps.gcpa) {
        const uri = this.urlConstructor(params, "pa");
        let result: HereMaps._results = await rp.get(uri);

        try {
            return { ok: true, result };
        } catch (error) {
            return { ok: false };
        }
    }

    /**
     * gc_ff_Address
     */
    public async gc_ff_Address(freeForm: HereMaps.gffa) {
        const uri = this.urlConstructor({ fft: freeForm }, "ffa");
        let result: HereMaps._results = await rp.get(uri);

        try {
            return { ok: true, result };
        } catch (error) {
            return { ok: false };
        }
    }
}
