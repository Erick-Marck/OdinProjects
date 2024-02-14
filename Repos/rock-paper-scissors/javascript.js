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

function choses(playerSelection){
    const computerSelection = getComputerChoice();
    console.log("You chose: "+playerSelection);
    console.log("The pc chose: "+ computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    const playerSelection = options[0];
    choses(playerSelection)
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    const playerSelection = options[1];
    choses(playerSelection)
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    const playerSelection = options[2];
    choses(playerSelection)
});
