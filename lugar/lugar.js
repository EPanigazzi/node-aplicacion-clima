const axios = require("axios");

const getLugarLatLng = async (dir) => {
    const encoudedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encoudedUrl}&appid=edd1e67596fec80e98abee142968b8fd`,
        timeout: 1000,
    });

    const resp = await instance.get();

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    return {
        direccion,
        lat,
        lon,
    };
};

module.exports = {
    getLugarLatLng,
};
