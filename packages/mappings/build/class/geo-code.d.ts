export declare class heremaps_Geocode {
    url: string;
    options: {
        headers?: {
            [key: string]: string;
        };
        json: boolean;
    };
    appId: string;
    appCode: string;
    constructor();
    private urlConstructor;
    /**
     * gc_Partial_Address
     */
    gc_Partial_Address(params: HereMaps.gcpa): Promise<{
        ok: boolean;
        result: HereMaps._results;
    } | {
        ok: boolean;
        result?: undefined;
    }>;
    /**
     * gc_ff_Address
     */
    gc_ff_Address(freeForm: HereMaps.gffa): void;
}
