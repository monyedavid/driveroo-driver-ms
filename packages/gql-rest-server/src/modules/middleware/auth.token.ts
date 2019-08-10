import { Resolver } from "../../types/graphql-utile";
import { decodeRegToken } from "@driveroo/utils";

export default async (
    resolver: Resolver,
    parent: any,
    args: any,
    context: any,
    info: any
) => {
    if (context.token) {
        /**
         *  @func  decodeRegToken()
         *  @desc  Deocde and verify a micro-service registration token
         */
        const { invalid, decodedvalue } = await decodeRegToken(
            context.token.split(" ")[1]
        );

        if (!invalid) {
            if (decodedvalue.exp < Date.now() / 1000) {
                return await resolver(
                    parent,
                    args,
                    // context,
                    {
                        ...context,
                        loggedIn: false,
                        mssg: "expired token signature detected"
                    },
                    info
                );
            }
            // middleware
            return await resolver(
                parent,
                args,
                // context,
                {
                    ...context,
                    loggedIn: true,
                    user: {
                        _id: decodedvalue._id,
                        userfullname: decodedvalue.userfullname,
                        mobile: decodedvalue.mobile,
                        model: decodedvalue.model
                    }
                },
                info
            );
        }

        if (invalid) {
            // middleware
            return await resolver(
                parent,
                args,
                // context,
                {
                    ...context,
                    loggedIn: false,
                    mssg: "invalid token signature detetcted"
                },
                info
            );
        }

        return await resolver(
            parent,
            args,
            // context,
            { ...context, loggedIn: false, mssg: "retry login" },
            info
        );
    }

    return await resolver(
        parent,
        args,
        // context,
        { ...context, loggedIn: false, mssg: "no token detected" },
        info
    );
};
