const liczb_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
   let a = parseInt(liczb_a.value);
   wynik.innerHTML = "";
   for(let i=1; i<=30; i++){
       if(i == a){
           wynik.innerHTML += `${a}`;
           break;
       } else{
           wynik.innerHTML += `${i} `;
       }
   }
});