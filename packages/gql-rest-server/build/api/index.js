"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var helmet = require("helmet");
var bp = require("body-parser");
var app_middleware_1 = require("../app/app.middleware");
var router = express.Router();
router.use(morgan("dev"));
router.use(helmet());
router.use(bp.urlencoded({ extended: false }));
router.use(bp.json());
router.get("/", function (req, res) {
    res.json({
        message: "API - 👋🌎🌍🌏"
    });
});
router.use(app_middleware_1.notFound);
router.use(app_middleware_1.errorHandler);
exports.default = router;
//# sourceMappingURL=index.js.map