// Scrivo in console i primi 20 numeri, scrivendoli a due a due. 
// es. 0, 2, 4, 6 ...

const wrapper = document.querySelector("div.wrapper")

for (let i = 0; i <= 20; i = i + 2) {
    const element = `<p> ${i} </p>`;
    console.log (i)
}