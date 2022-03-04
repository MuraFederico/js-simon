const container = document.querySelector('.container');
const output = document.querySelector('.output');


const arrNumbers = [];
const AMOUNT_OF_NUMBERS = 5;
let score = 0;

/////////// GENERAZIONE NUMERI ///////////

for (let i = 0; i < AMOUNT_OF_NUMBERS; i++) {
    arrNumbers.push(Math.floor(Math.random() * 20 + 1));
    const numberElements = document.createElement('div');
    numberElements.innerHTML = arrNumbers[i];
    container.append(numberElements);
}

console.log(arrNumbers)

setTimeout(delayedActions, 30000);



function delayedActions() {
    /////////// RIMOZIONE NUMERI DALLA PAGINA ///////////
    const numberElements = document.querySelectorAll('.container > div');
    numberElements.forEach(numberElements => numberElements.classList.add('hide'));

    /////////// RICHIESTA NUMERI E CONTROLLO ///////////

    for (let i = 0; i < AMOUNT_OF_NUMBERS; i++) {
        
        const userNumber = parseInt(prompt('inserisci un numero alla volta'));
        if (userNumber == arrNumbers[i]) {
            score += 1;
        }
    }
    output.innerHTML = (`hai ricordato correttamente ${score} numeri`)
}
