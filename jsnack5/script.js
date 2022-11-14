let arrayNumeri = [];

for(let i = 0; i < 6 ; i++){
    do{
     arrayNumeri[i] = prompt("Inserisci i tuoi numeri!");
     arrayNumeri[i] = parseInt(arrayNumeri[i]);
    } 
    while(isNaN(arrayNumeri[i]))  
     arrayNumeri[i] = parseInt(arrayNumeri[i]);
    }

    let dispari = arrayNumeri.filter(arrayNumeri => {
        return arrayNumeri % 2 !== 0;
      });

      console.log(dispari);






