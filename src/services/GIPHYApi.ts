import axios from 'axios';
import { GiphyResponse } from '../models/GiphyResponse';

export function getTrending() {

    return axios
    .get<GiphyResponse>
    (`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25&rating=g`)
    .then((response) => response.data);

}

export function getSearch(searchTerm: string, limit: number = 25, rating: string = "g") {

    return axios
    .get<any>
    (`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${searchTerm}&limit=${limit}&offset=0&rating=${rating}&lang=en`)
    .then((response) => response.data);

}