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
  //
  // TODO: Add code to display the current date in the header of the page.


// sets current date
let currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd MMM D YYYY'));

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

// variable for save button
const saveButton = document.getElementsByClassName('btn');

// variable for text area for todos
const textArea = document.getElementsByClassName('textArea');

// an empty array ill push user input to
let userInput = [''];

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
    else (currentTime.isSame(timeSlots[key].value))
    {
      $element.addClass('present')
    }
  }
}


// when the user types a todo they can click the save button that is next to that time div. this will save the to do in local storage so that
// if they refresh the page, it reloads when they come back
// we need an event listener for the save button, a variable for the textarea, a variable for the user input, and a function that saves it to localstrg
// maybe also an event listener to capture user input



function saveInput(){
  for (let i=0; i < saveButton.length; i++){
    saveButton[i].addEventListener('click', saveInput); {
    let input =(textArea[i].value);
    localStorage.setItem("input", input);
    localStorage.getItem('input', input);

    console.log(input)
    }
  }
}
saveInput()



