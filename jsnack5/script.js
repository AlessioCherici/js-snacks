let arrayNumeri[];

for(let i = 0; i < 10 ; i++){
    do{
     arrayNumeri[i] = prompt("Inserisci i tuoi numeri!");
     arrayNumeri[i] = parseInt(arrayNumeri[i]);
    } 
    while(isNaN(arrayNumeri[i]))  
     arrayNumeri[i] = parseInt(arrayNumeri[i]);

    }

    let dispari = arrayNumeri.filter(number => {
        return number % 2 !== 0;
      });






