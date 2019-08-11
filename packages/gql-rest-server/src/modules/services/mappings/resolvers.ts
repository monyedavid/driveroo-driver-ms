import { ResolverMap } from "../../../types/graphql-utile";
import tokenMiddleware from "../../middleware/auth.token";
import { createMiddleWare } from "../../../utils/createMiddleWare";
import { heremaps_Geocode, heremaps_formatter } from "@driveroo/heremaps";

export const resolvers: ResolverMap = {
    Query: {
        generateCo_ordinates: createMiddleWare(
            tokenMiddleware,
            async (
                _,
                { partial_address }: GQL.IGenerateCoOrdinatesOnQueryArguments,
                context
            ) => {
                const displayLocatons = await new heremaps_formatter()._format(
                    await new heremaps_Geocode().gc_Partial_Address(
                        partial_address
                    )
                );

                return context.mssg ? context.mssg : "meh";
            }
        )
    }
};
