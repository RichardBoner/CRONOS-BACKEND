import { userQueries } from "./queries/user-queries";
import { gameQueries } from "./queries/game-queries";
import { scheduleMutations } from "./mutations/schedule-mutations";
import { userMutations } from "./mutations/user-mutations";
import { scheduleQueries } from "./queries/schedule-queries";

export const resolvers = {
  Query: {
    ...userQueries,
    ...gameQueries,
    ...scheduleQueries,
  },
  Mutation: {
    ...userMutations,
    ...scheduleMutations,
  },
};
