import { registerUser, updateUser } from "@/services/user-service";

export const userMutations = {
  registerUser: (
    _: unknown,
    { input }: { input: {
      payload: string
    } }
  ) => registerUser(input),
  updateUser: (
    _: unknown,
    { input }: { input: {
      payload: string
    }
  }
  ) => updateUser(input),
};
