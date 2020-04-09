# 05 Third-Party APIs: Work Day Scheduler

Creating a simple calendar application that allows the user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

The [Moment.js](https://momentjs.com/) library was used to format the date and time.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Commit History
* First initial files uploaded to GitHub
* Second commit has a script file to display the date!
* Third commit came late, and has a lot of updates:
* I updated the `index.html` to have many more bootstrap columns and rows.
* Added some functionality with `jQuery & Javascript` - 
* Displays the 9 am-5 pm hours, with a text area next to each box and a button to save.
* ACTUALLY saves the text into the local storage!!! yayy!
* FOURTH commits - Added some if/else statements
* Added some variables and called to the HTML
* Fifth commit fixed a bug
* Sixth commit is probably my last... everything is functioning except for getting the proper color displayed.
* Seventh commit is actually probably my last, I fixed some typos and added lots of juicy comments.
* Final fix has been implemented, thanks to Eric!

## Link

https://fruityvegetables.github.io/WorkdayScheduler/