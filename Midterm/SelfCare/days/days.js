let title = document.getElementById("title")
let button = document.getElementById("newTask")
let allTasks = [
  ["Clean Room", "Meal Prep", "Catch up on Emails", "Write down homework for week", "At least 8 hours of sleep"],
  ["Clean Room", "Go to grocery store", "Do laundry", "Cook a new recipe"],
  ["Clean Room", "Stretch for 30 minutes", "Listen to a new album front to back", "Take a 30 minute walk"],
  ["Watch a new movie", "Do 1 hour of yoga", "Do a face mask"],
  ["Declutter camera roll", "Buy yourself something pretty :)", "30 minute walk outside", "Light a candle"],
  ["Make a fruit smoothie", "Do a hair mask", "Do a 15 minute workout at home", "Check that all homework is done for the week"],
  ["Treat yourself to a bagel from Rosenburg's", "Listen to an informative podcast during a 30 minute walk", "Hang out with friends and be social"]
]

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]
var dayOfWeek
var currentTask = 0

window.onload = function() {
  if (title.innerText == "Sunday") {
    dayOfWeek = 0
  } else if (title.innerText == "Monday") {
    dayOfWeek = 1
  } else if (title.innerText == "Tuesday") {
    dayOfWeek = 2
  } else if (title.innerText == "Wednesday") {
    dayOfWeek = 3
  } else if (title.innerText == "Thursday") {
    dayOfWeek = 4
  } else if (title.innerText == "Friday") {
    dayOfWeek = 5
  } else if (title.innerText == "Saturday") {
    dayOfWeek = 6
  }

  button.addEventListener("click", new_task)
}

function new_task() {
  // console.log("newTask called")

  if (currentTask < allTasks[dayOfWeek].length) {
    var tasklist = document.getElementById("tasklist")
    // console.log(tasklist)

    let nTask = document.createElement("li")
    nTask.innerText = allTasks[dayOfWeek][currentTask]

    // console.log(nTask)

    tasklist.appendChild(nTask)
    currentTask += 1
  } else if (dayOfWeek != 6) {
    console.log(dayOfWeek, daysOfWeek[dayOfWeek+1])
    window.location.pathname = '/days/' + daysOfWeek[dayOfWeek + 1].toLowerCase();
  } else {
    window.location.pathname = '/days/' + daysOfWeek[0].toLowerCase();
  }
}
