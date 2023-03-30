// Write a program on the console that you can play against the computer the game Rock-Paper-Scissors

// What I need:

// a function that ask the human what is his choice: Rock or Paper or Scissors

// function playerSelection() {

//     let i = 0;

//     while (i === 0) {

//         let playerChoice = prompt("Choose Rock, Paper or Scissors");

//         //Standarizing the answer
//         playerChoice = playerChoice.toUpperCase();
//         // console.log(playerChoice);

//         if (playerChoice === "ROCK") {
//             i++;
//             return playerChoice;
//         } else if (playerChoice === "PAPER") {
//             i++;
//             return playerChoice;
//         } else if (playerChoice === "SCISSORS") {
//             i++;
//             return playerChoice;
//         } else {
//             console.log("Your choice is not valid");
//         }

//     }
// }

// // a function that randonly select for the computer one of the options: Rock or Paper or Scissors

// function computerSelection() {

//     //Choose randonly from an array
//     const choices = ["ROCK", "PAPER", "SCISSORS"];
//     const randomChoice = Math.floor(Math.random() * choices.length);
//     const computerChoice = choices[randomChoice];
//     //Showing the random choice;
//     // console.log(choices[randomChoice]);

//     return computerChoice;
// }

function playGame() {

    let i = 0;
    let playerChoice = "";
    let computerPoints = 0;
    let playerPoints = 0;

// best of five
    while (playerPoints < 3 && computerPoints <3) {

        i=0;
// validating the answer of the user
        while (i === 0) {

            playerChoice = prompt("Choose Rock, Paper or Scissors");

            //Standarizing the answer
            playerChoice = playerChoice.toUpperCase();
            // console.log(playerChoice);

            if (playerChoice === "ROCK") {
                i++;

            } else if (playerChoice === "PAPER") {
                i++;

            } else if (playerChoice === "SCISSORS") {
                i++;

            } else {
                console.log("Your choice is not valid");
            }

        }
// get the computer's choice        
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        const randomChoice = Math.floor(Math.random() * choices.length);
        const computerChoice = choices[randomChoice];



// who wins the round?
        if (playerChoice === computerChoice) {
            console.log("It's a tie!!")
            console.log("You " + playerPoints);
            console.log("Computer " + computerPoints);
        } else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
            console.log("You lose! Paper wins over Rock")
            computerPoints++;
            console.log("You " + playerPoints);
            console.log("Computer " + computerPoints);
        } else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
            console.log("You lose! Scissors wins over Paper")
            computerPoints++;
            console.log("You " + playerPoints);
            console.log("Computer " + computerPoints);
        } else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
            console.log("You lose! Rock wins over Scissors")
            computerPoints++;
            console.log("You " + playerPoints);
            console.log("Computer " + computerPoints);
        } else {
            playerPoints++;
            console.log("You win!")
            console.log("You " + playerPoints);
            console.log("Computer " + computerPoints);
        }
// after best of 5
    }
    if (computerPoints > playerPoints){
        console.log("The computer wins the game!");
        console.log("YOU " + playerPoints + " x " + computerPoints + " COMPUTER");
    } else {
        console.log("You win the game!")
        console.log("YOU " + playerPoints + " x " + computerPoints + " COMPUTER");
    }
}



// function game(x, y) {

//     let computerPoints = 0;
//     let playerPoints = 0;

//     console.log("You: " + x);
//     console.log("Computer: " + y);

//     if (x === y) {
//         console.log("It's a tie!!")
//     } else if (x === "ROCK" && y === "PAPER") {
//         console.log("Paper wins over Rock")
//         computerPoints++;
//         console.log("You " + playerPoints);
//         console.log("Computer " + computerPoints);
//     } else if (x === "PAPER" && y === "SCISSORS") {
//         console.log("Scissors wins over Paper")
//         computerPoints++;
//         console.log("You " + playerPoints);
//         console.log("Computer " + computerPoints);
//     } else if (x === "SCISSORS" && y === "ROCK") {
//         console.log("Rock wins over Scissors")
//         computerPoints++;
//         console.log("You " + playerPoints);
//         console.log("Computer " + computerPoints);
//     } else {
//         playerPoints++;
//         console.log("You " + playerPoints);
//         console.log("Computer " + computerPoints);
//     }


//     return [playerPoints, computerPoints];


// }

// // a function that match the choices of each one and elect a winner (or a tie)

// // a loop to execute the game 5 times

// // a message on the console that shows the current score of each player