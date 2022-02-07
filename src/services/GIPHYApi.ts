import axios from 'axios';

export function getTrending() {

    return axios
    .get<any>
    (`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25&rating=g`)
    .then(response => response.data);

}

export function getSearch(searchTerm: string) {

    return axios
    .get<any>
    (`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`)

}