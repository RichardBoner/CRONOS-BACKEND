import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    name: String!
    createdAt: String!
    friends: [String]
    schedules: [String]
  }

  input UserRegisterInput {
    payload: String!
  }

  input UserUpdateInput {
    payload: String!
  }

  type Query {
    getUsersBySchedule(id: ID!): User
    getUser(id: ID!): User
  }

  type Mutation {
    registerUser(input: UserRegisterInput!): User
    login(id: String!, password: String!): String
    updateUser(input: UserUpdateInput): User!
  }
`;
