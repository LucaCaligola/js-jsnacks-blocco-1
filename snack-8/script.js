// Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.

const number = prompt("Enter a 7 digits number");

console.log(number);

const digits = number.toString().split('');

console.log(typeof digits);

let somma = 0;


for (let i = 1; i < digits.length; i++) {
    somma += number[i];
}

console.log(somma)