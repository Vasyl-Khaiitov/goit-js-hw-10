// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const button = document.querySelector("[data-start]");



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
            window.alert("Please choose a date in the future");
            button.disabled = true; 
        } else {
            button.disabled = false;
        }

        userSelectedDate = selectedDates;

    console.log(selectedDates[0]);
  },
};


flatpickr("#datetime-picker", options);
