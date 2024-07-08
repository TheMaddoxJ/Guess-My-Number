'use strict';

const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);



// Message Hint Logic and Score Updater Logic

    // When player puts no guess
    if (!guess) {
        document.querySelector('.message').textContent = '❌ No Number!';

    // When player wins    
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '✅ Correct Number!';

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

    // When guess is too high    
    } else if (guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = '📈 Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '👾 Game Over!';
            document.querySelector('.score').textContent = 0;
        }
       
    // When guess is too low    
    } else if (guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = '📈 Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '👾 Game Over!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

