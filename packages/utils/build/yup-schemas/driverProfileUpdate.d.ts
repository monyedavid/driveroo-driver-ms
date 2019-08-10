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
    bank_: yup.Shape<object, {
        account_number: any;
        account_name: any;
        name: any;
    }>[];
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
export declare const includeBanks: yup.ObjectSchema<yup.Shape<object, {
    bank_: yup.Shape<object, {
        account_number: any;
        account_name: any;
        name: any;
    }>[];
}>>;
