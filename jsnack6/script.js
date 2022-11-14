let numCPU = Math.floor(Math.random() * 10);
document.getElementById("numerocpu").innerHTML = numCPU;
let numPlayer = prompt("Inserisci il numero! (da 0 a 9)");
document.getElementById("numeroutente").innerHTML = numPlayer;

if (numPlayer == numCPU){
    document.getElementById("risultato").innerHTML = "Hai vinto!";
    document.getElementById("risultato").classList.add("text-success");
}

else {
    document.getElementById("risultato").innerHTML = "Hai perso :C";
    document.getElementById("risultato").classList.add("text-danger");
    
}





