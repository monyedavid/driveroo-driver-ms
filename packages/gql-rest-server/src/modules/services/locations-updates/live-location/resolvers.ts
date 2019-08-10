import { ResolverMap } from "../../../../types/graphql-utile";

export const resolvers: ResolverMap = {
    Query: {
        driverLocationUpdates: (_, __, { pubsub }) => "update Driver Location"
    }
};
