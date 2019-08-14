import * as mongoose from "mongoose";

mongoose
    .connect(
        process.env.MONGODB_URI ? (process.env.MONGODB_URI as string) : "",
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    )
    .then(() => console.log("MDB connected"))
    .catch(err => console.log(err));

export * from "./yup-schemas/driverProfileUpdate";
export * from "./yup-schemas/errorMessages";
export * from "./constants";
export * from "./token";
export * from "./class/driver.search";
