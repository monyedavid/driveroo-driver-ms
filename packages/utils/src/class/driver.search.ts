import { DriverModel } from "../models/Drivers";

export class DriverSearch {
    public async read({ query }) {
        if (query.id) {
            const doc = await DriverModel.findOne({
                _id: query.id
            });
            return [{ doc }];
        }

        const doc = await DriverModel.find({});

        return doc;
    }
}
