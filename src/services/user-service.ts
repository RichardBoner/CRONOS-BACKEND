import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";
import { nanoid } from "nanoid";
import jwt from 'jsonwebtoken';

interface PrismaCreateData {
  name: string;
  id: string;
  password: string;
  createdAt: string;
  friends: string[];
  schedules: string[];
}

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
export const updateUser = async (input: {
  payload: string
}) => {
  const key= 'AYEqnQcyGSM4'
  const decodedPayload = jwt.decode(input.payload)
  console.log(decodedPayload)
}

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
  payload: string
}) => {
  const key = 'AYEqnQcyGSM4'
  const decodedData= jwt.verify(input.payload, key)
  try {
    const result = await prisma.user.create({ data: {
      id: decodedData.id,
      name: decodedData.name,
      password: decodedData.password,
      createdAt: decodedData.createdAt,
      friends: [],
      schedules: []
    } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating user");
  }
};
