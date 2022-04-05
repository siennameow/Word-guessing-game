var wordSource =["boolean","array","Object","element","string","var"];
var fillBlank = document.querySelector("#blank");
var startBtn = document.querySelector("#start");



var selectedWord = wordSource[Math.floor(Math.random() * wordSource.length)];
var wordArray = selectedWord.split("");


var placeFill = [];
for (var i = 0; i < wordArray.length; i++) {
    placeFill.push("_");
}

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
console.log(correctLetterPosition("e",["a","p","p","l","e"]))



function check (n){

    if (wordArray.includes(n)) {

    }




}