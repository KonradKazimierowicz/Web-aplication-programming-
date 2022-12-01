//Przykład 3_43

var osoba = {
    nazwisko: "Nowacki",
    imie: "Marek",
    zawod: "informatyk",
    pokaz: function (){
        document.write(this.nazwisko+ ' '+ this.imie);
    }
}