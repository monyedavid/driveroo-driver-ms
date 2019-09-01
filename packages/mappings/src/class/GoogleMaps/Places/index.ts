import * as rp from "request-promise";

export class googleMaps_Places {
    url: string;
    options: {
        json: boolean;
    };
    key: string;
    constructor() {
        this.url = process.env.GOOGLE_MAPS_PLACES_DEV as string;
        this.options = {
            json: true
        };
        this.key = process.env.google_MAps_key_DEV as string;
    }

    private urlConstructor(params: any, model: GoogleMaps.places_types) {}

    /**
     * name
     */
    public async _search() {
        try {
        } catch (error) {}
    }

    /**
     * name
     */
    public async _details() {
        try {
        } catch (error) {}
    }

    /**
     * name
     */
    public async _nearbySearch() {
        try {
        } catch (error) {}
    }

    /**
     * name
     */
    public async _photos() {
        try {
        } catch (error) {}
    }

    /**
     * name
     */
    public async _autoComplete() {
        try {
        } catch (error) {}
    }
}
