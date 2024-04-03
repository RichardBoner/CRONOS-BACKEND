import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    createdAt: String!
    friends: [String]!
  }

  input UserRegisterInput {
    name: String!
  }

  type Query {
    getUsersBySchedule(id: ID!): User
    getUser(id: ID!): User
  }

  type Mutation {
    registerUser(input: UserRegisterInput!): User!
    login(id: String!, password: String!): String
  }
`;
