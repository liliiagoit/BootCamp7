'use strict';

let ul = document.querySelector('ul');

const btnStart = document.querySelector(".js-start").addEventListener('click', waitingTime);
const btnReset = document.querySelector(".js-reset").addEventListener('click', reset);
const btnLap = document.querySelector(".js-take-lap").addEventListener('click', showTime);

let isActive = false;
let someTime;
let id;

const timer = {
   startTime: null,
   deltaTime: null,
   id: null
};

function startTimer() {
   isActive = true;
   if (timer.startTime === null) {
       timer.startTime = Date.now();
   } else {
       timer.startTime = Date.now() - timer.deltaTime;
   }

   id = setInterval(count, 100);

   function count() {
       let currentTime = Date.now();
       timer.deltaTime = currentTime - timer.startTime;
       let someTime = document.querySelector('.js-time').textContent = formatedTime(timer.deltaTime);
   }
};

function formatedTime(time) {
   let milliseconds = Math.floor(time / 100 % 10);
   let seconds = Math.floor(time / 1000 % 60);
   let minutes = Math.floor(time / 1000 / 60 % 60);
   someTime = document.querySelector('.js-time');
   return someTime.textContent = `${minutes < 10 ?` 0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}:${milliseconds}`;
}

function waitingTime() {
   if (!isActive) {
       startTimer();
       document.querySelector('.js-start').textContent = 'Pause';
   } else {
       pauseTimer();
   }
}

function pauseTimer() {
   clearInterval(id);
   isActive = false;
   document.querySelector('.js-start').textContent='Continue';
}

function reset() {
   pauseTimer();
   timer.startTime = 0;
   timer.deltaTime = 0;
   document.querySelector('.js-start').textContent = 'Start';
   someTime = document.querySelector('.js-time');
   someTime.textContent = `00:00:0`;
   ul.innerHTML= "";
}

function showTime() {
   let ul = document.querySelector('ul');
   let li = document.createElement('li');
   li.textContent = someTime.textContent;
   ul.append(li);
}

