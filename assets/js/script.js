var tasks= {};
var topTimeEl = document.querySelector("#currentDay");
var currentTime = moment();

topTimeEl.textContent = currentTime.format("dddd MMM DD, YYYY")

// due date was clicked
var inputInfo =$(".list-group").on('click', "ul",  function () {
    // get current text
    var userInput = $(this).text().trim();
    // debugger
  
    // create new input element
    var taskInput = $("<input>")
      .attr("type", "text")
      .val(userInput);
  
    // swap out elements
    $(this).replaceWith(taskInput);
  
    // enable jquery ui datepicker
    taskInput.on({
      onClose: function () {
        // when calendar is closed, force a "change" event on the 'taskInput'
        $(this).trigger("change");
      }
    });
  
    // automatically bring up
    taskInput.trigger("focus");
  });







  // value of due userInput was changed
$(".saveBtn").on("click", function (inputInfo) {
  // debugger;
    // get current text
    // var userInput = $(this)
    //   .val()
  
    // get the parent ul's id attribute
    var status = $(this)
      .closest(".list-group")
      .attr("class")
      .replace("list-item", "");
  
    // get the task's position in the list of other li elements
    var index = $(this)
      .closest(".list-item")
      .index();
  
    // update task in array and re-save to localstorage
    tasks[status][index].userInput = userInput;
    saveTasks();
  
    // recreate span element with bootstrap classes
    var taskSpan = $("<li>")
      .addClass("badge badge-primary badge-pill")
      .text(date);
  
    // replace input with span element
    $(this).replaceWith(taskSpan);
  
    // Pass task's <li> element into auditTask() to check new due date
    auditTask($(taskSpan).closest(".listItem"));
  })





  var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };