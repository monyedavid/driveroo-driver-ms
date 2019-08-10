import { ResolverMap } from "../../types/graphql-utile";

export const resolvers: ResolverMap = {
    Driver: {
        __resolveType: obj => {
            if (obj.current_location) {
                return "LiveDriver";
            }

            return "PtsDriver";
        }
    }
};
