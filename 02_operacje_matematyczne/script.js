alert("Witaj na stronie");

let liczba1 = parseInt(prompt("Podaj 1 liczbe:"));
let liczba2 = parseInt(prompt("Podaj 2 liczbe:"));

wynik_dodawania =liczba1 +liczba2;
wynik_odejmowania = liczba1 - liczba2;
wynik_mnozenia = liczba1 * liczba2;
// wynik_dzielenia = liczba1 / liczba2;

document.write("Dodawanie </br>" + liczba1 + "+" + liczba2 + "=" + wynik_dodawania);
document.write("</br> Odejmowanie </br>" + liczba1 + "-" + liczba2 + "=" + wynik_odejmowania);
document.write("</br> Mzożenie </br> " + liczba1 + "*" + liczba2 + "=" + wynik_mnozenia+ "</br>");

if(liczba2 === 0 )
{
    let wynik_dzielenia = "Nie dzielimy przez zero!!";
    document.write(wynik_dzielenia);
}
else
{
    let wynik_dzielenia = liczba1 / liczba2
    document.write("</br> Dzielenie </br>"  + liczba1 + "/" + liczba2 + "=" + wynik_dzielenia);

}