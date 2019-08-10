import { Bank } from "./bank.security";
import { driverUpdateschema } from "../yup-schemas/driverProfileUpdate";
import { formatYupError } from "../formatters/formatYupError";
import { DriverModel } from "../models/Drivers";

export class DriverProfile {
    url?: string;
    constructor(url?: string) {
        this.url = url;
    }

    async firstUpdate(params: DRIVER.IUpDriverParams, session: any) {
        // do the data validation
        try {
            await driverUpdateschema.validate(params, {
                abortEarly: false
            });
        } catch (error) {
            return formatYupError(error);
        }

        const bvnVerfication: any = await new Bank()._resolveBvn(
            params.bank_bvn
        );

        if (bvnVerfication.status) {
            const updateData = {
                bank_: "",
                ...params,
                resolved_bvn_data: {
                    ...bvnVerfication.data
                }
            };

            const user: any = await DriverModel.findOne({
                _id: session.userId
            });
            if (user && user.active) {
                const updatedUser: any = await DriverModel.findOneAndUpdate(
                    { _id: session.userId },
                    { $set: updateData },
                    { new: true }
                );

                return [
                    {
                        active: updatedUser.active,
                        firstName: updatedUser.firstName,
                        lastName: updatedUser.lastName,
                        mobile: updatedUser.mobile,
                        email: updatedUser.email,
                        avatar: updatedUser.avatar,
                        dob: updatedUser.dob,
                        mothers_maiden_name: updatedUser.mothers_maiden_name,
                        primary_location: updatedUser.primary_location,
                        secondary_location: updatedUser.secondary_location,
                        tertiary_location: updatedUser.tertiary_location,
                        bvn: updatedUser.bank_bvn
                    }
                ];
            }
        } else {
            return [
                {
                    path: "Bank Verification",
                    message: `BVN verification failed :REASON: ${
                        bvnVerfication.message
                    }`
                }
            ];
        }

        return [
            {
                path: "User",
                message:
                    "This Profile has been de-activated or does not exist, contact an adminstrator for support"
            }
        ];
    }
}
