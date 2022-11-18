const btn  = document.querySelector('button');
const result = document.querySelector('#result');

btn.addEventListener('click', function() {
    const x = parseInt(document.querySelector('#a').value);
    const y = pars(document.querySelector('#b').value);

    if (y==0){
        result.innerHTML = `Nie można podzielić tej liczby. Nie dzielimy przez 0!`
    }
    else {
        let wynik = x / y;
        result.innerHTML = `Wynik dzielenia  to: ${x}/${y}=${wynik}`;
    }

})