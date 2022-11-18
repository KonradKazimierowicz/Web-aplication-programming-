const btn  = document.querySelector('button');
const result = document.querySelector('#result');

btn.addEventListener('click', function() {
    let x = Number(document.querySelector('#a').value);
    let y = Number(document.querySelector('#b').value);

    if (x%y==0){
        result.innerHTML = `Liczba A jest podzielna przez liczbę B`
    }
    else {
        result.innerHTML = `Liczba A nie jest podzielna przez liczbę B`
    }


})