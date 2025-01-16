/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let inizialiNames = [];

// Dichiara la funzione qui.
  function inizialiNomi(Nomi){
  for(let i = 0; i < Nomi.length; i++){
    let nome = Nomi[i];
   inizialiNames.push(nome.charAt(0));
  }
  return inizialiNames;
  }

// Invoca la funzione qui e stampa il risultato in console
console.log(inizialiNomi(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


//ora con arrow function

let iniziali = (arrNomi) => {
for (let i = 0; i < arrNomi.length; i++){
let name = arrNomi[i];
inizialiNames.push(name.charAt(0));
}
return inizialiNames;
}

console.log(iniziali(names));
    
