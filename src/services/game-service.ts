import { getGameById } from "@/utils/external-fetcher-handlers.ts/fetch-game-w-id";
import { GraphQLError } from "graphql";
import axios from "axios";
import { getGameWithFilter } from "@/utils/external-fetcher-handlers.ts/fetch-games";
import { filter_game, Game } from "@/types/RAWG-types";
// export const getGamesByQuery = async ( query: string) => {
//   try {
//     const result:filter_game | undefined = await getGameWithFilter(query);
//     console.log(result)
//     if (result){
//     const gamesData = result.results
//     console.log(result)
//     return gamesData;
//     } else {
//         console.error("game undefined or miising!")
//     }
//   } catch (error) {
//     console.error(error);
//     throw new GraphQLError("Error fetching users");
//   }
// };
export const getGamesByQuery = async (query: string) => {
  try {
    const result = await getGameWithFilter(query);
    if (!result) {
      throw new Error('Game data is undefined or missing!');
    }
    const gamesData = result.results;
    console.log(gamesData);
    return gamesData;
  } catch (error) {
    console.error(error);
    throw new GraphQLError('Error fetching games');
  }
};
export const getGameByIdService = async (id: string) => {
  try {
    const result = await getGameById(Number(id));
    console.log(result)
    if (result){
    console.log(result)
    return result;
    } else {
        console.error("game undefined or miising!")
    }
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};