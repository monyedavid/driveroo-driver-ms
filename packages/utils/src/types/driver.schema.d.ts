declare namespace DRIVER {
    interface IUpDriverParamsLocation {
        address: string;
        landmark: string;
        city: string;
        state: string;
    }

    interface IUpDriverParams {
        dob: string;
        mothers_maiden_name: string;
        primary_location: IUpDriverParamsLocation;
        secondary_location: IUpDriverParamsLocation;
        tertiary_location: IUpDriverParamsLocation;
        bank_bvn: string;
        bank_slug: string;
        bank_account_number: string;
        bank_firstname: string;
        bank_middlename: string;
        bank_lastname: string;
    }
}
