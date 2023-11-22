/*
   Scrivere un programma che chieda all’utente:
   Il numero di chilometri da percorrere
   Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
   il prezzo del biglietto è definito in base ai km (0.21 € al km)
   va applicato uno sconto del 20% per i minorenni
   va applicato uno sconto del 40% per gli over 65.
   -
*/

// Chiedere Nome e cognome
let fullName = document.getElementById("name").value = prompt("Qual'è il tuo nome e cognome?");
console.log(fullName);
// Chiedere km da percorrere
let km = document.getElementById("km").value = prompt("Quanti km devi percorrere?");
console.log(km);
// Chiedere età passeggero
let eta = document.getElementById("eta").value = prompt("Quanti hanni hai?");
console.log(eta);
// calcolo costo del biglietto per km
const price_ticket = km * (0.21);
console.log(price_ticket);
/* // calcolo costo del biglietto compreso lo sconto */
/* if (eta < 18){ */
/*     const price_minor = (price_ticket - (price_ticket *20 /100)); */
/*     console.log(price_minor); */
/* } else if (eta > 65){ */
/*     const price_over = (price_ticket - (price_ticket *40 /100)); */
/*     console.log(price_over); */
/* } else { */
/*     const price = price_ticket; */
/*     console.log(price); */
/* } */
// funzioni al bottone genera
const generade = document.querySelector("#generade");
generade.addEventListener('click', function () {
    // calcolo costo del biglietto compreso lo sconto
    if (eta < 18) {
        const price_minor = (price_ticket - (price_ticket * 20 / 100));
        console.log(price_minor);
    } else if (eta > 65) {
        const price_over = (price_ticket - (price_ticket * 40 / 100));
        console.log(price_over);
    } else {
        const price = price_ticket;
        console.log(price);
    }

})


