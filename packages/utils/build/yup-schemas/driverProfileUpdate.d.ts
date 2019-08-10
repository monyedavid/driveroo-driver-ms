import * as yup from "yup";
export declare const driverUpdateschema: yup.ObjectSchema<yup.Shape<object, {
    dob: string;
    mothers_maiden_name: string;
    primary_location: yup.Shape<object, {
        address: any;
        landmark: any;
        city: any;
        state: any;
    }>;
    secondary_location: yup.Shape<object, {
        address: any;
        landmark: any;
        city: any;
        state: any;
    }>;
    tertiary_location: yup.Shape<object, {
        address: any;
        landmark: any;
        city: any;
        state: any;
    }>;
    bank_bvn: string;
    bank_account_number: string;
    bank_code: string;
    bank_firstname: string;
    bank_middletname: string;
    bank_lastname: string;
}>>;
export declare const driverUpdateBvn: yup.ObjectSchema<yup.Shape<object, {
    bank_bvn: string;
}>>;
export declare const LiveLocationSchema: yup.ObjectSchema<yup.Shape<object, {
    long: string;
    lat: string;
}>>;
export declare const updatePSTLocationSchema: yup.ObjectSchema<yup.Shape<object, {
    primary_location: yup.Shape<object, {
        address: any;
        landmark: any;
        city: any;
        state: any;
    }>;
    secondary_location: yup.Shape<object, {
        address: any;
        landmark: any;
        city: any;
        state: any;
    }>;
    tertiary_location: yup.Shape<object, {
        address: any;
        landmark: any;
        city: any;
        state: any;
    }>;
}>>;
export declare const reviewDriverSchema: yup.ObjectSchema<yup.Shape<object, {
    userId: string;
    rate: string;
    message: string;
}>>;
