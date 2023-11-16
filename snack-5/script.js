// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let firstWord = prompt("Please enter a word");
console.log (firstWord.length)
let secondWord = prompt("Please enter another word");
console.log (secondWord.length)

if (firstWord.length < secondWord.length) {
    console.log (secondWord, firstWord)
}
else {
    console.log (firstWord, secondWord)
}