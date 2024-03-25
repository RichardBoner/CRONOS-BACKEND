import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  input UserRegisterInput {
    name: String!
  }

  type Query {
    getUsers: [User]!
    getUsersBySchedule(id: ID!): User
    getUser(id: ID!): User
  }

  type Mutation {
    registerUser(input: UserRegisterInput!): User!
  }
`;
