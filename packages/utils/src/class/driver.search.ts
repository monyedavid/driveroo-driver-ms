import { DriverModel } from "../models/Drivers";

export class DriverSearch {
    public async read(query?: any) {
        return await DriverModel.find({});
    }
}
