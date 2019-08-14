import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const DriverReview = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "EmplyeeUsers"
    },
    rate: {
        type: String
    },
    message: String
});

const bankDetailsSchema = new Schema({
    account_number: {
        type: String
    },
    account_name: {
        type: String
    },
    name: {
        type: String
    }
});

// Create Schema
const DriverSchema = new Schema(
    {
        active: {
            type: Boolean,
            required: true,
            default: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        mobile: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        confirmed: {
            type: Boolean,
            required: true,
            default: false
        },
        forgotPasswordLock: {
            type: Boolean,
            required: true,
            default: false
        },
        avatar: {
            type: String
        },
        dob: {
            type: String
        },
        mothers_maiden_name: {
            type: String
        },
        primary_location: {
            address: String,
            landmark: String,
            city: String,
            state: String,
            long: String,
            lat: String
        },
        secondary_location: {
            address: String,
            landmark: String,
            city: String,
            state: String,
            long: String,
            lat: String
        },
        tertiary_location: {
            address: String,
            landmark: String,
            city: String,
            state: String,
            long: String,
            lat: String
        },
        bank_: [bankDetailsSchema],
        bank_bvn: {
            type: String
        },
        processing: {
            type: Number,
            default: 0
        },
        resolved_bvn_data: {
            first_name: {
                type: String
            },
            last_name: {
                type: String
            },
            dob: {
                type: String
            },
            mobile: {
                type: String
            },
            bvn: { type: String }
        },
        driver_reviews: [DriverReview],
        driver_rating: {
            type: String
        },
        last_seen: {
            long: String,
            lat: String,
            timeStamp: String
        }
    },
    { timestamps: true }
);

export const DriverModel = mongoose.model("DriverUsers", DriverSchema);
