// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (createlo voi con almeno 5 nomi), chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.



const invitati = ['luca', 'gino', 'gina', 'samy', 'ezio'];
console.log (invitati);

let nomeInvitato = prompt('inserisci il tuo nome');

let presente = false ;


for (let i = 0; i < invitati.length; i++) {
    if (nomeInvitato == invitati[i]) {
        presente = true;
    } 
}

if (presente == true) {
    console.log ('sei presente')
}

else {
    console.log ('non sei presente')
}