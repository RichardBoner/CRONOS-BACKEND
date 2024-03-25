import { getUser, getUsers, getUsersBySchedule } from "@/services/user-service";

export const userQueries = {
  getUser: (_: unknown, { id }: { id: string }) => getUser(id),
  getUsers: () => getUsers(),
  getUsersBySchedule: (_: unknown, { id }: { id: string }) => getUsersBySchedule(id),
};
