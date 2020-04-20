var jugador1;
var jugador2;
var ganados1 = 0;
var ganados2 = 0;
var empate = 0;
var turno = 0;
var tablero = new Array();


function cargarForm() {
    document.getElementById("form").style.display = "inline-block";
    document.getElementById("historial").style.display = "none";
    document.getElementById("juego").style.display = "none";
    ganados1 = 0;
    ganados2 = 0;
    empate = 0;
    document.getElementById("jugador1").value = "";
    document.getElementById("jugador2").value = "";

}

function empezar() {
    //mostrar el tablero
    document.getElementById("juego").style.display = "inline-block";
    //document.getElementById("historial").style.display = "inline-block";
    console.info("nombre del jugador 1 y 2:");
    jugador1 = document.getElementById("jugador1").value;
    console.log(jugador1)
    jugador2 = document.getElementById("jugador2").value;
    console.log(jugador2);


    tablero[0] = document.getElementById("00");
    tablero[1] = document.getElementById("01");
    tablero[2] = document.getElementById("02");
    tablero[3] = document.getElementById("10");
    tablero[4] = document.getElementById("11");
    tablero[5] = document.getElementById("12");
    tablero[6] = document.getElementById("20");
    tablero[7] = document.getElementById("21");
    tablero[8] = document.getElementById("22");

    for (var i = 0; i < 9; i++) {
        tablero[i].value = " ";
    }

    turno = 1;

    document.getElementById("turno").innerHTML =
        "Es tu turno: " + jugador1;
}

function siguienteJuego() {
    document.getElementById("historial").style.display = "inline-block";
    document.getElementById("mensaje").style.display = "none";

    empezar();
}

function llenarTablero(casillero) {
    if (turno == 1 & casillero.value == " ") {
        turno = 2;
        casillero.value = "X";
        document.getElementById("turno").innerHTML =
            "Es tu turno: " + jugador2;


    } else {
        if (turno == 2 & casillero.value == " ") {
            turno = 1;
            document.getElementById("turno").innerHTML =
                "Es tu turno: " + jugador1;
            casillero.value = "O";
        }
    }
    resultado();
}

function resultado() {
    if ((tablero[0].value == "X" && tablero[1].value == "X" && tablero[2].value == "X") ||
        (tablero[3].value == "X" && tablero[4].value == "X" && tablero[5].value == "X") ||
        (tablero[6].value == "X" && tablero[7].value == "X" && tablero[8].value == "X") ||
        (tablero[0].value == "X" && tablero[3].value == "X" && tablero[6].value == "X") ||
        (tablero[1].value == "X" && tablero[4].value == "X" && tablero[7].value == "X") ||
        (tablero[2].value == "X" && tablero[5].value == "X" && tablero[8].value == "X") ||
        (tablero[0].value == "X" && tablero[4].value == "X" && tablero[8].value == "X") ||
        (tablero[2].value == "X" && tablero[4].value == "X" && tablero[6].value == "X")
    ) {
        document.getElementById("mensaje").style.display = "inline-block";
        document.getElementById("mostrarMensaje").innerHTML =
            "Ganaste: " + jugador1 + "!!!!";
        document.getElementById("juego").style.display = "none";
        document.getElementById("form").style.display = "none";
        ganados1 = ganados1 + 1;
        document.getElementById("ganados1").innerHTML =
            "Juegos ganados por " + jugador1 + ": " + ganados1;
        document.getElementById("ganados2").innerHTML =
            "Juegos ganados por " + jugador2 + ": " + ganados2;
        document.getElementById("empate").innerHTML =
            "Juegos empatados: " + empate;

        document.getElementById("historial").style.display = "none";

    }
    if ((tablero[0].value == "O" && tablero[1].value == "O" && tablero[2].value == "O") ||
        (tablero[3].value == "O" && tablero[4].value == "O" && tablero[5].value == "O") ||
        (tablero[6].value == "O" && tablero[7].value == "O" && tablero[8].value == "O") ||
        (tablero[0].value == "O" && tablero[3].value == "O" && tablero[6].value == "O") ||
        (tablero[1].value == "O" && tablero[4].value == "O" && tablero[7].value == "O") ||
        (tablero[2].value == "O" && tablero[5].value == "O" && tablero[8].value == "O") ||
        (tablero[0].value == "O" && tablero[4].value == "O" && tablero[8].value == "O") ||
        (tablero[2].value == "O" && tablero[4].value == "O" && tablero[6].value == "O")
    ) {
        document.getElementById("mensaje").style.display = "inline-block";
        document.getElementById("mostrarMensaje").innerHTML =
            "Ganaste: " + jugador2 + "!!!!";
        document.getElementById("juego").style.display = "none";
        document.getElementById("form").style.display = "none";
        ganados2 = ganados2 + 1;
        document.getElementById("ganados1").innerHTML =
            "Juegos ganados por " + jugador1 + ": " + ganados1;
        document.getElementById("ganados2").innerHTML =
            "Juegos ganados por " + jugador2 + ": " + ganados2;
        document.getElementById("empate").innerHTML =
            "Juegos empatados: " + empate;

        document.getElementById("historial").style.display = "none";
    }

    if (tablero[0].value !== " " && tablero[1].value !== " " && tablero[2].value !== " " &&
        tablero[3].value !== " " && tablero[4].value !== " " && tablero[5].value !== " " &&
        tablero[6].value !== " " && tablero[7].value !== " " && tablero[8].value !== " ") {
        document.getElementById("mensaje").style.display = "inline-block";
        document.getElementById("mostrarMensaje").innerHTML =
            "Hubo un empate";
        document.getElementById("juego").style.display = "none";
        document.getElementById("form").style.display = "none";
        empate = empate + 1;
        document.getElementById("ganados1").innerHTML =
            "Juegos ganados por " + jugador1 + ": " + ganados1;
        document.getElementById("ganados2").innerHTML =
            "Juegos ganados por " + jugador2 + ": " + ganados2;
        document.getElementById("empate").innerHTML =
            "Juegos empatados: " + empate;

        document.getElementById("historial").style.display = "none";
    }
}