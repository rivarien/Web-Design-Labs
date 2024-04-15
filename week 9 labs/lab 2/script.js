function playGame(){
var numberOfRounds = 0;
    while(numberOfRounds<3)
//unfinished business^^


    function computerOutput(){
        var randomNumber = Math.floor(Math.random()*3);

        if(randomNumber == 0){
            return "rock";
        } else if(randomNumber == 1){
            return "paper";
        } else{
            return "scissors";44
        }
    }

    function rock(){
        var cpu = computerOutput();
        if(cpu == "rock"){
            alert("It is a draw, the computer chose " +cpu);
        } else if(cpu == "paper"){
            alert("You lose, the computer chose " +cpu);
        }else{
            alert("You win!!! The computer chose " +cpu);
        }
    }

    function paper(){
        var cpu = computerOutput();
        if(cpu == "rock"){
            alert("You win!!! The computer chose " +cpu);
        } else if(cpu == "paper"){
            alert("It is a draw, the computer chose " +cpu);
        }else{
            alert("You lose, the computer chose " +cpu);
        } 
    }

    function scissors(){
        var cpu = computerOutput();
        if(cpu == "rock"){
            alert("You lose, the computer chose " +cpu);
        } else if(cpu == "paper"){
            alert("You win!! The computer chose " +cpu);
        }else{
            alert("It is a draw, the computer chose " +cpu);
        } 
    }
}
