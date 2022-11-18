const imie = document.querySelector('#name');
const wiek = document.querySelector('#age');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');


btn.addEventListener('click', function(){ 
    //let wynik_text = "<h1>Witaj na mojej stronie</h1> </br> Masz na imie:   "+imie.value + "Masz: " + wiek.value + "lat";
    let wynik_text =`<h1> Cześć ${imie.value}!</h1> Milo cie widziec szczegolnie , ze masz ${wiek.value} lat`;
    wynik.innerHTML = wynik_text;
    console.log( `Cześć ${imie.value} fajnie ,że jestes :)))`);
});                                         