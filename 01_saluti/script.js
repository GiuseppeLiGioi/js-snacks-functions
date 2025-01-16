/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function Saluti(string1){

return console.log(`Ciao ${string1}`);

}

// Invoca la funzione qui e stampa il risultato in console

Saluti (userName);

//Risultato atteso se si passa 'Mario': // ciao Mario



// arrow function


let saluto = (string1) => console.log(`Ciao ${string1}`);


//invoco arrow function

saluto (userName);

