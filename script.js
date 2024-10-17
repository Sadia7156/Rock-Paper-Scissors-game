let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice'); // Changed to '.choice'
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const drawGame = () => {
    console.log('Game was a draw');
    msg.innerText = 'Game was a draw. Play again.';
    msg.style.backgroundColor = '#081b31';
}

let genCompChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log('You win!');
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log('You lose');
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}

const playgame = (userChoice) => {
    console.log('User choice =', userChoice);
    const compChoice = genCompChoice();
    console.log('Computer choice =', compChoice);

    if (userChoice === compChoice) {
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'scissor' ? false : true;
        } else {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playgame(userChoice);
    });
});
