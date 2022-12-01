// przyklad 3.91
function sprawdz(form) {
    if (document.getElementById('nazw').value.length < 3) {
        alert('Pole Nazwisko musi zawierać co najmniej trzy znaki');
        form.nazw.focus();
        return false;
    }
    if (document.getElementById('imie').value.length < 2) {
        alert('Pole Imię musi zawierać co najmniej dwa znaki');
        form.imie.focus();
        return false;
    }
    if (document.getElementById('zawod').value == '') {
        alert('Pole Zawód musi być wypełnione');
        form.zawod.focus();
        return false;
    }
    return true;
}