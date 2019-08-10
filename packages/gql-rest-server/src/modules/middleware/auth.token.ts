import { Resolver } from "../../types/graphql-utile";

export default async (
    resolver: Resolver,
    parent: any,
    args: any,
    context: any,
    info: any
) => {
    console.log(context.token);

    // verify token
    // decode token
    // if expired reject request

    // middleware
    const result = await resolver(
        parent,
        args,
        // context,
        { ...context, loggedIn: true },
        info
    );
    // afterware

    return result;
};
