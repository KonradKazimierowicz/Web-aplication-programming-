const btn  = document.querySelector('button');
const result = document.querySelector('#result');

btn.addEventListener('click', function() {
    let a1 = Number(document.querySelector('#a1').value);
    let a2 = Number(document.querySelector('#a2').value);
    let wynik = a1 * a2;
    if (wynik == -1){
        result.innerHTML = `Proste są prostopadłe`
    }
    else {
        result.innerHTML = `Proste nie są prostopadłe`
    }

})