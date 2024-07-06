'use strict';


// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!'

// console.log(document.querySelector('.message').textContent);


const secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!'
    }
});

