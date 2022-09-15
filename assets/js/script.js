const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");

const constStyles = "transform: translate(-97%, -50%)";

let seconds, hours, minutes, time, formatHour;

setInterval(handleAnalogClock, 1000);

function handleAnalogClock() {
  time = new Date();
  seconds = time.getSeconds();
  minutes = time.getMinutes();
  hours = time.getHours();
  formatHour = hours % 12 ? hours % 12 : 0;

  secondsHand.style.cssText = `${constStyles} rotate(${90 + seconds * 6}deg)`;
  minutesHand.style.cssText = `${constStyles} rotate(${90 + minutes * 6}deg)`;
  hoursHand.style.cssText = `${constStyles} rotate(${90 + hours * 30}deg)`;
}

addEventListener("load", handleAnalogClock);
