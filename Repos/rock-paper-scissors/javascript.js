const options = ['Rock', 'Paper' , 'Scissors'];
function getComputerChoice(){
    return options[(Math.floor(Math.random() * 3))];  
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        console.log("It's a draw");
    }
    if (playerSelection=='Rock'){
        if (computerSelection=='Paper'){
            console.log("You lost!");
        }
        else if (computerSelection=='Scissors'){
            console.log("You won!");
        }
    }
    else if (playerSelection=='Paper'){
        if (computerSelection=='Rock'){
            console.log("You won!");
        }
        else if (computerSelection=='Scissors'){
            console.log("You lost!");
        }
    }
    else if (playerSelection=='Scissors'){
        if (computerSelection=='Paper'){
            console.log("You won!");
        }
        else if (computerSelection=='Rock'){
            console.log("You lost!");
        }
    }
  }
let rounds = prompt("how many times do you want to play?")
for (let index = 0; index < rounds; index++) {
    const playerSelection = options[prompt("Rock[0] Paper[1] Scissors[2]")];
    const computerSelection = getComputerChoice();
    console.log("You chose: "+playerSelection);
    console.log("The pc chose: "+ computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}
    