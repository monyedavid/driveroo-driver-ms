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

    private urlConstructor(
        params: GoogleMaps.params,
        model: GoogleMaps.places_types
    ) {
        const baseURl = `${this.url}/place/${model}/json?key=${this.key}`;
        if (model === "autocomplete")
            return `${baseURl}&input=${params.input}&components=${params.components}&sessiontoken=${params.sessiontoken}`;

        if (model === "photo")
            return `${baseURl}maxwidth=${params.maxwidth}&photoreference=${params.photoreference}`;

        if (model === "findplacefromtext")
            return `${baseURl}&input=${params.input}&inputtype=${params.inputtype}`;

        if (model === "details") return `${baseURl}&placeid=${params.placeid}`;
    }

    /**
     * name
     */
    public async _nearbySearch() {
        try {
        } catch (error) {}
    }

    /**
     * DETAILS
     */
    public async _details(params: GoogleMaps.params) {
        const uri = this.urlConstructor(params, "details");
        let result: GoogleMaps.place_details_Params;
        try {
            result = JSON.parse(await rp.get(uri));
            return { ok: true, result };
        } catch (error) {
            return { ok: false };
        }
    }

    /**
     * name
     */
    public async _placeSearch(params: GoogleMaps.params) {
        const uri = this.urlConstructor(params, "findplacefromtext");
        let result: GoogleMaps.place_Search;
        try {
            result = JSON.parse(await rp.get(uri));
            return { ok: true, result };
        } catch (error) {
            return { ok: false };
        }
    }

    /**
     * name
     */
    public async _photos(params: GoogleMaps.params) {
        const uri = this.urlConstructor(params, "photo");
        try {
            return { ok: true, uri };
        } catch (error) {
            return { ok: false };
        }
    }

    /**
     * name
     */
    public async _autoComplete(params: GoogleMaps.params) {
        const uri = this.urlConstructor(params, "autocomplete");
        let result: GoogleMaps.auto_Complete_Params;
        try {
            result = JSON.parse(await rp.get(uri));
            return { ok: true, result };
        } catch (error) {
            return { ok: false };
        }
    }
}
