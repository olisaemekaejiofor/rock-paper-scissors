let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convertToWord(letter){
	if (letter == 'r') return "Rock";
	if (letter == 'p') return "Paper";
	return "Scissors"
}

function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `You won🔥, computer chose ${convertToWord(computerChoice)}`;
}

function loose(userChoice, computerChoice){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `You lost😭, computer chose ${convertToWord(computerChoice)}`;
}

function draw(userChoice, computerChoice){
	result_p.innerHTML = `Its a Draw!!, computer chose ${convertToWord(computerChoice)}`;
}

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			loose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function start() {

	rock_div.addEventListener('click', function(){
		game("r");
	})

	paper_div.addEventListener('click', function(){
		game("p");
	})

	scissors_div.addEventListener('click', function(){
		game("s");
	})
}

start();