import { SubscriptionsResolverMaps } from "../../../types/graphql-utile";
import { SOMETHING_CHANGED_TOPIC } from "@driveroo/utils";

export const resolvers: SubscriptionsResolverMaps = {
    Subscription: {
        somethingChanged: {
            subscribe: (_, __, { pubsub }) =>
                pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC)
        }
    }
};
