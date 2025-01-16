/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
let contaVocali = 0;
let allVocali = "aeiou"


// Dichiara la funzione qui.
function numeroVocali(parola){
for(let i = 0; i < parola.length; i++){    
if (allVocali.includes(parola[i])){
    contaVocali=contaVocali+1;
}

}

return console.log(`il numero di vocali nella parola ${parola} sono: ${contaVocali}`);
}

// Invoca la funzione qui e stampa il risultato in console
numeroVocali(word);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)



//arrow function
let numVocali = (parola1) => {
    for (let i = 0; i < parola1.length; i++ ){
    if(allVocali.includes(parola1[i])){
        contaVocali+=1;

    }    
    }
    return console.log(`il numero di vocali nella parola ${parola1} sono: ${contaVocali}`);
}

//invoco arrow function
numVocali(word);