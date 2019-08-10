interface User {
    _id: string;
    userfullname: string;
    mobile: string;
    model: string;
}

export interface Context {
    url: string;
    req: Express.Request;
    token: string;
    pubsub: any;
    loggedIn?: boolean;
    user?: User;
    mssg?: string;
}

export type Resolver = (
    parent: any,
    args: any,
    context: Context,
    info: any
) => any;

export type GRAQPHQLmiddlewareFunc = (
    resolver: Resolver,
    parent: any,
    args: any,
    context: Context,
    info: any
) => any;

export interface ResolverMap {
    [key: string]: {
        [key: string]: Resolver;
    };
}

export interface SubscriptionsResolverMaps {
    [key: string]: {
        [key: string]: {
            [key: string]: Resolver;
        };
    };
}
