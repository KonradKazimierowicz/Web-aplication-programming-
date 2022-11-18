const btn  = document.querySelector('button');
const result = document.querySelector('#result');
let sek = document.querySelector('#a');

btn.addEventListener('click', function() {
    if (sek.value > 0) {
        if (sek.value >= 60) {
            let hwr = Math.floor((sek.value) / 3600);
            let min = Math.floor((sek.value) % 3600 / 60);
            let sekundy = sek.value - (hwr*3600 + min*60 );
            result.innerHTML = ` mamy ${hwr} godzin ${min} minut ${sekundy}  sekund`;
        } else {
            result.innerHTML = ` mamy ${sek.value}  sekund`;
        }
    } else {
        result.innerHTML = ` mamy 0 sekund`;
    }
})