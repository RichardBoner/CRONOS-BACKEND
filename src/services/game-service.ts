import { getGameById } from "@/utils/external-fetcher-handlers.ts/fetch-game-w-id";
import { GraphQLError } from "graphql";
import axios from "axios";
import { getGames } from "@/utils/external-fetcher-handlers.ts/fetch-games";
import { filter_game, Game } from "@/types/RAWG-types";
export const getGame = async (id: string) => {
  try {
    const result:filter_game | undefined = await getGames();
    console.log(result)
    if (result){
    const gamesData = result.results
    console.log(result)
    return gamesData;
    } else {
        console.error("game undefined or miising!")
    }
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};