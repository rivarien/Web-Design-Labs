var numberOfRounds = 0;
var result = "";

function playGame(userChoice){
    //the game starts, numberOfRounds incremented
    numberOfRounds++;

    //call on the function to generate the computer's choice
    var cpu = computerOutput();

    //call on the gameRound function with parameters for user and computer choices
    var result = gameRound(userChoice, cpu);

    // Display the result
    alert(result);

    //Check when the game should end
    if (result.startsWith("You win")){
            alert("Congratulations! You won in round #"+numberOfRounds+"!");
            numberOfRounds=0;
        }
    else if(numberOfRounds>=3){
        alert("Game over, you played for "+numberOfRounds+" rounds, too bad.");
        numberOfRounds=0;
    }
    else{
        alert("Try again, you're on attempt #"+(numberOfRounds+1)+" of 3.")
        numberOfRounds+1;
    }    
}

   



 //compute the output for the computer
function computerOutput(){
    var randomNumber = Math.floor(Math.random()*3);

    if(randomNumber == 0){
        return "rock";
    } else if(randomNumber == 1){
        return "paper";
    } else{
        return "scissors";
    }
}
//alert changed to return as the results are being returned to alert(result)
function gameRound(userChoice, cpu){
    if(
        (userChoice=="rock" && cpu=="scissors")||
        (userChoice=="paper" && cpu=="rock")||
        (userChoice=="scissors" && cpu=="paper")
    ){
        return("You win!!! The computer chose " +cpu);
    }

    else if(
        (userChoice=="rock" && cpu=="rock")||
        (userChoice=="paper" && cpu=="paper")||
        (userChoice=="scissors" && cpu=="scissors")
    ){
        return("It is a draw, the computer chose " +cpu);
    }

    else{
        return("You lose, the computer chose "+cpu+" :(");
    }
}

   