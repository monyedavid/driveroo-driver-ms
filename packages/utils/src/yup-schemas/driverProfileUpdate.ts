import * as yup from "yup";

const locationSchema = yup.object().shape({
    address: yup.string(),
    landmark: yup.string(),
    city: yup.string(),
    state: yup.string()
});

const bank_ = yup.object().shape({
    account_number: yup.string(),
    account_name: yup.string(),
    name: yup.string()
});

export const driverUpdateschema = yup.object().shape({
    dob: yup.string(),
    mothers_maiden_name: yup.string(),
    primary_location: locationSchema,
    secondary_location: locationSchema,
    tertiary_location: locationSchema,
    bank_bvn: yup
        .string()
        .min(11)
        .max(11),
    bank_: yup.array(bank_)
});

export const driverUpdateBvn = yup.object().shape({
    bank_bvn: yup
        .string()
        .min(11)
        .max(11)
});

export const LiveLocationSchema = yup.object().shape({
    long: yup.string(),
    lat: yup.string()
});

export const updatePSTLocationSchema = yup.object().shape({
    primary_location: locationSchema,
    secondary_location: locationSchema,
    tertiary_location: locationSchema
});

export const reviewDriverSchema = yup.object().shape({
    userId: yup.string(),
    rate: yup.string(),
    message: yup.string()
});

export const includeBanks = yup.object().shape({ bank_: yup.array(bank_) });
