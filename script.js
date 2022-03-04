const container = document.querySelector('.container');



const numbers = [];



for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 20 + 1));
    const numberElements = document.createElement('div');
    numberElements.innerHTML = numbers[i];
    container.append(numberElements);
}

console.log(numbers)

setTimeout(hideNumbers, 30000);



function hideNumbers() {
    const numberElements = document.querySelectorAll('.container > div');
    numberElements.forEach(numberElements => numberElements.classList.add('hide'));

}