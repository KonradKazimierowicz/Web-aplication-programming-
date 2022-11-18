const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');

let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');

btn.addEventListener('click', function(){
    let avg ;
    avg =( Number(a.value)+Number(b.value)+Number(c.value)+Number(d.value) )/ 4;
    let out = `Średnia arytmetyczna z tych 4 liczb to: ${avg}</br>
             Średnia zaokrąglona to ${avg.toFixed(3)} `;
    wynik.innerHTML = out;

})  