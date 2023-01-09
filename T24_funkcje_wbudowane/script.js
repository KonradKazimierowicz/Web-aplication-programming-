const rok1 = document.querySelector('#rok');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

const rok = new Date();
let rokObc = rok.getFullYear();

document.querySelector('#rokObecny').innerHTML = `Obecny rok: ${rokObc}`;

btn.addEventListener('click', function(){
    let rokUzy = parseInt(rok1.value);

    wynik.innerHTML = `Różnica pomiędzy rokiem podanym przez Ciebie a obecnym wynosi ${dni(rokObc, rokUzy)} dni.`;
});

function dni(rokObc, rokUzy){
    let wynikDni = 0;
    
    if(rokObc > rokUzy){
        while(rokObc !== rokUzy){
            if(rokObc%4===0 && rokObc%100!==0 || rokObc%400===0){
                wynikDni += 366;
            } else{
                wynikDni += 365;
            }
            rokObc--;
        }
    } else if(rokUzy > rokObc){
        while(rokUzy !== rokObc){
            if(rokUzy%4===0 && rokUzy%100!==0 || rokUzy%400===0){
                wynikDni += 366;
            } else{
                wynikDni += 365;
            }
            rokUzy--;
        }
    }
    return wynikDni;
}