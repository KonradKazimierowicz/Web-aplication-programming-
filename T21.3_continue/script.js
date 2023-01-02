const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
   let a = parseInt(liczba_a.value);
   wynik.innerHTML = "";
   for(let i=1; i<=15; i++){
       if(i == a){
           wynik.innerHTML += `(-) `;
           continue;
       } else{
           wynik.innerHTML += `${i} `;
       }
   }
});