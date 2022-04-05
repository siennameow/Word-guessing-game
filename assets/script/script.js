var wordSource =["boolean","array","Object","element","string","var"];
var fillBlank = document.querySelector("#blank");
var startBtn = document.querySelector("#start");
var win = document.querySelector("#win_score");
var lose = document.querySelector("#lose_score");
var winScore = 0;
var loseScore = 0;

var selectedWordFinal;
var wordArrayFinal ;

var placeFillFinal ;

function init(){

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
    // if (timerCount === 0) {
    //     return;
    //   }

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

function lose () {
    if (timeLeft == 0) {
       loseScore = loseScore +1;
       lose.textContent = "Losses: " + loseScore;
       gameOver();
    }
}


startBtn.addEventListener("click",init);

