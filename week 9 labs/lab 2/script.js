//place all previous functions within a new function which, runs the inner functions for three loops max
function playGame(userChoice){
    var numberOfRounds = 0;
    while(numberOfRounds<3){

        //call on the function to generate the computer's choice
        var cpu = computerOutput();

        //call on the rock paper and scissors functions - parameters for user and computer choices added
        rock(userChoice, cpu);
        paper(userChoice, cpu);
        scissors(userChoice, cpu);
      
        //if the player wins, the game stops
        if(
            (userChoice=="rock" && cpu=="scissors")||
            (userChoice=="paper" && cpu=="rock")||
            (userChoice=="scissors" && cpu=="paper")
        ){
            alert("You won in "+(numberOfRounds+1)+" rounds!");
            return;
        }
        
        //the amount of games played is being tracked
        numberOfRounds++;

    }
    //if the user has had three goes, its game over
    alert("Game over, you played "+numberOfRounds+" rounds. Too bad! :(");  
}



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

    function rock(userChoice, cpu){
        if(userChoice == "rock"){
            if(cpu == "rock"){
                alert("It is a draw, the computer chose " +cpu);
            } else if(cpu == "paper"){
                alert("You lose, the computer chose " +cpu);
            }else{
                alert("You win!!! The computer chose " +cpu);
            }
        }
    }

    function paper(userChoice, cpu){
        if(userChoice == "paper"){
            if(cpu == "rock"){
                alert("You win!!! The computer chose " +cpu);
            } else if(cpu == "paper"){
                alert("It is a draw, the computer chose " +cpu);
            }else{
                alert("You lose, the computer chose " +cpu);
            } 
        }
    }

    function scissors(userChoice, cpu){
        if(userChoice == "scissors"){
            if(cpu == "rock"){
                alert("You lose, the computer chose " +cpu);
            } else if(cpu == "paper"){
                alert("You win!! The computer chose " +cpu);
            }else{
                alert("It is a draw, the computer chose " +cpu);
            } 
        }
    }
