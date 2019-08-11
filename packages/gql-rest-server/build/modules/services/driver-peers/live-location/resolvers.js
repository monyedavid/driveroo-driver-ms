"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { LIVE_GEO } from "@driveroo/utils";
exports.resolvers = {
    Subscription: {
        driverLiveGeo: {
            subscribe: function (_, __, _a) {
                var pubsub = _a.pubsub;
                return pubsub.asyncIterator("LIVE_GEO");
            }
        }
    }
};
//# sourceMappingURL=resolvers.js.map