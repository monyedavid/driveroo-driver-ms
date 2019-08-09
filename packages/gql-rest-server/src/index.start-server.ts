import "reflect-metadata";
import "dotenv/config";
import { createServer } from "http";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { execute, subscribe } from "graphql";

import { GraphQLServer } from "graphql-yoga";
import { genschema } from "./utils/generateSchema";

export const startServer = async () => {
    // Graphql Server
    const schema = genschema();
    const server = new GraphQLServer({
        schema,
        context: ({ request }) => ({
            url: request.protocol + "://" + request.get("host"),
            req: request
        })
    });

    const port = process.env.PORT || 4000;
    // tslint:disable-next-line:variable-name
    const ws_port = process.env.ws_port || 5000;

    const app = await server.start({
        port
    });

    console.log("Server is running on localhost:4000");

    const WebSocketServer = createServer((request, response) => {
        response.writeHead(404);
        response.end();
    });

    // Bind it to port and start listening
    WebSocketServer.listen(ws_port, () =>
        console.log(
            `Websocket Server is now running on http://localhost:${ws_port}`
        )
    );

    const subscriptionServer = SubscriptionServer.create(
        {
            schema,
            execute,
            subscribe
        },
        {
            server: WebSocketServer,
            path: "/graphql"
        }
    );

    return app;
};
