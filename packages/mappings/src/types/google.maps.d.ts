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
}
