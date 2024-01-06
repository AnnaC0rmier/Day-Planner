// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



var currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd MMM D YYYY'));

var currentTime = dayjs();
$('#currentTime').text(currentTime.format('HH:mm '));


var timeSlots = {
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



// when the user loads the page past present and future are color coded
// each time slot needs to represent an actual time (can i do this based on their id?)
// the function needs to iterate over each time slot to determine if the time is less than greater than or equal to the current time
// if the time is less than the current time they will be given future class
// if greater than they will be given the past class
// otherwise they will be given the pesent class
// i need to make the time slot ids = an actual time 




// idk what to do to assign a time value to each id without creating an individual variable for each





