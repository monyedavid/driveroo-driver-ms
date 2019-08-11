"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { PTS_GEO } from "@driveroo/utils";
exports.resolvers = {
    Subscription: {
        driverDefaultGeo: {
            subscribe: function (_, __, _a) {
                var pubsub = _a.pubsub;
                return pubsub.asyncIterator("PTS_GEO");
            }
        }
    }
};
//# sourceMappingURL=resolvers.js.map