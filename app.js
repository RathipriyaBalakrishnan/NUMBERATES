const submitButton=document.getElementById("checkButton");
console.log(submitButton);
const message = document.getElementById("message");
const attemptCount=document.getElementById("attemptCount");

var guessNumber = Math.round(Math.random() *100);
//console.log(randomNumber);
var count=10;
var text;
checkButton.onclick=()=>{
    console.log(guessNumber);
    var inputValue = document.getElementById("textBox").value;
    console.log(textBox);
    count--;
    //winning condition
    if(inputValue == guessNumber)
    {
     location.href=`./win.html`
    }
    else if(count == 0){
        location.href=`./lose.html`
    }
    else if(inputValue>guessNumber)
    {
     text=`Guessed number is too high. ${count} remaining`
    }
    else if(inputValue<guessNumber)
    {
        text=`Guessed number is too low. ${count} remaining`
    }
console.log(count);
console.log(text);
message.style.display="inherit";
message.innerHTML=text;
attemptCount.innerHTML=count;
}