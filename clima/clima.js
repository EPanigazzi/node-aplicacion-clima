const axios = require("axios");
const appid = "edd1e67596fec80e98abee142968b8fd";

const getClima = async (lat, lon) => {
    const resp = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`
    );
    return resp.data.main.temp;
};

module.exports = {
    getClima,
};
