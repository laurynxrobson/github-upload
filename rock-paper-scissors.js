//Variables
let userScore = 0;
let computerScore = 0;

// DOM Elements (caching the DOM)
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultParagraph = document.querySelector('.result > p');
const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');
const resetSpan = document.getElementById('reset');

//Functions:

// This function generates the computer's answer.
function getComputersChoice(){
   const choices = ['r', 'p', 's'];
   const randomNumber = Math.floor(Math.random() * 3);
   return choices[randomNumber];
}

// Converts the letters into words so that the output is readable to the user. 
function covertToWord(letter) {
   if(letter === 'r') return 'Rock';
   if(letter === 'p') return 'Paper';
   return 'Scissors';
}

/* Returns the user's score when the user wins, displays, updates the score and the move the user selected and the move the 
   computer selected/generated. */
function win(usersChoice, computersChoice) {
   const smallUserWord = 'user'.fontsize(3).sub();
   const smallCompWord = 'comp'.fontsize(3).sub();
   userScore++;
   userScoreSpan.innerHTML = userScore;
   resultParagraph.innerHTML = `${covertToWord(usersChoice)}${smallUserWord} beats ${covertToWord(computersChoice)}${smallCompWord} . You Win! 🔥`;
}

/* This function does the same thing the win() does expect it does it for when the computer wins instead of when the user wins. */
function lost(usersChoice, computersChoice) {
 computerScore++;
   computerScoreSpan.innerHTML = computerScore;   
   const smallUserWord = 'user'.fontsize(3).sub();
   const smallCompWord = 'comp'.fontsize(3).sub();
   resultParagraph.innerHTML = `${covertToWord(usersChoice)}${smallUserWord} loses ${covertToWord(computersChoice)}${smallCompWord} . You Lost... 😥`;
}

/* This function only displays the choice of the user and the computer simultaneously except it neither updates nor displays the 
   user and computers score. */
function drew(usersChoice, computersChoice) {
   const smallUserWord = 'user'.fontsize(3).sub();
   const smallCompWord = 'comp'.fontsize(3).sub();
   resultParagraph.innerHTML = `${covertToWord(usersChoice)}${smallUserWord} equals ${covertToWord(computersChoice)}${smallCompWord} . You Drew  💩` ;
}
/* This is the logic behind the game. The switch function is used to instead of an if or if-else statement as those statements can 
   be confusing and require a lot of code, whereas with the switch statement you can easily type out the code using more or less the
   same logic as any if statement.  */
function game(usersChoice){
   
   // Calling the function that generates the computer's answer and setting to a variable. 
   const computersChoice = getComputersChoice();

   switch (usersChoice + computersChoice) {
      case 'rs':
      case 'pr':
      case 'sp':

         // If the above conditions are meet then the win() is called and the code from the function is executed.
         win(usersChoice, computersChoice);
         break;
      case 'rp':
      case 'ps':
      case 'sr ':
         // The same thing happens here just as the win() except that lose() is called.
         lost(usersChoice, computersChoice);
         break;
      case 'rr':
      case 'pp':
      case 'ss':
         // The same thing happens here just as the win() and lose() except the drew() is called.
         drew(usersChoice, computersChoice);
         break;
   }
}

/* This is the code for the reset button. When the button is clicked the score in the score board div will be set to 0 for both the
   user and computer scores and displayed in the score board div. */
function reset() {
   userScore = 0;
   computerScore = 0;
   userScoreSpan.innerHTML = userScore;
   computerScoreSpan.innerHTML = computerScore;
}
/* The main() which I have renamed the events() if where all the event listeners are stored. It also calls the functions game() 
   and reset(). */
function events(usersChoice, computersChoice) {
   rockDiv.addEventListener('click',  () => game('r'));
   
   paperDiv.addEventListener('click', () => game('p'));
   
   scissorsDiv.addEventListener('click', () => game('s'));
   
   resetSpan.addEventListener('click', () => reset());
}  
// The events() is called to execute the code in the function. 
events();

/* 
Errors and Solutions:
1. Uncaught TypeError: Cannot read property 'addEventListener' of null.
      Solution: Moving the <script> tag from the <head> to the bottom of the </body> tag in the html file. 

2. Uncaught TypeError: Assignment to constant variable.
      Solution: Set variables userScore and computerScore to let instead of const.

3. Uncaught ReferenceError: convertToWord is not defined.
      Solution: Not sure what the problem was but all I did to solve it was copy the name of the function and paste it. 

4. The problem that came straight from the deepest darkest parts of Mordor...My code was not working at all...Like nothing, 
   from the buttons to the score board and I kept getting a message to saying 'Uncaught SyntaxError: Identifier 'computersChoice' 
   has already been declared'. 
      Solution: Removes 'computersChoice' as a parameter from the game function. And now all is well... 
*/