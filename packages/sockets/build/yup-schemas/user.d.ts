import * as yup from "yup";
export declare const registerPasswordValidation: yup.StringSchema;
export declare const validationSchema: yup.ObjectSchema<yup.Shape<{}, {
    email: string;
    password: string;
}>>;
