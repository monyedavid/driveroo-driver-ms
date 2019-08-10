import { Bank } from "./bank.security";
import { driverUpdateschema } from "../yup-schemas/driverProfileUpdate";
import { formatYupError } from "../formatters/formatYupError";
import { DriverModel } from "../models/Drivers";

export class DriverProfile {
    url?: string;
    constructor(url?: string) {
        this.url = url;
    }

    public async updateBvn(bvn: string) {}

    public async updateLiveLocation(bvn: string) {}

    public async updatePSTLocation() {}

    public async reviewDriver() {}
}
