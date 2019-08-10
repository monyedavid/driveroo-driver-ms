"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var DriverReview = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "EmplyeeUsers"
    }
});
// Create Schema
var DriverSchema = new Schema({
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
    bank_bvn: {
        type: String
    },
    bank_: {
        type: String
    },
    bank_slug: {
        type: String
    },
    bank_account_number: {
        type: String
    },
    bank_code: {
        type: String
    },
    bank_firstname: {
        type: String
    },
    bank_middletname: {
        type: String
    },
    bank_lastname: {
        type: String
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
}, { timestamps: true });
exports.DriverModel = mongoose.model("DriverUsers", DriverSchema);
//# sourceMappingURL=Drivers.js.map