////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/



document.getElementById("problemId").innerHTML = "CODING CHALLENGE | 7";

document.getElementById("titleHeader").innerHTML = "<p>LOTR Quiz Game</p>";

console.log('Welcome to my Lord of the Rings Quiz! Please respond with a number value 1-4');

var userScore = 0;

var Question = function (question, answerChoices, answer) {
    
    this.question = question;
    this.answerChoices = answerChoices;
    this.answer = answer;
    
}


function shuffleArray (array) {
    var i = array.length,
        j = 0,
        temp ;
    
    while (true) {
    
        if (i===0) {
            i = i - 1;
            break;
        }
            i = i - 1;
            j = Math.floor(Math.random() * (i+1));

            // swap randomly chosen element with the current element
            temp = array [i];
            array[i] = array[j];
            array[j] = temp;
    }
    return array;
}




function askQuestion(questionNum){ 
    
    //console.log(questionArray[questionNum].question);
    console.log(questionArray[questionNum].answerChoices);


    setTimeout (function(){
    
        var userResponse = prompt(questionArray[questionNum].question);
        
        if (userResponse == questionArray[questionNum].answer){
            
            userScore += 1;
            
            console.log('correct : ) ');
            
        }else {
            console.log('Incorrect : (');
        }
        
    },2000); 

}

/* LOTR questions commented out for testing purposes ******************

var question1 = new Question('How many Rings of Power are said to have been created?', ['1 - 1','2 - 19','3 - 20','4 - 4'], 3);

var question2 = new Question ('This legendary blade was wielded by Isildur\'s heir in the Lord of the Rings trilogy',['1 - Elendil' ,'2 - Anduril' ,'3 - Sting ' , '4 - Glamdring'], 2);

var question3 = new Question (' One of the set of 7 objects created in the Elder Days by Feanor himself commonly known as a Seeing Stone reappears in the posession of Saruman during the War of the Ring. What was it\'s Elvish name?', ['1 - Palantir','2 - Silmaril', '3 - Nenya', '4 -  Elbereth ', 1]);

*/

var question1 = new Question('Q1 what is the correct answer?', ['1 ','2 ','3 - correct','4 '], 3);
var question2 = new Question('Q2 what is the correct answer?', ['1 ','2 - correct','3 ','4'], 2);
var question3 = new Question('Q3 what is the correct answer?', ['1 correct','2 ','3 ','4'], 1);
var question4 = new Question('Q4 what is the correct answer?', ['1 ','2 ','3 ','4 correct'], 4);

var questionArray = shuffleArray([question1,question2, question3, question4]);

function runQuiz () {
    
    userScore = 0;
    
    for (i = 0; i < questionArray.length; i++ ) {
        askQuestion(i);
    }

}





