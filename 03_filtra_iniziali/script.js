/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let letteraDaCercare = prompt("inserisci una lettera");
const namesLettera = [];

// Dichiara la funzione qui.
function parolaConLettera(nomi, lettera){
for(let i = 0; i < nomi.length; i++){
    let nome = nomi[i];
    if (nome.toLowerCase().includes(lettera.toLowerCase())){  // inserisco .tolowercase() in modo da non avere problemi in caso di CAPS o iniziali maiuscole... A != a.
      namesLettera.push(nome);

    }
}
return console.log(`i nomi che contengono la lettera: ${lettera}, sono : ${namesLettera}`);


}

// Invoca la funzione qui e stampa il risultato in console
parolaConLettera(names, letteraDaCercare);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]


//arrow function

let parolaWithLettera = (nomi, alpha) =>{
    for(let i = 0; i < nomi.length; i++){
        let nome = nomi[i];
        if (nome.toLowerCase().includes(alpha.toLowerCase())){  // inserisco .tolowercase() in modo da non avere problemi in caso di CAPS o iniziali maiuscole... A != a.
          namesLettera.push(nome);
    
        }
    }
    return console.log(`i nomi che contengono la lettera: ${alpha}, sono : ${namesLettera}`);
}

parolaWithLettera(names, letteraDaCercare);