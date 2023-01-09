const date1 = new Date("22 March 2015");
const date2 = new Date("10 September 2010");
const date3 = new Date("10 September 2010");

console.log(date1 < date2);

console.log(date2.getTime() === date3.getTime());

const birthdate = new Date(USER.birthdate);
const today = new Date();

if(today.getMonth() === birthdate.getMonth() && today.getDate() === birthdate.getDate()) {
    console.log("Dzisiaj urodziny!");
}
// porównywanie daty

