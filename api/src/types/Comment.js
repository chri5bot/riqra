import { gql } from "apollo-server";

export default gql`
  type Comment {
    id: ID!
    content: String
  }

  input CreateBrandInput {
    content: String!
  }

  extend type Query {
    comment(id: ID!): Comment
    comments: [Comment!]!
  }

  extend type Mutation {
    createComment(input: CreateBrandInput!): Comment
    deleteComment(id: ID!): Boolean
  }
`;
