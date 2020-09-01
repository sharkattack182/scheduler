# scheduler

This was a very prety touch homework assignment. The objective was to create a daily planner from preexisting html and css. The html provided had a jumbotron and a container and thats basically it. I was responsible for creating all of the elements visable besides the jumbotron. my first step was to create the basic html format. the difficulty was actually in the process iof trying to set up all of your divs according to prexisting class and ids that were already provided.

Once the basic layout was done and the css was sourced in the page looked great. One of the requirements was to display the current hour in one color, th future hours in another and the past hours in a third color. I decided to assign all of the text areas a class of "past setting their defaults in the past color way. I did this to save myself having to write another condition. After this I created two conditions, the forst found the current hour and assigned a class to it of "current". The second condition looked to see if the hour on the schedule was greater than the current hour if it was it assigned the class "future" which gave those text areas a distinct colorway. This was possible since adding a class will automatically be added to the end of the class list therefor making it the one that ultimatly decided the styling.


Another requirement was that the date be displayed at the top of the page in teh jumbotron. I did this with a little help from the TAs instructuional during office hours. I set the time to a 24 hour clock to help myself with the comparissons mentioned in the paragraph above. If i used a 12 hour clock the hours after 12 would read as past hours and not future hours. Other than that a pretty straight forward task.

The final challeng was tostore the entries into local data and then retrive them so that if the page was refreshed the content would still be there. This was by far the most challenging part of the assignment and I played whack a mole with this for hours. I gave alot of details about my thought process and the logic in the code in comments in on the js doc. 

over all this was a very challenging exersize and I'm pleased with the results.
