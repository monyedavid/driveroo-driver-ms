"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMiddleWare = function (middlewareFunc, resolverFunc) { return function (parent, args, context, info) {
    return middlewareFunc(resolverFunc, parent, args, context, info);
}; };
//# sourceMappingURL=createMiddleWare.js.map