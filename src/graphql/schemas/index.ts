import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { userTypeDefs } from "./user-schema";
import { scheduleTypeDefs } from "./schedule-schema";

export const typeDefs = mergeTypeDefs([userTypeDefs, scheduleTypeDefs]);
