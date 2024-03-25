import { registerUser } from "@/services/user-service";

export const userMutations = {
  registerUser: (
    _: unknown,
    { input }: { input: { name: string } }
  ) => registerUser(input),
};
