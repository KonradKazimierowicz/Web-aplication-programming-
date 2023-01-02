const liczbaMiesiaca = document.querySelector('#liczbaMies');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let miesiac = parseInt(liczbaMiesiaca.value);
    wynik.innerHTML = funMiesiac(miesiac);
});

function funMiesiac(miesiac){
    switch(miesiac){
        case 1:
            return "Styczeń";
        case 2:
            return "Luty";
        case 3:
            return "Marzec";
        case 4:
            return "Kwiecień";
        case 5:
            return "Maj";
        case 6:
            return "Czerwiec";
        case 7:
            return "Lipiec";
        case 8:
            return "Sierpień";
        case 9:
            return "Wrzesień";
        case 10:
            return "Październik";
        case 11:
            return "Listopad";
        case 12:
            return "Grudznień";
        default:
            return "Błąd, nie istenieje miesiąc o takiej liczbie!";
    }
}
