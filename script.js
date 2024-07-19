'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

// Function to display message
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

// Function to display score
const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


// Message Hint Logic and Score Updater Logic:
    // When player puts no guess
    if (!guess) {
        displayMessage('❌ No Number!')

    // When player wins    
    } else if (guess === secretNumber) {
        displayMessage('✅ Correct Number!');

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber;

        // Display highscore
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When Guess Is Wrong
     } else if(guess !== secretNumber) {
            if(score > 1) {
                displayMessage( guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
                score--;
                displayScore(score);
            } else {
                displayMessage('👾 Game Over!');
                displayScore(score = 0);
            }
        }
});


// Again button - reset the game logic
document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    displayMessage('Start Guessing...')
    displayScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
