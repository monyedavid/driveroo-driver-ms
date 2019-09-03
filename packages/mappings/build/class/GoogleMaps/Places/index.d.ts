export declare class googleMaps_Places {
    url: string;
    options: {
        json: boolean;
    };
    key: string;
    constructor();
    private urlConstructor;
    /**
     * name
     */
    _search(): Promise<void>;
    /**
     * name
     */
    _details(): Promise<void>;
    /**
     * name
     */
    _nearbySearch(): Promise<void>;
    /**
     * name
     */
    _photos(): Promise<void>;
    /**
     * name
     */
    _autoComplete(): Promise<void>;
}
