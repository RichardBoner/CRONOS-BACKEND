import { getUser, getUsersByEmail, getUsersBySchedule } from "@/services/user-service";

export const userQueries = {
  getUser: (_: unknown, { email }: { email: string }) => getUser(email),
  getUsersBySchedule: (_: unknown, { email }: { email: string }) => getUsersBySchedule(email),
  getUsersByEmail: (_: unknown, { name }: { name: string }) => getUsersByEmail(name),
};
