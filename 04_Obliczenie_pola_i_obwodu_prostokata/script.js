console.log("witam witam")
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let a = document.querySelector('#wprow_a').value;
    let b = document.querySelector('#wprow_b').value;
    a = parseFloat(a);
    b = parseFloat(b);
    let pole = a * b;
    let obw = (a+b)*2;

    let out = `<h1>Długość boku a: ${a}<br>
                Długość boku b: ${b}<br>
                Pole prostokąta = ${pole}<br>
                Obwód prostokąta = ${obw}`;

    wynik.innerHTML = out;
})