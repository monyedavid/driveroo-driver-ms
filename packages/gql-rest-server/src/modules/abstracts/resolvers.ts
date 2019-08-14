import { ResolverMap } from "../../types/graphql-utile";

export const resolvers: ResolverMap = {
    Driver: {
        __resolveType: obj => {
            if (obj.current_location) {
                return "LiveDriver";
            }

            return "PtsDriver";
        }
    },
    gco_response_union: {
        __resolveType: obj => {
            if (obj.path) return "Error";

            return "gco_response";
        }
    },
    findAllDrivers_Errors: {
        __resolveType: obj => {
            if (obj.path) return "Error";

            return "DriverResults";
        }
    }
};
