import { ResolverMap } from "../../../types/graphql-utile";
import tokenMiddleware from "../../middleware/auth.token";
import { createMiddleWare } from "../../../utils/createMiddleWare";
import { heremaps_Geocode, heremaps_formatter } from "@driveroo/heremaps";

export const resolvers: ResolverMap = {
    Query: {
        generateCo_ordinates: createMiddleWare(tokenMiddleware, async (
            _,
            { partial_address, avergaes, ffa, ff_addreess }, // : GQL.IGenerateCoOrdinatesOnQueryArguments,
            { req, loggedIn, mssg }
        ) => {
            if (!loggedIn) return [{ path: "Auth", message: mssg }];

            if (ffa) {
                new heremaps_Geocode().gc_ff_Address(ff_addreess.fft);
                return [{ path: "ffa", message: "uncomplete designs" }];
            }

            const co_ordinates = await new heremaps_Geocode().gc_Partial_Address(
                partial_address
            );

            if (avergaes) {
                return await new heremaps_formatter()._format(
                    co_ordinates.result,
                    true
                );
            }

            return await new heremaps_formatter()._format(co_ordinates.result);
        })
    }
};
