"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = {
    Query: {
        driverProfileLocationUpdates: function (_, __, _a) {
            var pubsub = _a.pubsub;
            return "update Driver Location";
        }
    }
};
//# sourceMappingURL=resolvers.js.map