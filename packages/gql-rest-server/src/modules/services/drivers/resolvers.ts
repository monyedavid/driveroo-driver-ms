import { ResolverMap } from "../../../types/graphql-utile";
import tokenMiddleware from "../../middleware/auth.token";
import { createMiddleWare } from "../../../utils/createMiddleWare";
import { DriverSearch } from "@driveroo/utils";

export const resolvers: ResolverMap = {
    Query: {
        findAllDrivers: createMiddleWare(
            tokenMiddleware,
            async (_, __, { req, loggedIn, mssg }) => {
                if (!loggedIn) return [{ path: "Auth", message: mssg }];
                return await new DriverSearch().read();
            }
        )
    }
};
