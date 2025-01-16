/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
let orario = parseFloat(prompt("inserisci l'orario... separa le ore dai minuti con il punto (.)."))


// Dichiara la funzione qui.
function Saluto(nome, ora){
if(ora >= 8.00 && ora <= 13.00 ){
    console.log(`Buongiorno ${nome}`);
}
else if(ora >= 13.00 && ora <= 17.00){
    console.log(`Buon pomeriggio ${nome}`);
}
else if(ora >= 17.00){
    console.log(`Buona sera ${nome}`);
}
}

// Invoca la funzione qui e stampa il risultato in console
Saluto (name, orario);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.



let salutoName = (nome, ora)=>{
    if(ora >= 8.00 && ora <= 13.00 ){
        console.log(`Buongiorno ${nome}`);
    }
    else if(ora >= 13.00 && ora <= 17.00){
        console.log(`Buon pomeriggio ${nome}`);
    }
    else if(ora >= 17.00){
        console.log(`Buona sera ${nome}`);
    }
    }
    // Invoc arrow funzione
    Saluto (name, orario);