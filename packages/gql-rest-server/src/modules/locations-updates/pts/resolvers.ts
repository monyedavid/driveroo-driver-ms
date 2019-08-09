import { ResolverMap } from "../../../types/graphql-utile";
import { SOMETHING_CHANGED_TOPIC } from "@driveroo/utils";

export const resolvers: ResolverMap = {
    Query: {
        driverProfileLocationUpdates: (_, __, { pubsub }) =>
            "update Driver Location"
    }
};
