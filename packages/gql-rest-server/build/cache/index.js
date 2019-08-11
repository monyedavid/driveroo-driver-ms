"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Redis = require("ioredis");
// Redis Server
exports.redis = new Redis(process.env.REDIS_URL);
//# sourceMappingURL=index.js.map