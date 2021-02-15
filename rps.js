const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {  return userInput;
  } else {
  console.log('Error!');
}
}

const getComputerChoice = () => { 
  const randomNumber = Math.floor(Math.random() * 3);
 switch (randomNumber) {
   case 0:
   return 'rock';
   case 1:
   return 'paper';
   case 2:
   return 'scissors';
 }
  
}

const determineWinner = (getUserChoice, getComputerChoice) => {
  if (getUserChoice === getComputerChoice) {
    return 'The game is a Tie!';
  } if (getUserChoice === 'bomb') {
    return 'BOOM! You Win';
  }
 if(getUserChoice === 'rock') {
  if(getComputerChoice === 'paper') {
    return 'You lose!';
  } else {
    return 'Congratulations, you won!';
  }
}
if (getUserChoice === 'paper') {
  if(getComputerChoice === 'scissors') {
    return 'You Lose!';
  } else {
    return 'Congratulations, you won!';
  }
}
if (getUserChoice === 'scissors') {
  if (getComputerChoice === 'rock') {
    return 'You Lose!';
  } else {
    return 'Congratualtions, you won!';
  }
} 
}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You Threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

