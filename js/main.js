/* /* */
/*    Scrivere un programma che chieda all’utente: */
/*    Il numero di chilometri da percorrere */
/*    Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del bigli *///etto di viaggio, secondo le seguenti regole:
/*    il prezzo del biglietto è definito in base ai km (0.21 € al km) */
/*    va applicato uno sconto del 20% per i minorenni */
/*    va applicato uno sconto del 40% per gli over 65. */
/*    - */
/* */
/*  */
/* // Chiedere Nome e cognome */
/* let fullName = document.getElementById("name").value = prompt("Qual'è il tuo nome e cognome?"); */
/* console.log(fullName); */
/* // Chiedere km da percorrere */
/* let km = document.getElementById("km").value = prompt("Quanti km devi percorrere?"); */
/* console.log(km); */
/* // Chiedere età passeggero */
/* let eta = document.getElementById("eta").value = prompt("Quanti hanni hai?"); */
/* console.log(eta); */
/* // calcolo costo del biglietto per km */
/* const price_ticket = km * (0.21); */
/* console.log(price_ticket); */
// calcolo costo del biglietto compreso lo sconto
/* if (eta < 18){ */
/*     const price_minor = (price_ticket - (price_ticket *20 /100)) */
/*     console.log(price_minor); */
/* } else if (eta > 65){ */
/*     const price_over = (price_ticket - (price_ticket *40 /100)); */
/*     console.log(price_over); */
/* } else { */
/*     const price = price_ticket; */
/*     console.log(price); */
/* } */
/* // funzioni al bottone genera */
/* const generade = document.querySelector("#generade"); */
/* generade.addEventListener('click', function () { */
/*     // calcolo costo del biglietto compreso lo sconto */
/*     if (eta < 18) { */
/*         const price_minor = (price_ticket - (price_ticket * 20 / 100)); */
/*         console.log(price_minor); */
/*     } else if (eta > 65) { */
/*         const price_over = (price_ticket - (price_ticket * 40 / 100)); */
/*         console.log(price_over); */
/*     } else { */
/*         const price = price_ticket; */
/*         console.log(price); */
/*     } */
/*  */
/* }) */
/* const priceElement = document.querySelector("#price") */
/* priceElement.innerHTML = generade + "€" */

document.querySelector('#generade').addEventListener('click', function () {

    console.log(document.querySelector('#name').value);
    const full_name = document.querySelector('#name').value;
    document.querySelector('#name-passeggero').innerHTML = full_name;

})
document.querySelector('#generade').addEventListener('click', function () {
    const km = document.querySelector('#km').value * 0.21;
    const eta = document.querySelector('#eta').value;
    const carriage = Math.floor(Math.random() * 10);
    const cp = Math.floor(Math.random() * 100001);

    if (eta < 18) {
        const price_minor = (km - (km * 20 / 100));
        document.querySelector("#price").innerHTML = price_minor + '€';
        document.querySelector('#ticket').innerHTML = 'Biglietto aggevolato';
        document.querySelector('#carriage').innerHTML = carriage;
        document.querySelector('#cp').innerHTML = cp;

    } else if (eta > 65) {
        const price_over = (km - (km * 40 / 100));
        document.querySelector("#price").innerHTML = price_over + '€';
        document.querySelector('#ticket').innerHTML = 'Biglietto aggevolato';
        document.querySelector('#carriage').innerHTML = carriage;
        document.querySelector('#cp').innerHTML = cp;

    } else {
        document.querySelector("#price").innerHTML = km + '€';
        document.querySelector('#ticket').innerHTML = 'Biglietto standard';
        document.querySelector('#carriage').innerHTML = carriage;
        document.querySelector('#cp').innerHTML = cp;
    }

})

