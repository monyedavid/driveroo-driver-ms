"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatYupError = function (err) {
    var errors = [];
    err.inner.forEach(function (e) {
        errors.push({
            path: e.path,
            message: e.message
        });
    });
    return errors;
};
//# sourceMappingURL=formatYupError.js.map