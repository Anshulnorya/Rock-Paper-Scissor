const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices= document.querySelectorAll('button');
let computerChoice;
let result;
for(var i=0; i<possibleChoices.length; i++ ){
  possibleChoices[i].addEventListener('click',function(e){
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    genrateComputerChoice();
    getResult()
  });
}

function genrateComputerChoice(){
  const randomNumber = Math.floor(Math.random()*3)+1;
  if(randomNumber==1){
    computerChoice='rock'
  }
  if(randomNumber==2){
    computerChoice='paper'
  }
  if(randomNumber==3){
    computerChoice='scissor'
  }
  computerChoiceDisplay.innerHTML=computerChoice;
}

function getResult(){
  if (computerChoice===userChoice){
     result = "I'ts a draw"
  }
  if (computerChoice==='rock' && userChoice==='scissor'){
     result = "You Lost!"
  }
  if (computerChoice==='rock' && userChoice==='paper'){
     result = "You Win!"
  }
  if (computerChoice==='paper' && userChoice==='rock'){
     result = "You Loose"
  }
  if (computerChoice==='paper' && userChoice==='scissor'){
    result = "You Win"
 }
 if (computerChoice==='scissor' && userChoice==='rock'){
  result = "You win "
}
if (computerChoice==='scissor' && userChoice==='paper'){
  result = "You Loose"
}
resultDisplay.innerHTML=result;
 
}

