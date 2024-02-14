const options = ['Rock', 'Paper' , 'Scissors'];
function getComputerChoice(){
    return options[(Math.floor(Math.random() * 3))];  
}

function playRound(playerSelection, computerSelection) {
    const content = document.createElement("h1");
    content.classList.add("content");
    const existingContent = document.querySelector(".content");
    
    if (existingContent) {
        existingContent.remove();
    }
    if (playerSelection == computerSelection){
        content.textContent = "It's a draw";
    }
    if (playerSelection=='Rock'){
        if (computerSelection=='Paper'){
            content.textContent = "You lost!";
        }
        else if (computerSelection=='Scissors'){
            content.textContent = "You won!";
        }
    }
    else if (playerSelection=='Paper'){
        if (computerSelection=='Rock'){
            content.textContent = "You won!";
        }
        else if (computerSelection=='Scissors'){
            content.textContent = "You lost!";
        }
    }
    else if (playerSelection=='Scissors'){
        if (computerSelection=='Paper'){
            content.textContent = "You won!";
        }
        else if (computerSelection=='Rock'){
            content.textContent = "You lost!";
        }
    }
    document.getElementById("content").appendChild(content);
}

function choses(playerSelection){
    const computerSelection = getComputerChoice();
    console.log("You chose: "+playerSelection);
    console.log("The pc chose: "+ computerSelection);
    playRound(playerSelection, computerSelection);
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
