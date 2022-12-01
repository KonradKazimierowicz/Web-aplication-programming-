//3.45
var osoba = {
    nazwisko: "Nowacki",
    imie: "Marek",
    zawod: "informatyk",
    pokaz: function() {
        document.write(this.nazwisko + ' ' + this.imie);
    }
};
osoba.wiek = 19;
osoba.wypisz_wiek = function() {
    document.write('Wiek: ' + this.wiek + ' lat');
}
osoba.wypisz_wiek();