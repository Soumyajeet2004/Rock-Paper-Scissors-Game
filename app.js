let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSco = document.querySelector("#user-score");
const compSco = document.querySelector("#comp-score");
const newGameButton=document.querySelector("#newbt");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomId = Math.floor(Math.random()*3);
    return options[randomId];
}

const drawGame = (userChoice,compChoice) =>{
    console.log("The game is drawn .");
    msg.innerText = `Game Drawn ! Because Of Your "${userChoice}" And computer's "${compChoice}" Are Same !!!`;
    msg.style.backgroundColor = "blue" ;
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin === true){
        console.log("User is the Winner");
        userScore++;
        userSco.innerText = userScore ;
        msg.innerText = `You Win ! Your "${userChoice}" beats Computer's "${compChoice}" !!!`;
        msg.style.backgroundColor = "green" ;
    }
    else{
        console.log("Computer is the winner .Better luck next time...");
        compScore++ ;
        compSco.innerText = compScore ;
        msg.innerText = `You Lose ! Computer's "${compChoice}" beats Your "${userChoice}" !!!`;
        msg.style.backgroundColor = "red" ;
    }
}

const playGame = (userChoice) =>{
    console.log("User Choice=",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is = ",compChoice);

    if(userChoice === compChoice){
        drawGame(userChoice,compChoice);
    }
    else{
        let userWin = true ;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false ;
        }
        else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const resetButton = () => {
    userScore = 0;
    compScore = 0;
    document.querySelector("#user-score").innerText = userScore ;
    document.querySelector("#comp-score").innerText = compScore ;
    msg.innerText = "Play your move" ;
    msg.style.backgroundColor = "rgb(0, 83, 83)" ;
}

newGameButton.addEventListener("click",resetButton);