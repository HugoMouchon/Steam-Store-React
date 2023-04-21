import axios from "axios";
import { API_KEY, BASE_URL } from "../config";

export class rawgAPI {

    // Ce code permet d'obtenir une liste des jeux vidéo les mieux notés par métacritic sur l'année 2022.
    static async fetchTopRatedGames() {
        const response = await axios.get(`${BASE_URL}games${API_KEY}&dates=2022-01-01,2022-12-31&metacritic=90,100&ordering=-metacritic&page=1&page_size4`);
        return response.data.results;
    };

    static async fetchGameDetails(gameId) {
        const response = await axios.get(`${BASE_URL}games/${gameId}${API_KEY}`);
        return response.data;
    };

    static async fetchPopularsGames() {
        const response = await axios.get(`${BASE_URL}games${API_KEY}&ordering=-metacritic>100&page_size=20`);
        return response.data.results;
    };
}
