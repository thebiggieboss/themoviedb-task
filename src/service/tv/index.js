import {Provider} from "@/service/base";

const getPopularTvUrl = "/3/tv/popular";
const getInfoTvUrl = (tv_id) => `/3/tv/${tv_id}`;


function GetPopularTv(page) {
    return Provider.get(getPopularTvUrl, {
        params: {
            page,
            language: "ru-RU"
        }
    })
}
function GetInfoTv(id) {
    return Provider.get(getInfoTvUrl(id), {
        params: {
            language: "ru-RU"
        }
    })
}

export {
    GetPopularTv,
    GetInfoTv
}