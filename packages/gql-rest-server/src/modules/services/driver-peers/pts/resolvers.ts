import { SubscriptionsResolverMaps } from "../../../../types/graphql-utile";
// import { PTS_GEO } from "@driveroo/utils";

export const resolvers: SubscriptionsResolverMaps = {
    Subscription: {
        driverDefaultGeo: {
            subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("PTS_GEO")
        }
    }
};
