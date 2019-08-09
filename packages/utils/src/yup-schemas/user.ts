import * as yup from "yup";
import {
	emailNotLongEnough,
	invalidEmail,
	passwordNotLongEnough
} from "./errorMessages";

export const registerPasswordValidation = yup
	.string()
	.min(3, passwordNotLongEnough)
	.max(255)
	.required();

export const validationSchema = yup.object().shape({
	email: yup
		.string()
		.min(3, emailNotLongEnough)
		.max(255)
		.email(invalidEmail)
		.required(),
	password: registerPasswordValidation
});
