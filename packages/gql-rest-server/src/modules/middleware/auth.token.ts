import { Resolver } from "../../types/graphql-utile";
import { decodeRegToken } from "@driveroo/utils";
import { Context } from "graphql-yoga/dist/types";

export default async (
    resolver: Resolver,
    parent: any,
    args: any,
    context: any,
    info: any
) => {
    /**
     *  @func  decodeRegToken()
     *  @desc  Deocde and verify a micro-service registration token
     */
    let result: Resolver;
    const { invalid, decodedvalue } = await decodeRegToken(
        context.token.split(" ")[1]
    );

    if (!invalid && decodedvalue.exp < Date.now() / 1000) {
        // middleware
        result = await resolver(
            parent,
            args,
            // context,
            { ...context, loggedIn: true },
            info
        );
    }

    if (invalid) {
        // middleware
        result = await resolver(
            parent,
            args,
            // context,
            { ...context, loggedIn: false },
            info
        );
    }

    return result;
};
