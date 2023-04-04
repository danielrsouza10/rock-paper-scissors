const buttons = document.querySelectorAll('input')
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

function computerPlay() {
    const game = ['rock', 'paper', 'scissors'];
    const computerSelection = Math.floor(Math.random() * game.length);
    return game[computerSelection];
}

function playRound(playerSelection){
    
    let computerSelection = computerPlay();
    gamesPlayed++;
    

    console.log (playerSelection);
    console.log (computerSelection);

    if (playerSelection === computerSelection) {
        console.log('It is a tie!');
        
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        console.log('You win the round! You: ' + playerScore + ' Machine: ' + computerScore);
      
    }
    else {
        computerScore++;
        console.log('The machine wins the round! You: ' + playerScore + ' Machine: ' + computerScore);
     

    }
    if(gamesPlayed > 5){
        console.log('END OF GAME! The Result: You: ' + playerScore + ' ' + computerScore + ' Machine');
        disableButtons();
    }
    // document.getElementById('result').innerHTML = result
    // return
}

function disableButtons(){
    buttons.forEach(elem => {
        elem.disable = true;
    })
}

// let playerScore = playRound;
// console.log(playerScore);



// function gameWinner(score) {
//     const result = score;
//     const playerScore = 0;
//     const computerScore = 0;

//     if (result === 'youWin') {
//         playerScore++;
//         console.log(playerScore + " " + computerScore);
        
//     }
//     else if (result === 'machine') {
//         computerScore++;
//         console.log(playerScore + " " + computerScore);
//     }
//     else {
//         console.log('It is a tie!');
        

//     }
// }






