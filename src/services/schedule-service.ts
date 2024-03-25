import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";

export const getSchedule = async (id: string) => {
  try {
    const result = await prisma.schedule.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const createSchedule = async (input: {
    users: string[];
    creatorUserId: string;
    date: string;
    duration: string;
    gameId: string;
}) => {
  try {
    const result = await prisma.schedule.create({ data: input });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating user");
  }
};
