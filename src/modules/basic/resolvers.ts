import { ResolverMap } from "../../types/graphql-utile";

export const resolvers: ResolverMap = {
    Query: {
        bye: () => "Good Bye World!"
    }
};
