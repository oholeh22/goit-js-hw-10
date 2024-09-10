import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let selectedDate;
let clockTimer;

const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');
const startBtn = document.querySelector(".js-start");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date().getTime() > selectedDates[0].getTime()) {
      window.alert("Please choose a date in the future");
      showErrorToast(); 
      startBtn.disabled = true; 
    } else {
      selectedDate = selectedDates[0]; 
      startBtn.disabled = false; 
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  flatpickr("#datetime-picker", options);

  startBtn.addEventListener("click", () => {
    console.log("Start button clicked");

    if (selectedDate) {
      startBtn.disabled = true;
      clockTimer = setInterval(() => {
        const now = new Date().getTime();
        const difference = selectedDate.getTime() - now;
        
        if (difference < 1000) {
          clearInterval(clockTimer);
          updateTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          console.log("Timer ended");
        } else {
          const time = convertMs(difference);
          console.log("Time left:", time);
          updateTimer(time);
        }
      }, 1000);
    } else {
      showErrorToast(); 
    }
  });
});

const showErrorToast = () => {
  iziToast.error({
    title: 'Error',
    message: 'Please choose a date in the future',
    position: 'topRight',
    color: '#ef4040',
    titleColor: '#fff',
    titleSize: '16px',
    titleLineHeight: '150%',
    messageColor: '#fff',
    messageSize: '16px',
    messageLineHeight: '150%',
  });
};

const addZero = (num) => (num < 10 ? `0${num}` : num);

function updateTimer({ days, hours, minutes, seconds }) {
  if (timerDays) timerDays.textContent = addZero(days);
  if (timerHours) timerHours.textContent = addZero(hours);
  if (timerMinutes) timerMinutes.textContent = addZero(minutes);
  if (timerSeconds) timerSeconds.textContent = addZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

  