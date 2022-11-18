const btn  = document.querySelector('button');
const result = document.querySelector('#result');

let a = document.querySelector('#a');
let b = document.querySelector('#b');

console.log(a.value);
btn.addEventListener('click', function(){
    suma= Number(a.value)+Number(b.value);
    roznica= Number(a.value)-Number(b.value);
    mnozenie= Number(a.value)*Number(b.value);

    if(b.value == 0 )
    {
        dzielenie = "Nie dzielimy przez zero!!";
    }
    else
    {
        dzielenie = 'Wynik dzielenia to: '+ a.value/ b.value;
    }
    result.innerHTML = `Wynik dodawania${suma}<br/>Wynik odejmowania${roznica}<br>Wynik mnozenia to${mnozenie}<br/>${dzielenie}`;
})
