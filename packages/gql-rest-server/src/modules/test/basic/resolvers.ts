import { ResolverMap } from "../../../types/graphql-utile";
import { SOMETHING_CHANGED_TOPIC } from "@driveroo/utils";
import tokenMiddleware from "../../middleware/auth.token";
import { createMiddleWare } from "../../../utils/createMiddleWare";
// pubsub.publish(SOMETHING_CHANGED_TOPIC, {
//     somethingChanged: { id: "bye" }
// });

export const resolvers: ResolverMap = {
    Query: {
        bye: createMiddleWare(tokenMiddleware, async (_, __, context) => {
            console.log(context.loggedIn);
            return context.mssg ? context.mssg : "meh";
        })
    }
};
