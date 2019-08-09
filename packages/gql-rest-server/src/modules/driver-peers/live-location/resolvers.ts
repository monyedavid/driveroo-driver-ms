import { SubscriptionsResolverMaps } from "../../../types/graphql-utile";
import { LIVE_GEO } from "@driveroo/utils";

export const resolvers: SubscriptionsResolverMaps = {
    Subscription: {
        driverLiveGeo: {
            subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(LIVE_GEO)
        }
    }
};
