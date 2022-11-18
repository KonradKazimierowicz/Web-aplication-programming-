const btn  = document.querySelector('button');
const result = document.querySelector('#result');

btn.addEventListener('click', function() {
    let a1 = Number(document.querySelector('#a1').value);
    let a2 = Number(document.querySelector('#a2').value);

    if (a1==a2){
        result.innerHTML = `Proste są równoległe`
    }
    else {
        result.innerHTML = `Proste nie są równoległe`
    }


})