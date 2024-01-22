"use strict";

function init() {

	document.getElementById('all-questions').innerHTML = questions.length;
	showQuestion();
}



function showQuestion() {
	let question = questions[currentQuestion];
	document.getElementById('questionText').innerHTML = question['question'];
	document.getElementById('answer_1').innerHTML = question['answer_1'];  
	document.getElementById('answer_2').innerHTML = question['answer_2'];
	document.getElementById('answer_3').innerHTML = question['answer_3'];
	document.getElementById('answer_4').innerHTML = question['answer_4'];
	
}


function answer(selection) {
	let question = questions[currentQuestion];
	let selectedQuestionNumber = parseInt(selection.slice(-1));
	let isAnswerCorrect = selectedQuestionNumber === question['right_answer'];
	let idOfRightAnswer = `answer_${question['right_answer']}`;

	if (isAnswerCorrect) {
		document.getElementById(selection).parentNode.classList.add('bg-success');
	} 
	else 
	{
		document.getElementById(selection).parentNode.classList.add('bg-danger');
		document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
	}

	document.getElementById('next-button').removeAttribute("disabled");
	// document.getElementById('next-button').disabled = false;

}


function nextQuestion() {
	if (currentQuestion < questions.length) {
		currentQuestion++;
	} else {
		currentQuestion = 0;
	}
	showQuestion();
}