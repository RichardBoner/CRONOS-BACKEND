import { getSchedule } from "@/services/schedule-service";

export const scheduleQueries = {
  getScheduleById: (_:unknown, {query}: {query: string}) => getSchedule(query),
};
