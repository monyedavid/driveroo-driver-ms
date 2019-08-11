export declare class heremaps_formatter {
    /**
     * _format   for geo code HereMaps._results
     */
    _format(heremapresults: any, avergae?: boolean): Promise<any[] | {
        co_ordinates: HereMaps.co_ordinates;
        address: HereMaps._Locations_Address_data;
    }>;
    /**
     * _format   for reverse geo code
     */
    format_(): Promise<void>;
}
