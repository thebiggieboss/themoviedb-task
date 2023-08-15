import {Provider} from "@/service/base";

const getPopularMovieUrl = "/3/movie/popular";
const getInfoMovieUrl = (movie_id) => `/3/movie/${movie_id}`;


function GetPopularMovie(page, token) {
    return Provider.get(getPopularMovieUrl, {
        cancelToken: token,
        params: {
            page,
            language: "ru-RU"
        }
    })
}
function GetInfoMovie(id) {
    return Provider.get(getInfoMovieUrl(id), {
        params: {
            language: "ru-RU"
        }
    })
}

export {
    GetPopularMovie,
    GetInfoMovie
}