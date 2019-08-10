"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var bank_security_1 = require("./bank.security");
var driverProfileUpdate_1 = require("../yup-schemas/driverProfileUpdate");
var formatYupError_1 = require("../formatters/formatYupError");
var Drivers_1 = require("../models/Drivers");
var DriverProfile = /** @class */ (function () {
    function DriverProfile(url) {
        this.url = url;
    }
    DriverProfile.prototype.firstUpdate = function (params, session) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1, bvnVerfication, updateData, user, updatedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, driverProfileUpdate_1.driverUpdateschema.validate(params, {
                                abortEarly: false
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, formatYupError_1.formatYupError(error_1)];
                    case 3: return [4 /*yield*/, new bank_security_1.Bank()._resolveBvn(params.bank_bvn)];
                    case 4:
                        bvnVerfication = _a.sent();
                        if (!bvnVerfication.status) return [3 /*break*/, 8];
                        updateData = __assign({ bank_: "" }, params, { resolved_bvn_data: __assign({}, bvnVerfication.data) });
                        return [4 /*yield*/, Drivers_1.DriverModel.findOne({
                                _id: session.userId
                            })];
                    case 5:
                        user = _a.sent();
                        if (!(user && user.active)) return [3 /*break*/, 7];
                        return [4 /*yield*/, Drivers_1.DriverModel.findOneAndUpdate({ _id: session.userId }, { $set: updateData }, { new: true })];
                    case 6:
                        updatedUser = _a.sent();
                        return [2 /*return*/, [
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
                            ]];
                    case 7: return [3 /*break*/, 9];
                    case 8: return [2 /*return*/, [
                            {
                                path: "Bank Verification",
                                message: "BVN verification failed :REASON: " + bvnVerfication.message
                            }
                        ]];
                    case 9: return [2 /*return*/, [
                            {
                                path: "User",
                                message: "This Profile has been de-activated or does not exist, contact an adminstrator for support"
                            }
                        ]];
                }
            });
        });
    };
    return DriverProfile;
}());
exports.DriverProfile = DriverProfile;
//# sourceMappingURL=driver.class.js.map