/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
document.getElementById("results").innerHTML = "<p>John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.</p><p><ol><li>Calculate the average score for each team</li><li>Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.</li><li>Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)</li><li>  EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the &amp;&amp; operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :) </li><li>Like before, change the scores to generate different winners, keeping in mind there might be draws.</li></ol></p>" ;

var scoreJohn = 89 + 120 + 103;

var scoreMike = 116 + 94 + 123;

var scoreMary = 97 + 134 + 105;

var numGames = 3;

avgMike = scoreMike / numGames;
avgJohn = scoreJohn / numGames;
avgMary = scoreMary/ numGames;



function whoWins (){
    console.log('Johns average :' + avgJohn,"******",'mikes average :' + avgMike,"******","Mary's averge : " + avgMary);

    if (avgJohn > avgMike && avgJohn > avgMary) {
        console.log('john is the weiner');
        console.log(avgJohn);

    } else if (avgMike > avgJohn && avgMike > avgMary){
        console.log('Mike is the weiner');
        console.log(avgMike);
    
    }

    else if (avgMary > avgJohn && avgMary > avgMike){
        console.log('Mary is the weiner');
        console.log(avgMary);
    }
    else {
        console.log('we have a draw');
        
    }
}



whoWins();

avgJohn =115;


whoWins();
