var wordSource =["boolean","array","Object","element","string","var"];
var fillBlank = document.querySelector("#blank");
var startBtn = document.querySelector("#start");
var score = 0;


var selectedWord = wordSource[Math.floor(Math.random() * wordSource.length)];
var wordArray = selectedWord.split("");


var placeFill = [];

for (var i = 0; i < wordArray.length; i++) {
    placeFill.push("_");
}
console.log(selectedWord);
var fillShow = placeFill.join(" ");
fillBlank.textContent=fillShow;


document.addEventListener("keydown", function(event){
    // if (timerCount === 0) {
    //     return;
    //   }
      var key = event.key.toLowerCase();
      var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
    if (alphabetNumericCharacters.includes(key)) {
     var letterGuessed = event.key;
    var newArray = correctLetterPosition(letterGuessed,wordArray);
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

        for (i=0; i<wordArray.length; i++){

            if (m.includes(i)){ 
                placeFill[i]=n;
            }
        }
        var fillShow = placeFill.join(" ");
        fillBlank.textContent=fillShow;
        win();
}

function win(){

    if (selectedWord == placeFill.join("") ){
        console.log("hello")
        score =score +1;
    }
}


