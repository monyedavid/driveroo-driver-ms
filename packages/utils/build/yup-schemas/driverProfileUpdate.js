"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yup = require("yup");
var locationSchema = yup.object().shape({
    address: yup.string(),
    landmark: yup.string(),
    city: yup.string(),
    state: yup.string()
});
var bank_ = yup.object().shape({
    account_number: yup.string(),
    account_name: yup.string(),
    name: yup.string()
});
exports.driverUpdateschema = yup.object().shape({
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
exports.driverUpdateBvn = yup.object().shape({
    bank_bvn: yup
        .string()
        .min(11)
        .max(11)
});
exports.LiveLocationSchema = yup.object().shape({
    long: yup.string(),
    lat: yup.string()
});
exports.updatePSTLocationSchema = yup.object().shape({
    primary_location: locationSchema,
    secondary_location: locationSchema,
    tertiary_location: locationSchema
});
exports.reviewDriverSchema = yup.object().shape({
    userId: yup.string(),
    rate: yup.string(),
    message: yup.string()
});
exports.includeBanks = yup.object().shape({ bank_: yup.array(bank_) });
//# sourceMappingURL=driverProfileUpdate.js.map