const container = document.querySelector('.container');



const numbers = [];



for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 20 + 1));
    const number = document.createElement('div');
    number.innerHTML = numbers[i];
    container.append(number);
}

console.log(numbers)