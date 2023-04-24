//Code for the HTML
const score = document.querySelector('#score');
const roundWinner = document.createElement('p');
const result = document.createElement('p');
const totalGames = document.createElement('p');
const finalResult = document.createElement('h1');

score.appendChild(roundWinner);
score.appendChild(result);
score.appendChild(totalGames);
score.appendChild(finalResult);

//Code for the game
const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerPoints = 0;
let computerPoints = 0;
let gamesPlayed = 0;
let playerChoice = 0;

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');
const buttons = document.querySelectorAll('button');

//for each button, the function(e) will store the value of innerHTML for the button that was pressed and store in the variable playerChoice
buttons.forEach((button) =>
    button.addEventListener('click', function (e) {
        playerChoice = e.target.innerHTML;
        
    })
)

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);



function computerSelection() {
    //Math.floor round the element to an integer and Math.random select randomly from the array length
    let chooseRandom = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[chooseRandom];
    return computerChoice;
}

function playRound() {
    //execute the function computerSelection and store in the variable
    let computerChoice = computerSelection();

    if (playerChoice === computerChoice) {
        roundWinner.textContent = "Thats a DRAW!";
        result.textContent = "SCORE => You " + playerPoints + " X " + computerPoints + " Machine.";

    } else {
        if (playerChoice === "PAPER" && computerChoice === "ROCK") {
            playerPoints++;
            roundWinner.textContent = "You win the round! PAPER wins over ROCK.";
        } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
            playerPoints++;
            roundWinner.textContent = "You win the round! ROCK wins over SCISSORS.";
        } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
            playerPoints++;
            roundWinner.textContent = "You win the round! SCISSORS wins over PAPER.";
        } else {
            roundWinner.textContent = "You lose the round! " + computerChoice + " wins over " + playerChoice + ".";
            computerPoints++;
        }
        result.textContent = "SCORE => You " + playerPoints + " X " + computerPoints + " Machine.";


    }
    gamesPlayed++;
    totalGames.textContent = " Games Played: " + gamesPlayed;
}




