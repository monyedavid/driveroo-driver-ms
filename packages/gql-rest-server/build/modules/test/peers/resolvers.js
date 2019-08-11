"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@driveroo/utils");
exports.resolvers = {
    Subscription: {
        somethingChanged: {
            subscribe: function (_, __, _a) {
                var pubsub = _a.pubsub;
                return pubsub.asyncIterator(utils_1.SOMETHING_CHANGED_TOPIC);
            }
        }
    }
};
//# sourceMappingURL=resolvers.js.map