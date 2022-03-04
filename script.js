const container = document.querySelector('.container');
const output = document.querySelector('.output');
const eleTimer = document.querySelector('#timer');

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

setInterval(timer,1000);

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

    if(score == AMOUNT_OF_NUMBERS) {
        output.innerHTML = (`Complimenti! hai ricordato tutti i numeri!`);

    }else if(score == 1) {
        output.innerHTML = (`hai ricordato correttamente ${score} numero`);

    }else {
        output.innerHTML = (`hai ricordato correttamente ${score} numeri`);
    }
}


function timer() {
    for (let timeCount = 30; timeCount <= 0; timeCount--) {
        eleTimer.innerHTML = `timer: ${timeCount}`
        
    }

}