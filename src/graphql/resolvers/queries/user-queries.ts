import { getUser, getUsersBySchedule } from "@/services/user-service";

export const userQueries = {
  getUser: (_: unknown, { email }: { email: string }) => getUser(email),
  getUsersBySchedule: (_: unknown, { email }: { email: string }) => getUsersBySchedule(email),
};
