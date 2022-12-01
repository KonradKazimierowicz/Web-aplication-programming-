// Przyklad 3.46
function Klient(nazwisko_k, imie_k, zawod_k) {
    this.nazwisko = nazwisko_k;
    this.imie = imie_k;
    this.zawod = zawod_k;
    this.wypisz = function() {
        alert(this.nazwisko + ' ' + this.imie);
    }
}