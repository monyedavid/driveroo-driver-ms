"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yup = require("yup");
var errorMessages_1 = require("./errorMessages");
exports.registerPasswordValidation = yup
    .string()
    .min(3, errorMessages_1.passwordNotLongEnough)
    .max(255)
    .required();
exports.validationSchema = yup.object().shape({
    email: yup
        .string()
        .min(3, errorMessages_1.emailNotLongEnough)
        .max(255)
        .email(errorMessages_1.invalidEmail)
        .required(),
    password: exports.registerPasswordValidation
});
//# sourceMappingURL=user.js.map