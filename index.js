var number1 = Math.random();
number1 = number1 * 6;
number1 = Math.floor(number1);
var randomNumber1 = number1 + 1; 

var diceImg1 = "dice" + randomNumber1.toString();

var leftDiceImg = document.querySelector("img.img1");
leftDiceImg.setAttribute("src", `./images/${diceImg1}.png`);


var number2 = Math.random();
number2 = number2 * 6;
number2 = Math.floor(number2);
var randomNumber2 = number2 + 1; 

var diceImg2 = "dice" + randomNumber2.toString();

var rightDiceImg = document.querySelector("img.img2");
rightDiceImg.setAttribute("src", `./images/${diceImg2}.png`);

if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
} else if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}






