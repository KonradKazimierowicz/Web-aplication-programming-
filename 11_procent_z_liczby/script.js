const btn  = document.querySelector('button');
const result = document.querySelector('#result');

btn.addEventListener('click', function() {
    let num = document.querySelector('#a');
    let proc = document.querySelector('#b');
    let wynik = num.value/100 * proc.value;
    result.innerHTML = `${proc.value}% z liczby ${num.value} to: ${wynik}`;
})