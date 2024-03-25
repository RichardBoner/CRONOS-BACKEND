import { userQueries } from "./queries/user-queries";
import { scheduleMutations } from "./mutations/schedule-mutations";
import { userMutations } from "./mutations/user-mutations";

export const resolvers = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
    ...scheduleMutations,
  },
};
