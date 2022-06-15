'use strict';

// Assigning variables
//Buttons
const starBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const pauseBtn = document.getElementById('pause-btn');

const plusSessionBtn = document.querySelector('.plus-session');
const minusSessionBtn = document.querySelector('.minus-session');
const plusBreakBtn = document.querySelector('.plus-break');
const minusBreakBtn = document.querySelector('.minus-break');

//Element Display
const sessionValueEl = document.querySelector('.session-time');
const breakValueEl = document.querySelector('.break-time');

const pomodorotimerEl = document.getElementById('pomodoro-timer');

let pomodoroTimer = 0;
let sessionTimer = 25;
let breakTimer = 5;

// Control Buttons
plusSessionBtn.addEventListener('click', function () {
	sessionTimer++;
	sessionValueEl.textContent = sessionTimer;
});

minusSessionBtn.addEventListener('click', function () {
	sessionTimer--;
	sessionValueEl.textContent = sessionTimer;
});

plusBreakBtn.addEventListener('click', function () {
	breakTimer++;
	breakValueEl.textContent = breakTimer;
});

minusBreakBtn.addEventListener('click', function () {
	breakTimer--;
	breakValueEl.textContent = breakTimer;
});

starBtn.addEventListener('click', function () {
	console.log('Start');
});
resetBtn.addEventListener('click', function () {
	console.log('Reset');
});
pauseBtn.addEventListener('click', function () {
	console.log('Pause');
});
