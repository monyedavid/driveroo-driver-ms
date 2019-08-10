import { ResolverMap } from "../../../../types/graphql-utile";

export const resolvers: ResolverMap = {
    Query: {
        driverProfileLocationUpdates: (_, __, { pubsub }) =>
            "update Driver Location"
    }
};
