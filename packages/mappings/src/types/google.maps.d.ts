declare namespace GoogleMaps {
    type places_types =
        | "auto_complete"
        | "photos"
        | "nearby_search"
        | "search"
        | "details";

    type subStrings = { length: string; offset: string };

    type auto_Complete_Params_predictions = {
        description: string;
        id: string;
        matched_substrings: [subStrings];
        place_id: string;
        reference: string;
        structured_formatting: {
            main_text: string;
            main_text_matched_substrings: [subStrings];
            secondary_text: string;
        };
        terms: [{ offset: number; value: string }];
        types: [string];
    };

    interface auto_Complete_Params {
        predictions: [auto_Complete_Params_predictions];
        status: string;
    }

    type lat_long = {
        lat: number;
        lng: number;
    };

    interface place_details_Params_result {
        address_components: [
            { long_name: string; short_name: string; types: [string] }
        ];
        adr_address: string;
        geometry: {
            location: lat_long;
            viewport: { northeast: lat_long; southwest: lat_long };
        };
        icon: string;
        id: string;
        name: string;
        photos: [
            {
                height: number;
                html_attributions: [string];
                photo_reference: string;
                width: number;
            }
        ];
        reference: string;
        scope: string;
        types: [string];
        url: string;
        utc_offset: number;
        vicinity: string;
    }

    interface place_details_Params {
        html_attributions: [any];
        result: place_details_Params_result;
        status: string;
    }

    interface place_Search {
        candidates: [
            {
                place_id: string;
            }
        ];
        status: string;
    }

    interface place_nearby_Search {
        error_message: string;
        html_attributions: [];
        results: [];
        status: string;
    }
}
