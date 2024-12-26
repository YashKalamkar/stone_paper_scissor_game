
// VARIABLES TO GET THE HTML ELEMENTS 
let userScore = 0;
let computerScore = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let newGame = document.querySelector("#newGame");
const userScorePara  = document.querySelector("#user_score");
const computerScorePara = document.querySelector("#computer_score");


// FUNCTION TO GET THE COMPUTER CHOICE 
const generateComputerChoice = () => {
    const options = ['rock' , 'paper' , 'scissor'];
    const randomIndex = Math.floor(Math.random() *3);
    return options[randomIndex];
}

// FUNCTION FOR DISPLAYING NEW GAME 
const newGameGenerate = () => {
    userScorePara.innerText = 0;
    userScore = 0;
    computerScorePara.innerText =  0;
    computerScore = 0;
}

// FUNCTION FOR USER WINNING DISPLAY
const userWinCondition = (computerChoice) => {
    msg.innerText = `USER WINS ! COMPUTER CHOOSE : ${computerChoice}`;
    msg.style.backgroundColor = "#5CB85C";
    msg.style.color = "#000";
}

// FUNCTION FOR COMPUTER WINNING DISPLAY
const computerWinConditon = (computerChoice) => {
    msg.innerText = `COMPUTER WINS ! COMPUTER CHOOSE : ${computerChoice}`;
    msg.style.backgroundColor = "#E63946";
    msg.style.color = "#fff";
}

// FUNCTION FOR NEW GAME
newGame.addEventListener("click" , () => {
    newGameGenerate();
    msg.style.backgroundColor = "#1D3557";
    msg.style.color = "#fff";
    msg.innerText = "ALL THE BEST";
})

// FUNCTION FOR DRAW GAME
const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "GAME IS DRAW ";
    msg.style.backgroundColor = "#1D3557";
    msg.style.color = "#fff";
}

//FUNCTION TO SHOW WINNER -> Called in playGame function
const showWinner = (userWin  , computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log(`User Wins ! COMPUTER CHOOSE : ${computerChoice}`);
        userWinCondition(computerChoice);
    }
    else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log(`Computer Wins ! COMPUTER CHOOSE : ${computerChoice}`);
        computerWinConditon(computerChoice);
    }    
}

// FUNCTION FOR ACTUAL GAME  
const playGame = (userChoice) =>{
    console.log(`User Choice is : ${userChoice}`);
    const computerChoice = generateComputerChoice();
    console.log(`Computer Choice is : ${computerChoice}`);

    if(userChoice === computerChoice){
        // Draw Condition
        drawGame();
    }
    else{
        let userWin = true;
        // user choose rock
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }
        // user choose paper
        else if(userChoice === "paper"){
            userWin = computerChoice === "scissor" ? false : true;
        }
        // user chooce scissor
        else{
            userWin = computerScore === "rock" ? false :true;
        }

        showWinner(userWin  , computerChoice);
    }
}

// FUNCTION TO GET THE USER CHOICE
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        // console.log( `choice made is ${userChoice}`);
        playGame(userChoice);
    })
})