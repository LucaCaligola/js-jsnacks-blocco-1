// Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.

const number = prompt("Enter a 7 digits number");

console.log(number[0]);

// const primoNumero = number.charAt(0);
// const secondoNumero = number.charAt(1);
// const terzoNumero = number.charAt(2);
// const quartoNumero = number.charAt(3);
// const quintoNumero = number.charAt(4);
// const sestoNumero = number.charAt(5);
// const settimoNumero = number.charAt(6);


let somma = 0;

// let somma = (primoNumero + secondoNumero + terzoNumero + quartoNumero + quintoNumero + sestoNumero + settimoNumero);

// console.log(somma)


for (let i = 0; i < 7; i++) {

    somma += parseInt(number[i]);
    

    console.log(number.charAt(i))
}

    console.log(somma)