"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = {
    Driver: {
        __resolveType: function (obj) {
            if (obj.current_location) {
                return "LiveDriver";
            }
            return "PtsDriver";
        }
    },
    gco_response_union: {
        __resolveType: function (obj) {
            if (obj.path)
                return "Error";
            return "gco_response";
        }
    }
};
//# sourceMappingURL=resolvers.js.map