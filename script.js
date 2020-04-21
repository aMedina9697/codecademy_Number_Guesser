let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 0;

// Write your code below:

const generateTarget = () => {
    // This function will be called at the start of each new round 
    // generate the new secret target number.
    // This function should return a random integer between 0 and 9.
    let targetNumber = 0;
    targetNumber = Math.floor(Math.random() * 10);
    console.log(targetNumber);
    return targetNumber;
};


const compareGuesses = (userGuess, compGuess, targetNum) => {
    if (userGuess == targetNum) {
        return true;
    }
    else if (compGuess == targetNum) {
        return false;
    }
    if (userGuess == targetNum && compGuess == targetNum) {
        return true;
    }
    else if (userGuess == compGuess) {
        return true;
    }
    if (Math.abs((userGuess - targetNum) < (compGuess - targetNum))) {
        return true;
    }
    else if (Math.abs((userGuess - targetNum) > (compGuess - targetNum))) {
        return false;
    }
};

updateScore = (updateScore) => {
    if (updateScore == 'human') {
        humanScore++;
    }
    if (updateScore == 'computer') {
        computerScore++;
    }
};

advanceRound = () => {
    currentRoundNumber++;
};

updateScore();
generateTarget();
compareGuesses();
advanceRound();
