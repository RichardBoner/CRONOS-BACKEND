import gql from "graphql-tag";

export const scheduleTypeDefs = gql`
  type Schedule {
  id: String!
  users: [String!]!
  creatorUserId: String!
  date: String!
  duration: String!
  gameId: String
}

   input createScheduleInput {
    users: [String!]!
    creatorUserId: String!
    date: String!
    duration: String
    gameId: String
  }

  type Query {
    getScheduleById(id: ID!): Schedule
  }

  type Mutation {
    createSchedule(input: createScheduleInput!): Schedule!
  }
`;
