import { gql } from "apollo-server";

export default gql`
  type Comment {
    id: ID!
    comment: String
  }

  type Comments {
    nodes: [Comment]
  }

  extend type Query {
    comment(id: ID!): Comment
    comments: Comments
  }
`;
