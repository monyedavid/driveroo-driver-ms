import { ResolverMap } from "../../../types/graphql-utile";
import tokenMiddleware from "../../middleware/auth.token";
import { createMiddleWare } from "../../../utils/createMiddleWare";

export const resolvers: ResolverMap = {
    Query: {
        generateCo_ordinates: createMiddleWare(
            tokenMiddleware,
            async (_, __, context) => {
                return context.mssg ? context.mssg : "meh";
            }
        )
    }
};
