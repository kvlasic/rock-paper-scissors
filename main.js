const prepareUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log("Please type in rock, paper or scissors.");
    }
}

const getComputerChoice = () => {
    const computerInput = (Math.floor(Math.random() * 3))
    switch (computerInput) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {

    if (userChoice === computerChoice) {
        return "It's a tie.";
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'You lost.'
        } else {
            return 'You won.'
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'You lost.'
        } else {
            return 'You won.'
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'You lost.'
        } else {
            return 'You won.'
        }
    }

    if (userChoice === 'bomb') {
        return 'You won.'
    }
};

const playGame = (choice) => {
    const userChoice = prepareUserChoice(choice);

    const computerChoice = getComputerChoice();

    document.getElementById("userChoice").innerText = userChoice;
    document.getElementById("computerChoice").innerText = computerChoice;
    document.getElementById("result").innerText = determineWinner(userChoice, computerChoice);
}