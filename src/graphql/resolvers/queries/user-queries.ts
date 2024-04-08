import { checkUser, getUser, getUsersBySchedule } from "@/services/user-service";

export const userQueries = {
  getUser: (_: unknown, { id }: { id: string }) => getUser(id),
  getUsersBySchedule: (_: unknown, { id }: { id: string }) => getUsersBySchedule(id),
  checkUser: (_: unknown, { id }: { id: string }) => checkUser(id)
};
