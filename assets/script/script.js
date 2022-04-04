var wordSource =["boolean","array","Object","element","string","var"];
var fillBlank = document.querySelector("#blank");
var startBtn = document.querySelector("#start");


console.log('hello');
    var selectedWord = wordSource[Math.floor(Math.random() * wordSource.length)];
    var wordToGuess = selectedWord.split("");
    console.log(wordToGuess);
    for (var i = 0; i < wordToGuess.length; i++) {

    var li = document.createElement("li");
    li.textContent = "_";
    li.setAttribute("data-index", i);
    fillBlank.appendChild(li);
    }

function init() {
    console.log('hello');
    var selectedWord = wordSource[Math.floor(Math.random() * wordSource.length)];
    var wordToGuess = selectedWord.split("");
    console.log(wordToGuess);
    for (var i = 0; i < wordToGuess.length; i++) {

    var li = document.createElement("li");
    li.textContent = "_";
    li.setAttribute("data-index", i);
    fillBlank.appendChild(li);
        };
    };
init();
// document.addEventListener("keydown", function(event){
//     if (timerCount === 0) {
//         return;
//       }
//       var key = event.key.toLowerCase();
//       var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//     if (alphabetNumericCharacters.includes(key)) {
//      var letterGuessed = event.key;
//     }
// });

// function setTimer() {
//     timer = setInterval(function() {
//       timerCount--;
//       timerElement.textContent = timerCount;
//       if (timerCount >= 0) {

//         if (isWin && timerCount > 0) {
//           clearInterval(timer);
//           winGame();
//         }
//       }
//       if (timerCount === 0) {
//         clearInterval(timer);
//         loseGame();
//       }
//     }, 1000);

