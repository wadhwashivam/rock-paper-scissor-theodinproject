//Computer Choice
function computerChoice(){    
    let random = Math.floor(Math.random()*3) +1
    if (random == 1){
        choice = "Rock";
    }else if (random == 2){
        choice = "Paper";
    }else{
        choice = "Scissor";
    }
    return choice;
}

// Human Choice
function getHumanChoice(){
    let humanChoice = prompt("Rock or Paper or Scissor:").toUpperCase();
    
    return humanChoice;
}

//Scores
let humanScore = 0;
let computerScore = 0;

//PlayRound
function playRound(getHumanChoice, computerChoice){
    if (getHumanChoice == "ROCK" && computerChoice == "Rock" || getHumanChoice == "PAPER" && computerChoice == "Paper" || getHumanChoice == "SCISSOR" && computerChoice == "Scissor"){
        console.log("Tie.");
    } else if (getHumanChoice == "ROCK" && computerChoice == "Paper"){
        console.log("You Lose! Paper beats Rock.");
        computerScore++;
    } else if (getHumanChoice == "PAPER" && computerChoice == "Rock"){
        console.log("You Win! Paper beats Rock.");
        humanScore++;
    }else if (getHumanChoice == "ROCK" && computerChoice == "Scissor"){
        console.log("You Win! Rock beats Scissor.");
        humanScore++;
    } else if (getHumanChoice == "SCISSOR" && computerChoice == "Rock"){
        console.log("You Lose! Rock beats Scissor.");
        computerScore++;
    }else if (getHumanChoice == "SCISSOR" && computerChoice == "Paper"){
        console.log("You Win! Scissor beats Paper");
        humanScore++;
    } else if (getHumanChoice == "PAPER" && computerChoice == "Scissor"){
        console.log("You Lose! Scissor beats Paper.");
        computerScore++;
    }
}

// //PlayGame
// function playGame(){
//     for (let currentRound = 1; currentRound <= 5; currentRound++){
//         let computerSelection = computerChoice();
//         let humanSelection = getHumanChoice();
//         playRound(humanSelection, computerSelection);
//     }
//     if (humanScore > computerScore){
//         console.log("Human Wins the Game!"); 
    
//     }else if (computerScore > humanScore){
//         console.log("Computer Wins the Game!");
//     } else {
//         console.log("The Game is a Tie!");
//     }   
// }

// PlayGame
function playGame(){
    let computerSelection = computerChoice();
    let humanSelection = getHumanChoice();
    playRound(humanSelection,computerSelection);

    let computerSelection2 = computerChoice();
    let humanSelection2 = getHumanChoice();
    playRound(humanSelection2,computerSelection2);

    let computerSelection3 = computerChoice();
    let humanSelection3 = getHumanChoice();
    playRound(humanSelection3,computerSelection3);

    let computerSelection4 = computerChoice();
    let humanSelection4 = getHumanChoice();
    playRound(humanSelection4,computerSelection4);

    let computerSelection5 = computerChoice();
    let humanSelection5 = getHumanChoice();
    playRound(humanSelection5,computerSelection5);

    if (humanScore > computerScore){
        console.log("Human Wins the Game!"); 
    }else if (computerScore > humanScore){
        console.log("Computer Wins the Game!");
    } else {
        console.log("The Game is a Tie!");
    }
}


playGame();