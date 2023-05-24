import espectador from "../img/espectador.png"

function GetImg(path, width) {
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` :espectador
}

export default GetImg