import { Game, filter_game } from "@/types/RAWG-types";
import { fetcher } from "../external-fetcher";

export async function getGames(): Promise<filter_game | undefined> {
    const apiKey = `cfa3a0eb339e4ec2a4f3b3c5e92289b7`;
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