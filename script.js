// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  


// sets current date
let currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd MMMM D YY'));


// sets current Time
let currentTime = dayjs();
$('#currentTime').text(currentTime.format('HH:mm '));


// sets current hour -- may be used later if not delete
let currentHour = dayjs().format('HH');



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



// looping through the timeSlots object and identifying how the value compares to the current time and adding the correct class.
// need to go in and get "present time" class working. currently its only displaying past and future
for (let key in timeSlots){
  if(timeSlots.hasOwnProperty(key)){
    const $element = $(`#${timeSlots[key].id}`);

    if (currentTime.isBefore(timeSlots[key].value)){
      $element.addClass('future');
    }
    else if (currentTime.isAfter(timeSlots[key].value)){
      $element.addClass('past')
    }
    else if (currentTime.isSame(timeSlots[key].value))
    {
      $element.addClass('present')
    }
  }
}

  
// An event listener that saves input to local storage when any save button on the page is clicked

const saveBtn = document.querySelectorAll('.btn');

saveBtn.forEach(function(saveBtn){
 saveBtn.addEventListener('click', function(){
   for(let i=0; i < textArea.length; i++){
     localStorage.setItem('user input' + i, textArea[i].value);
   }

   window.addEventListener('load', function () {
    for (let i = 0; i < textArea.length; i++) {
      const savedValue = localStorage.getItem('user input' + i);
      textArea[i].value = savedValue;
    }
  });
})
 })
















