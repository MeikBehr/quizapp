"use strict";

function init() {
	document.getElementById('all-questions').innerHTML = questions.length;
	document.getElementById('header-image').src = './src/img/logo.png';
	showQuestion();
}


function updateProgressBar() {
	let percent = Math.round(((currentQuestion + 1) / questions.length) * 100);
	document.getElementById('progress-bar').innerHTML = percent;
	document.getElementById('progress-bar').style.width = `${percent}%`;
	document.getElementById('progress-bar').ariaValueNow = `${percent}`;
	document.getElementById('progress-bar').parentNode.classList.remove('d-none');
}


function showEndScreen() {
	document.getElementById('endScreen').style.display = 'unset';
	document.getElementById('questionBody').style.display = 'none';
	document.getElementById('correct-answers').innerHTML = correctAnswers;
	document.getElementById('all-questions-end').innerHTML = questions.length;
	document.getElementById('header-image').src = './src/img/tropy.png';
	document.getElementById('progress-bar').parentNode.classList.add('d-none');
}


function showNextQuestion() {
	let question = questions[currentQuestion];
	updateProgressBar();
	document.getElementById('questionText').innerHTML = question['question'];
	document.getElementById('answer_1').innerHTML = question['answer_1'];  
	document.getElementById('answer_2').innerHTML = question['answer_2'];
	document.getElementById('answer_3').innerHTML = question['answer_3'];
	document.getElementById('answer_4').innerHTML = question['answer_4'];
	document.getElementById('question-number').innerHTML = currentQuestion + 1;
}


function gameIsOver() {
	return currentQuestion >= questions.length;
}


function showQuestion() {
	gameIsOver() ? showEndScreen() : showNextQuestion();
}


function answerISCorrect(selection) {
	document.getElementById(selection).parentNode.classList.add('bg-success');
	correctAnswers++;
	AUDIO_correct.play();
}


function answerIsWrong(question, selection) {
	let idOfRightAnswer = `answer_${question['right_answer']}`;
	document.getElementById(selection).parentNode.classList.add('bg-danger');
	document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
	AUDIO_wrong.play();
}



function answer(selection) {
	let question = questions[currentQuestion];
	let selectedQuestionNumber = parseInt(selection.slice(-1));
	let isAnswerCorrect = selectedQuestionNumber === question['right_answer'];
	isAnswerCorrect ? answerISCorrect(selection) : answerIsWrong(question, selection);
	document.getElementById('next-button').removeAttribute("disabled");
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



function restartGame() {
	correctAnswers = 0;
	currentQuestion = 0;
	document.getElementById('endScreen').style.display = 'none';
	document.getElementById('questionBody').style.display = 'unset';
	document.getElementById('header-image').src = './src/img/logo.png';
	document.getElementById('progress-bar').parentNode.classList.remove('d-none');
	init();
}