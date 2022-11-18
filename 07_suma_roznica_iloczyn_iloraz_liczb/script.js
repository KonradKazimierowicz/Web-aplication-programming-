const btn  = document.querySelector('button');
const result = document.querySelector('#result');

let a = document.querySelector('#a');
let b = document.querySelector('#b');

console.log(a.value);
btn.addEventListener('click', function(){
    let suma = Number(a.value)+Number(b.value);
    let roznica = Number(a.value)-Number(b.value);
    let mnozenie = Number(a.value)*Number(b.value);
    let reszta = Number(a.value)%Number(b.value);
    let dzielenie;
    if(b.value == 0)
    {
        dzielenie = "Nie dzielimy przez zero!!";
    }
    else
    {
        dzielenie = `Wynik dzielenia ${a.value} i ${b.value}: `+ Math.floor(a.value/b.value);
    }
    result.innerHTML = `Wynik dodawania ${a.value} i ${b.value} to: ${suma}<br/>Wynik odejmowania ${a.value} i ${b.value} to: ${roznica}<br>Wynik mnozenia ${a.value} i ${b.value} to: ${mnozenie}<br/>${dzielenie}<br/>Reszta z dzielenia to: ${reszta}`;
})
