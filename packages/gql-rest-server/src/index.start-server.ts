import "reflect-metadata";
import "dotenv/config";
import { GraphQLServer } from "graphql-yoga";
import { genschema } from "./utils/generateSchema";
import { pubsub } from "@driveroo/sockets";

const port = process.env.PORT || 4000;
const ws_port = process.env.ws_port || 5000;

export const startServer = async () => {
    // Graphql Server
    const schema = genschema();
    const server = new GraphQLServer({
        schema,
        context: ({ request }) => ({
            url: request ? request.protocol + "://" + request.get("host") : "",
            req: request,
            pubsub
        })
    });

    const app = await server.start({
        port
    });
    console.log("Server is running on localhost:4000");
    return app;
};
