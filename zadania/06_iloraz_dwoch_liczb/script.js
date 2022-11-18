const btn  = document.querySelector('button');
const result = document.querySelector('#result');

let a = document.querySelector('#a');
let b = document.querySelector('#b');


btn.addEventListener('click', function(){
    let iloraz ;
    iloraz = Number(a.value)/Number(b.value);

    if(Number(b.value)===0){
        let out = `nie dziel przez zero!`;
        result.innerHTML = out;
    }
    else{
        let out = `Iloraz z tych liczb to: ${iloraz}</br>
        W zaokrągleniu to ${iloraz.toFixed(3)}`;
        result.innerHTML = out;    }
})