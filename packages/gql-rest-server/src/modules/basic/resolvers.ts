import { ResolverMap } from "../../types/graphql-utile";
import { SOMETHING_CHANGED_TOPIC } from "@driveroo/utils";

export const resolvers: ResolverMap = {
    Query: {
        bye: (_, __, { pubsub }) => {
            pubsub.publish(SOMETHING_CHANGED_TOPIC, {
                somethingChanged: { id: "bye" }
            });
            return "Good Bye World!";
        }
    }
};
