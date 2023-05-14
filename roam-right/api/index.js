import axios from "axios";

export const getPlacesData = async (bl_lat,bl_lng, tr_lat, tr_lng, type) => {
    try {
        const {
            data :{data},
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                params: {
                    bl_latitude: bl_lat ? bl_lat : "14.55397908171869",
                    tr_latitude: tr_lat ? tr_lat : "14.63901746645293",
                    bl_longitude: bl_lng ? bl_lng : "120.9329509868328",
                    tr_longitude: tr_lng ? tr_lng : "121.0261685633083",
                    limit: '30',
                    currency: 'USD',
                    lunit: 'km',
                    lang: 'en_US'
                  },
                headers: {
                    'X-RapidAPI-Key': '47213703ddmsh29c406620fc6f46p15ef95jsn167f7f992598',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                },
            }
        );

        return data;
    } catch (error) {
        return null
    }
}