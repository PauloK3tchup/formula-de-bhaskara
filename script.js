function Multiplicar(Prim, Seg){
    Prim = document.getElementById("prim").value;
    Seg = document.getElementById("seg").value;
    if (Seg && Prim != NaN){
        const Res = (Prim * Seg);
        document.getElementById("Resultado").innerHTML = "O Resultado é " + Res;
    } else {
        document.getElementById("Resultado").innerHTML = "Insira dois números primeiro";
    }
}

function Dividir(Prim, Seg){
    Prim = document.getElementById("prim").value;
    Seg = document.getElementById("seg").value;
    if (Seg && Prim != NaN){
        const Res = (Prim / Seg);
        document.getElementById("Resultado").innerHTML = "O Resultado é " + Res;
    } else {
        document.getElementById("Resultado").innerHTML = "Insira dois números primeiro";
    }
}

function Bhaskara(aB, bB, cB){
    aB = document.getElementById("aB").value;
    bB = document.getElementById("bB").value;
    cB = document.getElementById("cB").value;

    const delta = (bB * bB) - (4 * (aB * cB));

    if (!aB || !bB || !cB) {
        document.getElementById("ResultadoB").innerHTML = "Insira os valores de <strong>a, b e c<strong>";
    } else if (aB == 0) {
        document.getElementById("ResultadoB").innerHTML = "O valor de <strong>a</strong>, não pode ser 0";
    } else if (delta < 0) {
        document.getElementById("ResultadoB").innerHTML = "Não é possível calcular";
    } else {
        const x1 = (-bB + Math.sqrt(delta)) / (2 * aB);
        const x2 = (-bB - Math.sqrt(delta)) / (2 * aB);    

        document.getElementById("ResultadoB").innerHTML = "Δ = " + delta + "<br>x1 = " + x1 + "<br>x2 = " + x2;
    }
}


function bonzi(){
    document.getElementById("OTexto").innerHTML = "thank you mai frendkkkk"
}