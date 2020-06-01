const m = moment();
var topTimeEl = document.querySelector("#currentDay");
var list = JSON.parse(localStorage.getItem('newUserInput')) || {};

//======== Date at Top ==============//
topTimeEl.textContent = m.format("dddd MMM DD, YYYY")

//======== User selected input ======//
$(".list-group").on('click', "ul", function () {
  // get current text
  var currentInput = $(this).text().trim();
  // create new input element
  var UserInput = $("<textarea>")
    .addClass("inputarea")
    .attr("type", "text")
    .val(currentInput);
  $(this).replaceWith(UserInput);
});


//======== Button Click Save =======//

$('.saveBtn').on('click', function (event) {
  event.preventDefault();
  var newUserInput = $(this)
    .siblings(".textarea")
    .children()
    .val();
  var activeHour = $(this)
    .siblings(".hour")
    .attr('data-hour');
  list[activeHour] = newUserInput

  localStorage.setItem('newUserInput', JSON.stringify(list));

});

//======== Local Storage Recall  ======//

function activateLocal(list) {
  for (key in list) {
    var toDoItem = $('.hour-' + key + "-color");
    toDoItem.children().text(list[key]);
    checkDates();
  }
}

//===Check dates based on time, change color===//
function checkDates() {
  for (var i = 9; i < 18; i++) {
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

activateLocal(list);

//=====Refresh checkDates() every 30/mins===//
setInterval(function () {
  checkDates()
}, (1000 * 60) * 30);