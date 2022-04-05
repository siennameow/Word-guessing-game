var wordSource =["boolean","array","Object","element","string","var"];
var fillBlank = document.querySelector("#blank");
var startBtn = document.querySelector("#start");
var win = document.querySelector("#win_score");
var lose = document.querySelector("#lose_score");
var timeEl = document.querySelector("#time_left");
var winScore = 0;
var loseScore = 0;
var timerLeft = 10;


var selectedWordFinal;
var wordArrayFinal ;

var placeFillFinal ;

function init(){
    setTimer();
var selectedWord = wordSource[Math.floor(Math.random() * wordSource.length)];
var wordArray = selectedWord.split("");
var placeFill = []
for (var i = 0; i < wordArray.length; i++) {
    placeFill.push("_");
}

var fillShow = placeFill.join(" ");
fillBlank.textContent=fillShow;
selectedWordFinal = selectedWord;
wordArrayFinal = wordArray;
placeFillFinal = placeFill

}



document.addEventListener("keydown", function(event){

      var key = event.key.toLowerCase();
      var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
    if (alphabetNumericCharacters.includes(key)) {
     var letterGuessed = event.key;
    var newArray = correctLetterPosition(letterGuessed,wordArrayFinal);
    check(letterGuessed,newArray);

    }
});


function correctLetterPosition (n,m){
     var positionArray =[];
        var position =m.indexOf(n);
        while (position !=-1){
            positionArray.push(position);
            position=m.indexOf(n,position+1)
        }
        return positionArray;
}


function check(n,m){

        for (i=0; i<wordArrayFinal.length; i++){

            if (m.includes(i)){ 
                placeFillFinal[i]=n;
            }
        }
        var fillShow = placeFillFinal.join(" ");
        fillBlank.textContent=fillShow;
        winGame();
}

function winGame(){

    if (selectedWordFinal == placeFillFinal.join("") ){
        winScore =winScore +1;
        console.log(winScore)
        win.textContent = "Wins: " + winScore;
    }

}

// function loseGame () {
//     if (timeLeft == 0) {
//        loseScore = loseScore +1;
//        lose.textContent = "Losses: " + loseScore;
//     }
// }


startBtn.addEventListener("click",init);


function setTimer() {
    var timeLeft = timerLeft
   var timer = setInterval(function() {
      timeLeft--;
      console.log(timeLeft)
      timeEl.textContent = timeLeft;

      if (timeLeft >= 0) {
        if (selectedWordFinal == placeFillFinal.join("") ) {
          clearInterval(timer);
          fillBlank.textContent ="You Win!";
        }
      }
      if (timeLeft === 0) {
        loseScore = loseScore +1;
        lose.textContent = "Losses: " + loseScore;
        clearInterval(timer);
        fillBlank.textContent ="You Lose!";
      }
    }, 1000);
  }

