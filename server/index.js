import express from "express";
import { config } from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";
import connectDB from "./config/db";
import colors from "colors";
import cors from "cors";

// ENV
config();
// DB CONNECTION
connectDB();
// PORT
const port = process.env.PORT || 5000;
// APP INITIALIZE
const app = express();
// USE CORS
app.use(cors());
// GRAPHQL ENDPOINT
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

// RUN SERVER
app.listen(port, console.log(`Server running on port ${port}`));
