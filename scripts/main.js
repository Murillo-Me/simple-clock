

function countdown() {
    const today = new Date();

    const horas = today.getHours();
    const minutos = today.getMinutes();
    const segundos = today.getSeconds();

    console.log(horas + ":" + minutos + ":" + segundos);

    const horasEl = document.getElementById("horas");
    const minutosEl = document.getElementById("minutos");
    const segundosEl = document.getElementById("segundos");

    horasEl.innerText = formatTime(horas);
    minutosEl.innerText = formatTime(minutos);
    segundosEl.innerText = formatTime(segundos);
}

function formatTime(time) {
    if (time > 9)
        return time;
    else
        return "0" + time;
}

setInterval(countdown, 1000);