import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";
import { nanoid } from "nanoid";

export const getUser = async (id: string) => {
  try {
    const result = await prisma.user.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const getUsers = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const getUsersBySchedule = async (id: string) => {
  try {
    const Schedule = await prisma.schedule.findUnique({ where: {id} });
    if (Schedule && Schedule.users) {return Schedule.users} else {
      console.error("schedule does not exist");
    }
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching schedule users");
  }
}

export const registerUser = async (input: {
  name: string
}) => {
  const name = input.name;
  const id = nanoid();
  const data = { id , name }
  console.log(data)
  try {
    const result = await prisma.user.create({ data });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating user");
  }
};
