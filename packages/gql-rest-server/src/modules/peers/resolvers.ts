import { PubSub } from "graphql-subscriptions";

export const pubsub = new PubSub();
const SOMETHING_CHANGED_TOPIC = "something_changed";

export const resolvers: any = {
    Subscription: {
        somethingChanged: {
            subscribe: () => pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC)
        }
    }
};
