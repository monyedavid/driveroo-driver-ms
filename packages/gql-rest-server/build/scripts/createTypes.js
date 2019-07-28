"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var from_schema_1 = require("@gql2ts/from-schema");
var fs = require("fs");
var path = require("path");
var generateSchema_1 = require("../utils/generateSchema");
var typescriptTypes = from_schema_1.generateNamespace("GQL", generateSchema_1.genschema());
fs.writeFile(path.join(__dirname, "../types/schema.d.ts"), typescriptTypes, function (err) { return console.log(err); });
//# sourceMappingURL=createTypes.js.map