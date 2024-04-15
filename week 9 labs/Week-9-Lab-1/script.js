//button element
var button = document.getElementById("showLyrics");
//add EventListener click function rather than the onclick function
button.addEventListener("click",function(){
    button.style.visibility = "hidden";
//call on the sing function
sing();

});


function sing(){

    for(i=99;i>=1;i--){
        document.getElementById("lyrics").innerHTML+=(i+" bottles of beer on the wall, "+i+" bottles of beer <br/> Take one down and pass it around, "+(i-1)+" bottles of beer on the wall <br/><br/>");
            if(i== 2){
                document.getElementById("lyrics").innerHTML+=(i+" bottles of beer on the wall, "+i+" bottles of beer <br/> Take one down and pass it around, "+(i-1)+" bottle of beer on the wall <br/><br/>");
            }
            else if(i==1){
                document.getElementById("lyrics").innerHTML+=(i+" bottle of beer on the wall, "+i+" bottle of beer <br/> Take one down and pass it around, "+(i-1)+" no more bottles of beer on the wall <br/><br/>");
            }       
    }
    document.getElementById("lyrics").innerHTML+=("No more bottles of beer on the wall, no more bottles of beer </br> Go to the store and buy some more, 99 bottles of beer on the wall");
}

