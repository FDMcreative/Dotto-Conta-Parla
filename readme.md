#JavaScript Game with Timer 

Create a JavaScript game with the following rules:

* The player has 10 seconds to get as many sums correct as possible.
* Each time the player gets a sum correct their score should increase by 1.
* If they get a sum wrong, the score should decrease by 1.
* A new sum should randomly generate each time the user submits an answer.

###Requirements

* You should use the timing methods `setTimeOut` and `setInterval` and `clearInterval`.
* You should display the users score.
* Use jQuery selectors to grab elements from the DOM.
* Update the DOM using `.html()` or `.text()`.
* Grab the value of the input field using `.val()`.

![Timer Game](http://i.imgur.com/ACY3l8K.gif)

###Pseudocode

1. Create a timer that counts down from 10 to 0, and displays the time remaining inside the `.timer` div.
2. The timer should only start when the "Go!" button is clicked.
3. Generates a random sum and display it on the page inside the `.display` div.
4. Grab the user's answer from the input box when they click on "Submit".
5. Check the user's answer to the correct answer.
6. If the user is correct, add 1 to their score, else take 1 from their score.
7. Update the user's score on the page.
8. Generate a new random sum once the user has submitted their answer.
9. Use jQuery to show the input and submit button once the user has pressed "Go" (and hide the "Go" button).
10. Use jQuery to show the "Go" button and change the text inside the button to be "Play again?" once the timer has reached 0 (and hide the input and submit button).
11. Update the text inside the `.feedback` div, to indicate whether the answer was correct or not, each time the user submits their answer.
12. Reset the score back to 0 if the user clicks "Play again?".

###Bonus

* Refactor your code so that it is namespaced.
* Add sound/animation.