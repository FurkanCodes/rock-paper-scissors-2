const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard = {
    player: 0,
    computer: 0
};

// Play game

function play(e) {
    restart.style.display = 'inline-block'; //after game is done, show the restart game button
    const playerChoice = e.target.id; //get what was clicked by "id" and store it in playerChoice
    const computerChoice = getComputerChoice(); // get the computer choice and store it in the function, dont use one function for everyfuckingthing, split it up
    const winner = getWinner(playerChoice, computerChoice); // create a fucntion for the winnter with parametres and assign it to winner
    showWinner(winner, computerChoice);
}

// Get computer's choice
function getComputerChoice() {
    const rand = Math.random(); // just a random math number and store it in rand variable
    if (rand < 0.34) { // if rand variable is lower than 0.34, than it is ROCK, 
        return 'rock';

    } else if (rand <= 0.67) { //if it is lower than or equal to 0.67, than it is PAPER
        return 'paper';
    } else { // if it is not anything from above, then it is SCISSORS
        return 'scissors'
    }
}

// Get winner
function getWinner(p, c) { // p and c stands for player choice and computer choice ( less readable but less clutter)
    if (p === c) {
        return 'draw';
    } else if (p === 'rock') {
        if (c === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'paper') {
        if (c === 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'scissors') {
        if (c === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}


function showWinner(winner, computerChoice) {
        if (winner === 'player') {
            scoreboard.player++;
            result.innerHTML = `
        <h1 class="text-win"> you win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + 
            computerChoice.slice(1)}</strong></p>
        `;
        } else if (winner === 'computer') {
            scoreboard.computer++;
            result.innerHTML = `
        <h1 class="text-lose"> you lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + 
            computerChoice.slice(1)}</strong></p>
        `;
        } else {
            result.innerHTML = `
        <h1> draw </h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + 
            computerChoice.slice(1)}</strong></p>`;
        }
        // show score
        score.innerHTML = `
    <p> Player: ${scoreboard.player} </p>
    <p> COmputer: ${scoreboard.computer} </p>
    `;
        modal.style.display = 'block';
    }
    // restart the gane
function restartGame() {
        scoreboard.player = 0;
        scoreboard.computer = 0;
        score.innerHTML = `
    <p> Player: 0</p>
    <p> Computer: 0</p>
    `;
    }
    // clear modal
function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

//event listeners
choices.forEach(choice => choice.addEventListener('click', play)); // for each choice, listen to the click and call the play funct
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);