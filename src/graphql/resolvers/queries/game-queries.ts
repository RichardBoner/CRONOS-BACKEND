import { getGame } from "@/services/game-service";

export const gameQueries = {
  getGame: (_: unknown, { id }: { id: string }) => getGame(id),
};
