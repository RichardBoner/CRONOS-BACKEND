import { getGamesByQuery, getGameByIdService } from "@/services/game-service";

export const gameQueries = {
  getGames: (_:unknown, {query}: {query: string}) => getGamesByQuery(query),
  getGameById: (_:unknown, { id }: {id: string }) => getGameByIdService(id),
};
