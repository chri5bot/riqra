import { gql, makeExecutableSchema } from "apollo-server";
import { merge } from "lodash";

import * as scalars from "./types/scalars";

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
  typeDefs: [scalars.typeDefs, Root],
  resolvers
});

export default schema;
