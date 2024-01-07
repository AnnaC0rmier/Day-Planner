// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  
// sets current date
let currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd MMMM D, YY'));


// // sets current Time
let currentTime = dayjs();
$('#currentTime').text(currentTime.format('HH:mm '));


// obj of time slots with their respective ids and time relate values
const timeSlots = {
  nine: {
    id:'hour-9',
    value:dayjs().set('hour', 9)
  },
  ten: {
    id:'hour-10',
    value: dayjs().set('hour', 10)
  },
  eleven: {
    id:'hour-11',
    value: dayjs().set('hour', 11)
  },
  twelve: {
    id:'hour-12',
    value: dayjs().set('hour', 12 )
  },
  one: {
    id:'hour-13',
    value: dayjs().set('hour', 13)
  },
  two: {
    id:'hour-14',
    value: dayjs().set('hour', 14)
  },
  three: {
    id:'hour-15',
    value: dayjs().set('hour', 15)
  },
  four: {
    id:'hour-16',
    value: dayjs().set('hour', 16)
  },
  five: {
    id:'hour-17',
    value: dayjs().set('hour', 17)
  },
}

// variable for text area for events
const textArea = document.getElementsByClassName('description');



// looping through the timeSlots object and identifying how the hour compares to the current hour and adding the correct class.
for (let key in timeSlots) {
  if (timeSlots.hasOwnProperty(key)) {
    const $element = $(`#${timeSlots[key].id}`);
    const slotHour = timeSlots[key].value.hour();  // Extract hour component

    if (currentTime.hour() < slotHour) {
      $element.addClass('future');
    } else if (currentTime.hour() > slotHour) {
      $element.addClass('past');
    } else {
      $element.addClass('present');
    }
  }
}


// An event listener that saves input to local storage when any save button on the page is clicked
const saveBtn = document.querySelectorAll('.btn');

saveBtn.forEach(function (saveBtn) {
  saveBtn.addEventListener('click', function () {
    for (let i = 0; i < textArea.length; i++) {
      localStorage.setItem('user input' + i, textArea[i].value);
    }
  });
});

// Event listener to load saved values from local storage when the page is loaded
window.addEventListener('load', function () {
  for (let i = 0; i < textArea.length; i++) {
    const savedValue = localStorage.getItem('user input' + i);
    textArea[i].value = savedValue;
  }
});
















