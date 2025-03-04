const btnSend = document.getElementById("submit");
const btnRestart = document.getElementById("restart");
const userAnswer = document.getElementById("reponse");
const question = document.getElementById("calcul");
const counter = document.getElementById("count");
const firstForm = document.querySelector(".jeu");
const secondForm = document.querySelector(".result");
var numberQuestion = 0;

const makeQuestion = () => {
	let firstNumber = Math.floor(Math.random() * (100 - 1) + 1);
	let secoNumber = Math.floor(Math.random() * (100 - 1) + 1);
	question.innerHTML = firstNumber + "+" + secoNumber;
	return firstNumber + secoNumber;
};

var result = makeQuestion();

btnSend.addEventListener("click", () => {
	if (userAnswer.value) {
		if (userAnswer.value == result) {
			console.log(userAnswer);
			numberQuestion++;
			result = makeQuestion();
			userAnswer.value = "";
		} else {
			counter.innerHTML = numberQuestion + "";
			firstForm.style.display = "none";
			secondForm.style.display = "flex";
			result = makeQuestion();
			userAnswer.value = "";
		}
	} else {
		alert("Saisisez une valeur correcte");
	}
});

btnRestart.addEventListener("click", (_) => {
	firstForm.style.display = "flex";
	secondForm.style.display = "none";
});
