import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import restRoutes from "./routes/restRoutes";
import { typeDefs, resolvers } from "./graphql/schema";
import cors from "cors";

const app: any = express();
const apolloServer = new ApolloServer({ typeDefs, resolvers });

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

apolloServer.start().then(() => {
  apolloServer.applyMiddleware({ app });
});

app.use(bodyParser.json());
app.use("/rest", restRoutes);

export default app;
