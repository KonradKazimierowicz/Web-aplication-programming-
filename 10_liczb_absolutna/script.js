const btn  = document.querySelector('button');
const result = document.querySelector('#result');

btn.addEventListener('click', function() {
    const x = Number(document.querySelector('#a').value);
    result.innerHTML = `Wynik wyrażenia to: ${Math.pow(x,2)/Math.pow((1+ Math.abs(x)),2)}`;
})