import { ResolverMap } from "../../../types/graphql-utile";
import { SOMETHING_CHANGED_TOPIC } from "@driveroo/utils";

export const resolvers: ResolverMap = {
    Query: {
        bye: (_, __, { token, pubsub }) => {
            pubsub.publish(SOMETHING_CHANGED_TOPIC, {
                somethingChanged: { id: "bye" }
            });
            console.log(token);
            return "Good Bye World!";
        }
    }
};
