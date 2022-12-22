const liczba1 = document.querySelector('#liczba1');
const liczba2 = document.querySelector('#liczba2');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let a = parseInt(liczba1.value);
    let b = parseInt(liczba2.value);

    wynik.innerHTML = `Wspólny dzielnik a i b wynosi: ${Euklides(a, b)}`;
});

function Euklides(a, b){
    while(a !== b){
        if(a > b){
            a -= b;
        } else{
            b -= a;
        }
    }
    return a;
}