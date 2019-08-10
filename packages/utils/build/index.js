"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
mongoose
    .connect(process.env.MONGODB_URI ? process.env.MONGODB_URI : "", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(function () { return console.log("MDB connected"); })
    .catch(function (err) { return console.log(err); });
__export(require("./yup-schemas/driverProfileUpdate"));
__export(require("./yup-schemas/errorMessages"));
__export(require("./constants"));
//# sourceMappingURL=index.js.map