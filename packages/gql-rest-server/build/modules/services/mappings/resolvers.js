"use strict";
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var auth_token_1 = require("../../middleware/auth.token");
var createMiddleWare_1 = require("../../../utils/createMiddleWare");
var heremaps_1 = require("@driveroo/heremaps");
exports.resolvers = {
    Query: {
        generateCo_ordinates: createMiddleWare_1.createMiddleWare(auth_token_1.default, function (_, _a, _b) {
            var partial_address = _a.partial_address, avergaes = _a.avergaes, ffa = _a.ffa, ff_addreess = _a.ff_addreess;
            var req = _b.req, loggedIn = _b.loggedIn, mssg = _b.mssg;
            return __awaiter(_this, void 0, void 0, function () {
                var co_ordinates;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!loggedIn)
                                return [2 /*return*/, [{ path: "Auth", message: mssg }]];
                            if (ffa) {
                                new heremaps_1.heremaps_Geocode().gc_ff_Address(ff_addreess.fft);
                                return [2 /*return*/, [{ path: "ffa", message: "uncomplete designs" }]];
                            }
                            return [4 /*yield*/, new heremaps_1.heremaps_Geocode().gc_Partial_Address(partial_address)];
                        case 1:
                            co_ordinates = _c.sent();
                            if (!avergaes) return [3 /*break*/, 3];
                            return [4 /*yield*/, new heremaps_1.heremaps_formatter()._format(co_ordinates.result, true)];
                        case 2: return [2 /*return*/, _c.sent()];
                        case 3: return [4 /*yield*/, new heremaps_1.heremaps_formatter()._format(co_ordinates.result)];
                        case 4: return [2 /*return*/, _c.sent()];
                    }
                });
            });
        })
    }
};
//# sourceMappingURL=resolvers.js.map