import "reflect-metadata";
import "dotenv/config";
import * as session from "express-session";
import * as connectRedis from "connect-redis";
import { GraphQLServer } from "graphql-yoga";
import { genschema } from "./utils/generateSchema";
import { pubsub } from "@driveroo/sockets";
import { redis } from "./cache";
import { redisessionprefix } from "@driveroo/utils";

const port = process.env.PORT || 4100;

const RedisStore = connectRedis(session);
const sessionSecret = process.env.SESSION_SECRET as string;
const inProd = process.env.NODE_ENV === "production";

export const startServer = async () => {
    // Graphql Server
    const schema = genschema();
    const server = new GraphQLServer({
        schema,
        context: ({ request }) => ({
            url: request ? request.protocol + "://" + request.get("host") : "",
            token: request ? request.get("Authorization") : "",
            req: request,
            pubsub
        })
    });

    // session redis config
    // session redis config
    server.express.set("trust proxy", 1); // trust first proxy
    server.express.use(
        session({
            store: new RedisStore({
                client: redis as any,
                prefix: redisessionprefix
            }),
            name: "DRIVERBOT",
            secret: sessionSecret,
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: !inProd,
                maxAge: 1000 * 60 * 60 * 24 * 7,
                secure: false
            }
        })
    );

    const app = await server.start({
        cors: {
            credentials: true,
            origin: [
                process.env.UI_URL_DEV,
                process.env.UI_URL,
                process.env.AUTH_MS
            ]
        },
        port
    });
    console.log(`Server is running on localhost:${port}`);
    return app;
};
