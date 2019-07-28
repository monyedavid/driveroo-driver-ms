"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = function (req, res, next) {
    res.status(404);
    var error = new Error("\uD83D\uDD0D - Not Found - " + req.originalUrl);
    next(error);
};
/* eslint-disable no-unused-vars */
exports.errorHandler = function (err, req, res, next) {
    /* eslint-enable no-unused-vars */
    var statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack
    });
};
//# sourceMappingURL=app.middleware.js.map