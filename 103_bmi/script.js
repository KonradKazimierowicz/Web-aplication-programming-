const waga = document.querySelector('#waga');
const wzrost = document.querySelector('#wzrost');
const wynik = document.querySelector('#result');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let wzrostM = wzrost.value / 100;
    let bmi = waga.value / (wzrostM **2)
    wynik.innerHTML = bmiKal(bmi);
    console.log(bmi)
});
function bmiKal(bmi){
    switch(true){
        case (bmi<16):
            return "Wyglodzenie";
        case (bmi>=16 && bmi<=16.99):
            return "Wychudzenie";
        case (bmi>17 && bmi<=18.49) :
            return "Niedowaga";
        case (bmi>18.5 && bmi<=24.99):
            return "Optimum";
        case (bmi>25 && bmi<=29.99):
            return "Nadwaga";
        case (bmi>30 && bmi<=34.99):
            return "Otyłość 1 stopnia";
        case (bmi>35 && bmi<=39.99):
            return "Otyłość 2 stopnia";
        case (bmi>40):
            return "Otyłość 3 stopnia";
        default:
            return "Błąd!";
    }
}
