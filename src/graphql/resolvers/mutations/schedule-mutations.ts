import { createSchedule } from "@/services/schedule-service";

export const scheduleMutations = {
  createSchedule: (
    _: unknown,
    { input }: { input: {
        users: string[]
      creatorUserId: string
        createdDate: string
        date: string
        duration: string
        gameId: string
    }
    }
  ) => createSchedule(input),
};
