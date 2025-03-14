
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const button = document.querySelector("[data-start]");
const input = document.querySelector("#datetime-picker")
const daySpan = document.querySelector("[data-days]");
const hoursSpan = document.querySelector("[data-hours]");
const minutesSpan = document.querySelector("[data-minutes]");
const secondSpan = document.querySelector("[data-seconds]");

button.addEventListener("click", startTick);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

button.disabled = true;

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = new Date();

    if (selectedDate < now) {

      iziToast.show({
        title: "Error",
        message: "Please choose a date in the future",
        position: "topRight",
        color: "red"
      });
      
      button.disabled = true;
    } else {
      button.disabled = false;
    }

    userSelectedDate = selectedDate;

    console.log(selectedDates[0]);
  },
};


flatpickr("#datetime-picker", options);

// Start tictic
function startTick() {
  dontClic();
  const interValid = setInterval(() => {
    const now = new Date();
    const ms = userSelectedDate - now;

    if (ms >= 0) {
      const time = convertMs(ms);
      updateClockFace(time);
    
    }
    else {
      clearInterval(interValid)
      onClick();  
    }

  }, 1000)
}




function dontClic() {
  button.disabled = true;
  input.disabled = true;
}

function onClick() {
  button.disabled = false;
  input.disabled = false;
}

function updateClockFace({ days, hours, minutes, seconds }) {
  daySpan.textContent = addLeadingZero(days);
  hoursSpan.textContent = addLeadingZero(hours);
  minutesSpan.textContent = addLeadingZero(minutes);
  secondSpan.textContent = addLeadingZero(seconds);

}

 function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
