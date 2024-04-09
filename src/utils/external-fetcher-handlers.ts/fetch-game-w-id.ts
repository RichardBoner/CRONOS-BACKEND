import { fetcher } from "../external-fetcher";

export async function getGameById(id: number, slug?: string) {
    const apiKey = process.env.RAWG_KEY;
    if (!apiKey) {
      throw new Error('RAWG API key is missing.');
    }
    const url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;
    const fullUrl = slug !== undefined && slug !== '' ? `${url}${slug}` : url;
    try {
      const game = await fetcher(fullUrl);
      console.log(game)
      return game;
    } catch (error) {
      console.error(`Error fetching game with ID ${id}:`, error);
      throw error;
    }
  }
