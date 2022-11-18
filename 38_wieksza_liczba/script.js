const btn  = document.querySelector('button');
const result = document.querySelector('#result');

btn.addEventListener('click', function() {
    const x = Number(document.querySelector('#a').value);
    const y = Number(document.querySelector('#b').value);

    if (x>y){
        result.innerHTML = `Liczba ${x} jest większa od liczby ${y}`
    }
    else if (x<y){
        result.innerHTML = `Liczba ${y} jest większa od liczby ${x}`
    }
    else{
        result.innerHTML = `Liczba ${y} i liczba ${x}`
    }

})