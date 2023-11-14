// Scrivo in pagina i primi 6 numeri, scrivendo i numeri pari verdi. BN: numeri dispari gialli
const wrapper = document.querySelector("div.wrapper")

for (let i = 0; i < 6; i++) {
    const element = `<p> ${i} </p>`;
    wrapper.innerHTML += element;
}