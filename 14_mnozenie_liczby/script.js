const btn  = document.querySelector('button');
const result = document.querySelector('#result');

btn.addEventListener('click', function() {
    let a = document.querySelector('#a').value;

    for (let i=0;i<11;i++){
        console.log(i);
        let wynik = i * parseInt(a);
        result.innerHTML += `${i}*${parseInt(a)}= ${wynik} <br>`;
    }

})