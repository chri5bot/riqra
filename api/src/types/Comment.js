import { gql } from "apollo-server";

export default gql`
  type Comment {
    id: ID!
    content: String
  }

  extend type Query {
    comment(id: ID!): Comment
    comments: [Comment!]!
  }
`;
