var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImages1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImages2 = "images/dice" + randomNumber2 + ".png";

var img1 = document.querySelectorAll("img")[0].setAttribute("src", randomImages1);
var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImages2);

if( randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1wins!";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2wins! 🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
