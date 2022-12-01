//przyklad 3.49
function Klient(nazwisko, imie) {
    this.nazwisko_k = nazwisko;
    this.imie_k = imie;
}
Klient.prototype.zawod = 'kierowca';
Klient.prototype.pisz_dane = function() {
    document.write(this.nazwisko_k + ' ' + this.imie_k);
}
var osoba1 = new Klient("Malinowski", "Oskar", "kierowca");
osoba1.pisz_dane();