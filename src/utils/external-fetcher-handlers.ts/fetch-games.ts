import { Game, filter_game } from "@/types/RAWG-types";
import { fetcher } from "../external-fetcher";

export async function getGames(): Promise<filter_game | undefined> {
    const apiKey = process.env.RAWG_KEY;
    if (!apiKey) {
      throw new Error('RAWG API key is missing.');
    }
  
    const url = `https://api.rawg.io/api/games?key=${apiKey}`;
  
    try {
      const game = await fetcher<filter_game>(url);
      return game;
    } catch (error) {
      console.error(`Error fetching games`, error);
      throw error;
    }
  }
  export async function getGameWithFilter(query?: string): Promise<filter_game | undefined> {
    const apiKey = process.env.RAWG_KEY;
    if (!apiKey) {
      throw new Error('RAWG API key is missing.');
    }

    const url = `https://api.rawg.io/api/games?key=${apiKey}${query}`;
  
    try {
      const game = await fetcher<filter_game>(url);
      return game;
    } catch (error) {
      console.error(`Error fetching game with filter ${query}:`, error);
      throw error;
    }
  }
  