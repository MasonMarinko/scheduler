const m = moment();
var tasks= {};
var topTimeEl = document.querySelector("#currentDay");
var list = JSON.parse(localStorage.getItem('toDoTask')) || [];

topTimeEl.textContent = m.format("dddd MMM DD, YYYY")

// due date was clicked
$(".list-group").on('click', "ul",  function () {
    // get current text
    var userInput = $(this).text().trim();
    // create new input element
    var taskInput = $("<input>")
      .addClass("inputarea")
      .attr("type", "text")
      .val(userInput);


    // swap out elements
    $(this).replaceWith(taskInput);

  });






// ===============Saving INFORMATION==================//\


$('.saveBtn').on('click', function(event) {
  event.preventDefault();
  debugger
  // Get the to-do "value" from the textbox and store it as a variable using `.val()` and `.trim()`
  var toDoTask = $(this)
  .siblings(".textarea")
  .children()
  .val();
  // Add the new to-do to our local 'list' variable
  list.push(toDoTask);

  // Update the to-dos on the page
  renderTodos(list);

  // Save the to-dos into localStorage
  // We need to use JSON.stringify to turn the list from an array into a string
  localStorage.setItem('toDoTask', JSON.stringify(list));

});











// ===============RECALLING INFORMATION==================//


 
    function renderTodos(list) {
      debugger
      $('#to-dos').empty();


      for (var i = 0; i < list.length; i++) {

        var toDoItem = $('#list-toDo');
        toDoItem.text(list[i]);
        
      }
    }



renderTodos(list);
























    

  var timeAudit9 = function() {
    var this_row = $(".hour-9")
    var momentInt = parseInt(m.format("HH"));
    var targetRow = this_row.data("hour");
    $(".hour-9-color").removeClass("past present future")
    if (targetRow < momentInt) {
    $(".hour-9-color").addClass("past")
    } else if (targetRow > momentInt) {
      $(".hour-9-color").addClass("future")
    } else if (targetRow === momentInt) {
      $(".hour-9-color").addClass("present")
    }
    timeAudit10()
  }

  var timeAudit10 = function() {
    var this_row = $(".hour-10")
    var momentInt = parseInt(m.format("HH"));
    var targetRow = this_row.data("hour");
    $(".hour-10-color").removeClass("past present future")
    if (targetRow < momentInt) {
    $(".hour-10-color").addClass("past")
    } else if (targetRow > momentInt) {
      $(".hour-10-color").addClass("future")
    } else if (targetRow === momentInt) {
      $(".hour-10-color").addClass("present")
    }
    timeAudit11()
  }

  var timeAudit11 = function() {
    var this_row = $(".hour-11")
    var momentInt = parseInt(m.format("HH"));
    var targetRow = this_row.data("hour");
    $(".hour-11-color").removeClass("past present future")
    if (targetRow < momentInt) {
    $(".hour-11-color").addClass("past")
    } else if (targetRow > momentInt) {
      $(".hour-11-color").addClass("future")
    } else if (targetRow === momentInt) {
      $(".hour-11-color").addClass("present")
    }
    timeAudit12()
  }

  var timeAudit12 = function() {
    var this_row = $(".hour-12")
    var momentInt = parseInt(m.format("HH"));
    var targetRow = this_row.data("hour");
    $(".hour-12-color").removeClass("past present future")
    if (targetRow < momentInt) {
    $(".hour-12-color").addClass("past")
    } else if (targetRow > momentInt) {
      $(".hour-12-color").addClass("future")
    } else if (targetRow === momentInt) {
      $(".hour-12-color").addClass("present")
    }
    timeAudit13()
  }

  var timeAudit13 = function() {
    var this_row = $(".hour-13")
    var momentInt = parseInt(m.format("HH"));
    var targetRow = this_row.data("hour");
    $(".hour-13-color").removeClass("past present future")
    if (targetRow < momentInt) {
    $(".hour-13-color").addClass("past")
    } else if (targetRow > momentInt) {
      $(".hour-13-color").addClass("future")
    } else if (targetRow === momentInt) {
      $(".hour-13-color").addClass("present")
    }
    timeAudit14()
  }

  var timeAudit14 = function() {
    var this_row = $(".hour-14")
    var momentInt = parseInt(m.format("HH"));
    var targetRow = this_row.data("hour");
    $(".hour-14-color").removeClass("past present future")
    if (targetRow < momentInt) {
    $(".hour-14-color").addClass("past")
    } else if (targetRow > momentInt) {
      $(".hour-14-color").addClass("future")
    } else if (targetRow === momentInt) {
      $(".hour-14-color").addClass("present")
    }
    timeAudit15()
  }

  var timeAudit15 = function() {
    var this_row = $(".hour-15")
    var momentInt = parseInt(m.format("HH"));
    var targetRow = this_row.data("hour");
    $(".hour-15-color").removeClass("past present future")
    if (targetRow < momentInt) {
    $(".hour-15-color").addClass("past")
    } else if (targetRow > momentInt) {
      $(".hour-15-color").addClass("future")
    } else if (targetRow === momentInt) {
      $(".hour-15-color").addClass("present")
    }
    timeAudit16()
  }

  var timeAudit16 = function() {
    var this_row = $(".hour-16")
    var momentInt = parseInt(m.format("HH"));
    var targetRow = this_row.data("hour");
    $(".hour-16-color").removeClass("past present future")
    if (targetRow < momentInt) {
    $(".hour-16-color").addClass("past")
    } else if (targetRow > momentInt) {
      $(".hour-16-color").addClass("future")
    } else if (targetRow === momentInt) {
      $(".hour-16-color").addClass("present")
    }
    timeAudit17()
  }

  var timeAudit17 = function() {
    var this_row = $(".hour-17")
    var momentInt = parseInt(m.format("HH"));
    var targetRow = this_row.data("hour");
    $(".hour-17-color").removeClass("past present future")
    if (targetRow < momentInt) {
    $(".hour-17-color").addClass("past")
    } else if (targetRow > momentInt) {
      $(".hour-17-color").addClass("future")
    } else if (targetRow === momentInt) {
      $(".hour-17-color").addClass("present")
    }
    
  }
  
  // timeAudit9();

  // setInterval(function () {
  //   timeAudit9()
  // }, (1000 * 60) * 30);

