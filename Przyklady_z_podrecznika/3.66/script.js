// Przyklad 3.66
function porownaj(a, b) {cx
    return a - b;
}

var Tablica = new Array(27, 100, 10, 450, 1654, 320);
document.write('Bez sortowania: ' + Tablica.join());
document.write("<br>" + 'Sortowanie domyślne: ');
Tablica.sort();