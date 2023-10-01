//GREETING SCRIPT

var todayGreeting = document.getElementById("today-greeting");

var date = new Date();
var today = date.getDay();
var days = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];

todayGreeting.innerHTML = "\"Have a beautiful " + days[today] + "\"";

//I AM A... SCRIPT

var iAm = document.getElementById("i-am");
var skills = ["Front End Developer", "Penetration Tester", "Chess Master😉", "UI Designer"];
var randomNumber = 0;
setInterval(function () {
   
    iAm.innerHTML = skills[randomNumber];
    randomNumber+=1;

    if(randomNumber == 4){
        randomNumber=0;
    }

}, 3000);

//ANIMATION SCRIPT

var navBar = document.getElementById("navigation-bar");
var cards = document.getElementById("card-container");
var greeting = document.getElementById("greeting-container");
var icons = document.getElementById("icons-container");