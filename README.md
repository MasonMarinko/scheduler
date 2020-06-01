Repository URL:  https://github.com/MasonMarinko/scheduler

Website URL: https://masonmarinko.github.io/scheduler/



AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively




GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar

    - Current day displays at top of calendar, format is Day of the week, Month, Day of the Month, and year.


WHEN I scroll down
THEN I am presented with time blocks for standard business hours

    - Schedule goes from 9am until 5pm (Normal business hours)

WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future

    - Each time block does not only update depending on the time of day, but also updates every 30 minutes to check if there has been a change, and will change the colors accordingly.


WHEN I click into a time block
THEN I can enter an event
    
    - For safety, and to avoid accidental clicks, to first select and change an element. After selected you can click through them again with 1 click unless you refresh page.

WHEN I click the save button for that time block
THEN the text for that event is saved in local storage

    - Once the save button is selected it will save whatever text is in the corresponding box and be there on refresh. 

WHEN I refresh the page
THEN the saved events persist

    - If the save button is pressed then on refresh the text will remain saved. If the save button is not selected it will revert to what was there before.