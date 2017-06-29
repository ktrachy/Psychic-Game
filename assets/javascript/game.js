var play = confirm('Would you REALLY like to play a game?');
var wins = 0;
var losses = 0;
var triesremaining = 7;
var letter = ["L", "I", "N", "C", "O", "L", "N"];
var letter0confirmed = 0
var letter1confirmed = 0
var letter2confirmed = 0
var letter3confirmed = 0
var letter4confirmed = 0
var letter5confirmed = 0
var letter6confirmed = 0
var responses = [];

// Check if you want to play or not.

if (!play) {

    window.location = 'losebeforeyoustart.html';

}


// Trapping each key stroke

document.onkeyup = function(event) {

    // Checking the key to make sure it is one of the approved characters and allows only valid key types to be checked

    var key = String.fromCharCode(event.keyCode).toUpperCase();
    responses.push(key);

    if (key === "a" || key === "b" || key === "c" || key === "d" || key === "e" || key === "f" || key === "g" || key === "h" || key === "i" || key === "j" || key === "k" || key === "l" || key === "m" || key === "n" || key === "o" || key === "p" || key === "q" || key === "r" || key === "s" || key === "t" || key === "u" || key === "v" || key === "w" || key === "x" || key === "y" || key === "z" || key === "A" || key === "B" || key === "C" || key === "D" || key === "E" || key === "F" || key === "G" || key === "H" || key === "I" || key === "J" || key === "K" || key === "L" || key === "M" || key === "N" || key === "O" || key === "P" || key === "Q" || key === "R" || key === "S" || key === "T" || key === "U" || key === "V" || key === "W" || key === "X" || key === "Y" || key === "Z" || key === "1" || key === "2" || key === "3" || key === "4" || key === "5" || key === "6" || key === "7" || key === "8" || key === "9" || key === "0") {

        // This reduces the tries remaining by one each time you've selected a letter.

        triesremaining--
        if (triesremaining === 0) {
            window.location.assign("lose.html")
        }

    }


    // This is where we track if it's any of the target letters.  It updates the appropriate id and fills out the word making the ___ disappear.
    // Each letter is only allowed to be counted once.  The wins is totalled at the bottom.

    if (key === letter[0] || key === letter[1] || key === letter[2] || key === letter[3] || key === letter[4] || key === letter[5] || key === letter[6] || key === letter[7]) {


        if (key === letter[0]) {
            document.getElementById("one").innerHTML = letter[0];
            letter0confirmed = 1;

        }

        if (key === letter[1]) {
            document.getElementById("two").innerHTML = letter[1];
            letter1confirmed = 1;

        }

        if (key === letter[2]) {
            document.getElementById("three").innerHTML = letter[2];
            letter2confirmed = 1;

        }

        if (key === letter[3]) {
            document.getElementById("four").innerHTML = letter[3];
            letter3confirmed = 1;

        }

        if (key === letter[4]) {
            document.getElementById("five").innerHTML = letter[4];
            letter4confirmed = 1;

        }

        if (key === letter[5]) {
            document.getElementById("six").innerHTML = letter[5];
            letter5confirmed = 1;

        }

        if (key === letter[6]) {
            document.getElementById("seven").innerHTML = letter[6];
            letter6confirmed = 1;

        }

        // This is providing feedback that you hit a correct letter and increments up the number of wins but only counts once

        wins = (letter0confirmed + letter1confirmed + letter2confirmed + letter3confirmed + letter4confirmed + letter5confirmed + letter6confirmed);




        document.getElementById("idwins").innerHTML = wins;
        document.getElementById("idlosses").innerHTML = losses;
        document.getElementById("idresponses").innerHTML = responses;
        document.getElementById("idguessesleft").innerHTML = triesremaining;



        if (wins === 7) {
            window.location.assign("win.html")
        }



    } else {


        losses++;
        document.getElementById("idwins").innerHTML = wins;
        document.getElementById("idlosses").innerHTML = losses;
        document.getElementById("idresponses").innerHTML = responses;
        document.getElementById("idguessesleft").innerHTML = triesremaining;




    }


};
