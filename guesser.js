let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  const userChoice = Math.abs(targetNumber - humanGuess);
  const computerChoice = Math.abs(targetNumber - computerGuess);
  
  return userChoice <= computerChoice;
   }

const updateScore = winner => {
    if (winner === 'human') {
      humanScore ++;
    } else if (winner === 'computer') {
      computerScore ++;
    }
}

const advanceRound = () => {
  currentRoundNumber ++;
}

