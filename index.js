let btn = document.querySelectorAll("button");
let output = document.querySelector('.output');
let winner = document.querySelector('.winner');
for (let t of btn) {
    t.addEventListener("click", ()=> tossACoin(t.innerText.trim()))
}
let userScore=0;
let computerScore=0;
function tossACoin(text){
    let userToss = text;
    let tossArr = ["Head", "Tail"]
    let randomIndex = Math.floor(Math.random() * tossArr.length);
    console.log(randomIndex);

    let randomToss = tossArr[randomIndex];
    if(userToss == randomToss){
        userScore++;
      winner.innerText = `User won as he Select ${userToss}`
    } 
    else {
        computerScore++;
        winner.innerText = `Computer won as he select ${randomToss}`
    }
  output.innerHTML = `<p> UserScore : ${userScore} <br/><br/> ComputerScore : ${computerScore} </p>`
}