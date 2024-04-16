//place all previous functions within a new function which, runs the inner functions for three loops max
function playGame(userChoice){
    var numberOfRounds = 0;
    while(numberOfRounds<3){

        //call on the function to generate the computer's choice
        var cpu = computerOutput();

        //call on the gameRound function with parameters for user and computer choices added
        gameRound(userChoice, cpu);
        
        //the amount of games played is being tracked
        numberOfRounds++;

    }
    //if the user has had three goes, its game over
    alert("Game over, you played "+numberOfRounds+" rounds. Too bad! :(");  
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

function gameRound(userChoice, cpu){
    if(
        (userChoice=="rock" && cpu=="scissors")||
        (userChoice=="paper" && cpu=="rock")||
        (userChoice=="scissors" && cpu=="paper")
    ){
        alert("You win!!! The computer chose " +cpu);
    }

    else if(
        (userChoice=="rock" && cpu=="rock")||
        (userChoice=="paper" && cpu=="paper")||
        (userChoice=="scissors" && cpu=="scissors")
    ){
        alert("It is a draw, the computer chose " +cpu);
    }

    else{
        alert("You lose, the computer chose "+cpu+" :(");
    }
}

   