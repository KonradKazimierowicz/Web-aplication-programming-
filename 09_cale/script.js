const btn  = document.querySelector('button');
const result = document.querySelector('#result');

btn.addEventListener('click', function() {
    let cal = document.querySelector('#a');
    let mm = cal.value * 25.399;
    result.innerHTML = `${cal.value} cali to ${mm} mm`;
})