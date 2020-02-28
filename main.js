const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock'){
    return userInput;
  }
  else if(userInput === 'paper'){
    return userInput;
  }
  else if(userInput === 'scissors'){
    return userInput;
  }
  else if (userInput === 'bomb'){
    return userInput;
  }
  else {
    console.log('Invalid response');
  }
}

var choice = getUserChoice('Rock')

const getComputerChoice = () => {
var randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber){
  case 0:
  return 'rock';
    break;
  case 1: 
  return 'paper';
    break;
  case 2:
  return 'scissors';
    break;
}
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'The game is a tie!';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}

  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer won!'
    } else{
      return 'You won!'
    }
  }
    
    if (userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  if (userChoice === 'bomb'){
    return 'You win!';
  }
};

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}`);
  console.log(`The computer chose: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
determineWinner
