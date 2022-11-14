
let arrayNumeri = [];

console.log (sommaArray(arrayNumeri));

function sommaArray(arrayNumeri){
    let somma = 0;
    
    
    for(let i = 0; i < 10 ; i++){
       do{
        arrayNumeri[i] = prompt("Inserisci i tuoi numeri!");
        arrayNumeri[i] = parseInt(arrayNumeri[i]);
       } 
       while(isNaN(arrayNumeri[i]))  
        arrayNumeri[i] = parseInt(arrayNumeri[i]);

        somma += arrayNumeri[i];
    }      
}



