import { SubscriptionsResolverMaps } from "../../types/graphql-utile";

const SOMETHING_CHANGED_TOPIC = "something_changed";

export const resolvers: SubscriptionsResolverMaps = {
    Subscription: {
        somethingChanged: {
            subscribe: (_, __, { pubsub }) =>
                pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC)
        }
    }
};
