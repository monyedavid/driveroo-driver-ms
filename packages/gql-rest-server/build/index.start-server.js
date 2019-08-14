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
require("reflect-metadata");
require("dotenv/config");
var session = require("express-session");
var connectRedis = require("connect-redis");
var graphql_yoga_1 = require("graphql-yoga");
var generateSchema_1 = require("./utils/generateSchema");
var sockets_1 = require("@driveroo/sockets");
var cache_1 = require("./cache");
var utils_1 = require("@driveroo/utils");
var port = process.env.PORT || 4100;
var RedisStore = connectRedis(session);
var sessionSecret = process.env.SESSION_SECRET;
var inProd = process.env.NODE_ENV === "production";
exports.startServer = function () { return __awaiter(_this, void 0, void 0, function () {
    var schema, server, app;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                schema = generateSchema_1.genschema();
                server = new graphql_yoga_1.GraphQLServer({
                    schema: schema,
                    context: function (_a) {
                        var request = _a.request;
                        return ({
                            url: request ? request.protocol + "://" + request.get("host") : "",
                            token: request ? request.get("Authorization") : "",
                            req: request,
                            pubsub: sockets_1.pubsub
                        });
                    }
                });
                // session redis config
                // session redis config
                server.express.set("trust proxy", 1); // trust first proxy
                server.express.use(session({
                    store: new RedisStore({
                        client: cache_1.redis,
                        prefix: utils_1.redisessionprefix
                    }),
                    name: "DRIVERBOT",
                    secret: sessionSecret,
                    resave: false,
                    saveUninitialized: false,
                    cookie: {
                        httpOnly: !inProd,
                        maxAge: 1000 * 60 * 60 * 24 * 7,
                        secure: false
                    }
                }));
                return [4 /*yield*/, server.start({
                        cors: {
                            credentials: true,
                            origin: [
                                process.env.UI_URL_DEV,
                                process.env.UI_URL,
                                process.env.AUTH_MS
                            ]
                        },
                        port: port
                    })];
            case 1:
                app = _a.sent();
                console.log("Server is running on localhost:" + port);
                return [2 /*return*/, app];
        }
    });
}); };
//# sourceMappingURL=index.start-server.js.map