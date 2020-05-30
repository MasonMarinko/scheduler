var tasks= {};
var topTimeEl = document.querySelector("#currentDay");
var currentTime = moment();


topTimeEl.textContent = currentTime.format("dddd MMM DD, YYYY")

// due date was clicked
$(".list-group").on('click', "ul",  function () {
    // get current text
    var userInput = $(this).text().trim();
    console.log(userInput)
    // create new input element
    var taskInput = $("<input>")
      .attr("type", "text")
      .val(userInput);


    // swap out elements
    $(this).replaceWith(taskInput);
    console.log(this)
  });



  var auditTask = function () {
    // get time from task element
    // var date = $(taskEl).find("span").text().trim();
    // convert to moment object at 5:00PM
    var time = moment().set("hour", 9);
    // remove any old classes from element
    $(".date-9").removeClass("list-group-item-warning list-group-item-danger");
    if (moment().isAfter(time)) {
      $(taskEl).addClass("list-group-item-danger");
    } else if (Math.abs(moment().diff(time, "days")) <= 2) {
      $(taskEl).addClass("list-group-item-warning");
    }
  };


  














    
    // taskInput.on({
    //   onClose: function () {
    //     // when calendar is closed, force a "change" event on the 'taskInput'
    //     $(this).trigger("change");
    //     console.log(this)
    //   }
    // });
  
    // automatically bring up
    // taskInput.trigger("focus");






  // value of due userInput was changed
$(".list-group").on("blur", "input[type='text']", function () {
    // get current text
    var userInput = $(this)
      .val()
      console.log(userInput)
  
    // // get the parent ul's id attribute
    // var status = $(this)
    //   .closest(".list-group")
    //   .attr("id")
    //   .replace("list-", "");
  
    // // get the task's position in the list of other li elements
    // var index = $(this)
    //   .closest(".listItem")
    //   .index();
  
    // // update task in array and re-save to localstorage
    // tasks[status][index].userInput = userInput;
    // saveTasks();
  
    // // recreate span element with bootstrap classes
    // var taskSpan = $("<li>")
    //   .addClass("badge badge-primary badge-pill")
    //   .text(date);
  
    // // replace input with span element
    // $(this).replaceWith(taskSpan);
  
    // // Pass task's <li> element into auditTask() to check new due date
    // auditTask($(taskSpan).closest(".listItem"));
  })





//   var saveTasks = function () {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };