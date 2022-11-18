function oblicz() {
    min = Number(document.getElementById("min").value);
    max = Number(document.getElementById("max").value);

    x1 = random(min, max);
    x2 = random(min, max);
    x3 = random(min, max);
    x4 = random(min, max);
    x5 = random(min, max);

    wynik = document.getElementById("result");

    suma = x1 + x2 + x3 + x4 + x5;
    mnozenie = x1 * x2 * x3 * x4 * x5;
    srednia = (x1 + x2 + x3 + x4 + x5)/5;

    wynik.innerHTML = `suma liczb: ${x1},${x2},${x3},${x4},${x5} to: ${suma}</br>
                        iloraz liczb: ${x1},${x2},${x3},${x4},${x5} to: ${mnozenie}</br>
                        srednia liczb: ${x1},${x2},${x3},${x4},${x5} to: ${srednia}`
}
function random(min,max){
    min = Math.ceil(min);
    max = Math.floor(max) + 1;

    return Math.floor(Math.random() * (max - min) + min);
}