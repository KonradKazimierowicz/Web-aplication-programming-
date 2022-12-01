//Przykład 3.54
String.prototype.duzaLitera = function () {
    return this.charAt(0).toUpperCase() + this.substr(1);
}