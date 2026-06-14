/* ===========================
   DARK INFO - SCRIPT.JS V2
=========================== */

/* MENU LATERAL */

function toggleMenu(){

    const menu =
    document.getElementById("menu-lateral");

    if(menu){

        menu.classList.toggle("activo");

    }

}

/* ===========================
   TERMINAL HACKER
=========================== */

const terminalMensajes = [

"root@darkinfo:~$ iniciando sistema...",
"root@darkinfo:~$ verificando seguridad...",
"root@darkinfo:~$ cargando cursos...",
"root@darkinfo:~$ conectando alumnos...",
"root@darkinfo:~$ acceso concedido"

];

let lineaActual = 0;
let letraActual = 0;

function escribirTerminal(){

    const terminal =
    document.getElementById("terminal-text");

    if(!terminal) return;

    if(lineaActual < terminalMensajes.length){

        if(
            letraActual <
            terminalMensajes[lineaActual].length
        ){

            terminal.innerHTML +=
            terminalMensajes[lineaActual]
            .charAt(letraActual);

            letraActual++;

            setTimeout(
                escribirTerminal,
                40
            );

        }else{

            terminal.innerHTML += "<br>";

            lineaActual++;

            letraActual = 0;

            setTimeout(
                escribirTerminal,
                500
            );

        }

    }

}

/* ===========================
   CONTADORES
=========================== */

function iniciarContador(id, objetivo){

    const elemento =
    document.getElementById(id);

    if(!elemento) return;

    let valor = 0;

    const velocidad =
    objetivo / 100;

    const intervalo =
    setInterval(()=>{

        valor += velocidad;

        if(valor >= objetivo){

            valor = objetivo;

            clearInterval(intervalo);

        }

        elemento.innerText =
        Math.floor(valor);

    },20);

}

/* ===========================
   MATRIX AZUL
=========================== */

function iniciarMatrix(){

const canvas =
document.getElementById("matrix");

if(!canvas) return;

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const letras =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const array =
letras.split("");

const fontSize = 16;

const columnas =
canvas.width / fontSize;

const gotas = [];

for(let i=0;i<columnas;i++){

    gotas[i] = 1;

}

function dibujar(){

    ctx.fillStyle =
    "rgba(0,0,0,0.05)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle =
    "#3b82f6";

    ctx.font =
    fontSize + "px monospace";

    for(let i=0;i<gotas.length;i++){

        const letra =
        array[
        Math.floor(
        Math.random() *
        array.length)];

        ctx.fillText(
            letra,
            i * fontSize,
            gotas[i] * fontSize
        );

        if(
            gotas[i] * fontSize >
            canvas.height &&
            Math.random() > 0.975
        ){

            gotas[i] = 0;

        }

        gotas[i]++;

    }

}

setInterval(dibujar,35);

window.addEventListener(
"resize",
()=>{

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

});

}

/* ===========================
   INICIO
=========================== */

window.addEventListener(

"load",

()=>{

    escribirTerminal();

    iniciarMatrix();

    iniciarContador(
        "contador-alumnos",
        5000
    );

    iniciarContador(
        "contador-cursos",
        120
    );

    iniciarContador(
        "contador-satisfaccion",
        98
    );

}

);