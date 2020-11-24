const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs")
    .options({
        direccion: {
            alias: "d",
            desc: "Direccion de la ciudad para obtener el clima",
            demand: true,
        },
    })
    .help().argv;

const getInfo = async (direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${coords.direccion} es de ${temp}° C.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};

getInfo(argv.direccion).then(console.log).catch(console.log);
