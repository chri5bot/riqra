import { gql, makeExecutableSchema } from "apollo-server";
import { merge } from "lodash";

import * as scalars from "./types/scalars";

import Comment from "./types/Comment";

const Root = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

const resolvers = merge({}, scalars.resolvers);

const schema = makeExecutableSchema({
  typeDefs: [scalars.typeDefs, Root, Comment],
  resolvers
});

export default schema;
