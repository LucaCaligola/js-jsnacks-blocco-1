// Ciclare per i primi 100 numeri e inserire in un array esclusivamente i numeri divisibili per 7 o per 8.


let array = []
for (let i = 1; i < 101; i++) {

    if (i % 7 == 0) {
        array.push(i)
        
    }

    else if (i % 8 == 0) {
        array.push(i)
        
    }

    

}

console.log (array)