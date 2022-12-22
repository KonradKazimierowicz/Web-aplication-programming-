const liczba1 = document.querySelector('#liczba1');
const liczba2 = document.querySelector('#liczba2');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let a = parseInt(liczba1.value);
    let b = parseInt(liczba2.value);

    wynik.innerHTML = porownanie(a,b);
});
function porownanie(a,b){
    let color=""
    if(a>b){
        color = `<h1 id="big">${a}</h1><h1 id="small">${b}</h1>`
        return color
    }
    else if(a<b){
        color = `<h1 id="small">${a}</h1><h1 id="big">${b}</h1>`
        return color
    }
    else {
        color = `<h1 id="same">${a}</h1><h1 id="same"${b}>${b}</h1>`
        return color
    }
}