"use strict";

let correctAnswers = 0;

function init() {
	document.getElementById('all-questions').innerHTML = questions.length;
	document.getElementById('header-image').src = './src/img/logo.png';
	showQuestion();
}



function showQuestion() {
	if (currentQuestion >= questions.length) {
		document.getElementById('endScreen').style.display = 'unset';
		document.getElementById('questionBody').style.display = 'none';
		document.getElementById('correct-answers').innerHTML = correctAnswers;
		document.getElementById('all-questions-end').innerHTML = questions.length;
		document.getElementById('header-image').src = './src/img/tropy.png';
		document.getElementById('progress-bar').parentNode.classList.add('d-none');
	} 
	else 
	{

		let percent = ((currentQuestion + 1) / questions.length).toFixed(2) * 100;
		let question = questions[currentQuestion];
		document.getElementById('progress-bar').innerHTML = percent;
		document.getElementById('progress-bar').style.width = `${percent}%`;
		document.getElementById('progress-bar').ariaValueNow = `${percent}`;
		document.getElementById('progress-bar').parentNode.classList.remove('d-none');
		document.getElementById('questionText').innerHTML = question['question'];
		document.getElementById('answer_1').innerHTML = question['answer_1'];  
		document.getElementById('answer_2').innerHTML = question['answer_2'];
		document.getElementById('answer_3').innerHTML = question['answer_3'];
		document.getElementById('answer_4').innerHTML = question['answer_4'];
		document.getElementById('question-number').innerHTML = currentQuestion + 1;
	}
}


function answer(selection) {
	let question = questions[currentQuestion];
	let selectedQuestionNumber = parseInt(selection.slice(-1));
	let isAnswerCorrect = selectedQuestionNumber === question['right_answer'];
	let idOfRightAnswer = `answer_${question['right_answer']}`;

	if (isAnswerCorrect) {
		document.getElementById(selection).parentNode.classList.add('bg-success');
		correctAnswers++;
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
	currentQuestion++;
	resetAnswerButtons();
	document.getElementById('next-button').disabled = true;
	showQuestion();
}


function resetAnswerButtons() {
	document.getElementById('answer_1').parentNode.classList.remove('bg-success');
	document.getElementById('answer_2').parentNode.classList.remove('bg-success');
	document.getElementById('answer_3').parentNode.classList.remove('bg-success');
	document.getElementById('answer_4').parentNode.classList.remove('bg-success');
	document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
	document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
	document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
	document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

