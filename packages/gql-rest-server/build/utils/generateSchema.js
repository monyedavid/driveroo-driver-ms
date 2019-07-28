"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var glob = require("glob");
var graphql_tools_1 = require("graphql-tools");
var merge_graphql_schemas_1 = require("merge-graphql-schemas");
exports.genschema = function () {
    var pathToModules = path.join(__dirname, "../modules");
    var graphqlTypes = glob // returns an array of all the graphql types in the project
        .sync(pathToModules + "/**/*.graphql")
        .map(function (x) { return fs.readFileSync(x, { encoding: "utf8" }); });
    var resolvers = glob // returns an array of all the resolvers in the project
        .sync(pathToModules + "/**/resolvers.?s")
        .map(function (resolver) { return require(resolver).resolvers; });
    return graphql_tools_1.makeExecutableSchema({
        typeDefs: merge_graphql_schemas_1.mergeTypes(graphqlTypes),
        resolvers: merge_graphql_schemas_1.mergeResolvers(resolvers)
    });
};
//# sourceMappingURL=generateSchema.js.map