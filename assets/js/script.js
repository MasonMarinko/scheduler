const m = moment();
var tasks = {};
var topTimeEl = document.querySelector("#currentDay");
var list = JSON.parse(localStorage.getItem('toDoTask')) || {};

topTimeEl.textContent = m.format("dddd MMM DD, YYYY")

// due date was clicked
$(".list-group").on('click', "ul", function () {
  // get current text
  var userInput = $(this).text().trim();
  // create new input element
  var taskInput = $("<input>")
    .addClass("inputarea")
    .attr("type", "text")
    .val(userInput);
  $(this).replaceWith(taskInput);
});


// ===============Saving INFORMATION==================//

$('.saveBtn').on('click', function (event) {
  event.preventDefault();
  var toDoTask = $(this)
    .siblings(".textarea")
    .children()
    .val();
  var toDoHour = $(this)
    .siblings(".hour")
    .attr('data-hour');
  list[toDoHour] = toDoTask

  localStorage.setItem('toDoTask', JSON.stringify(list));

  renderTodos(list);
});


// ===============RECALLING INFORMATION==================//



function renderTodos(list) {

  for (key in list) {
    var toDoItem = $('.hour-' + key + "-color");
    toDoItem.children().text(list[key]);
    checkDates();
  }
}

renderTodos(list);

function checkDates() {

  for (var i = 9; i < 18 ; i++) {
    var currentTime = $(".hour-" + i).data("hour");
    var momentInt = parseInt(m.format("HH"))
    $(".hour-" + i + "-color").removeClass("past present future")
    if (currentTime < momentInt) {
      $(".hour-" + i + "-color").addClass("past")
    } else if (currentTime > momentInt) {
      $(".hour-" + i + "-color").addClass("future")
    } else if (currentTime === momentInt) {
      $(".hour-" + i + "-color").addClass("present")
    }
  }
}



// setInterval(function () {
//   timeAudit9()
// }, (1000 * 60) * 30);