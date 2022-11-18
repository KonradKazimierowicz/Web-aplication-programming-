const btn  = document.querySelector('button');
const result = document.querySelector('#result');

btn.addEventListener('click', function() {
    const x = document.querySelector('#a').value;


    if (x>0){
        result.innerHTML = `Wartość bezwzględna to: ${x} `
    }
    else {
        let bezwzgl = x * (-1);
        result.innerHTML = `Wartość wezwzględna to: ${bezwzgl}`
    }


})