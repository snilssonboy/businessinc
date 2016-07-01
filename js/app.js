var date = new Date("1960, 1, 1");
var dayCurrentTime = 0; //Current day elapsed time
var dayLength = 14400; //Length of day (60*24*10)

// Increment day + 1
//date.setDate(date.getDate() + 1);

var shortFormat = "yyyy MMMM d";
var dateProgressFormat = "HH:mm";

var Game = function(VERSION, SAVE, LASTSAVE, TIMESINCESTART){
  this.version = VERSION,
  this.save = SAVE;
  this.lastsave = LASTSAVE;
  this.timesincestart = TIMESINCESTART;
}

var Player = function(NAME, DATE, BANK, COMPANIES, MANAGERS, EMPLOYEES, GAME){
  this.name = NAME;
  this.date = DATE;
  this.bank = BANK;
  this.companies = COMPANIES;
  this.managers = MANAGERS;
  this.employees = EMPLOYEES;
  this.game = GAME;
}

var bank = {
  "cash": 0,
  "interest": 0.10
};

var player = new Player("Simon", date, bank, {}, {}, {}, new Game("0.0.1", null, null, null));

$(document).ready(function(){
    $("#info-date").html($.format.date(date, shortFormat));
    $(".progress-bar").html("Day " + $.format.date(date, dateProgressFormat));
});


setInterval(function(){
  if(dayCurrentTime < dayLength){
    dayCurrentTime += 10;
  }else{
    date.setDate(date.getDate() + 1);
    $("#info-date").html($.format.date(date, shortFormat));
    dayCurrentTime = 0;
  }

  //console.log(((dayCurrentTime / dayLength) * 100) + "%");

  $(".progress-bar").html("Time: " + convertTimeToHoursMinutes(dayCurrentTime));
  $(".progress-bar").css("width", ((dayCurrentTime / dayLength) * 100) + "%");
}, 10);

function updateModal(){
  $("#game-version").html(player.game.version);
}

function convertTimeToHoursMinutes(dayTime){
  var time = dayTime / 10;
  var hours = Math.floor(time / 60);
  var minutes = time % 60;

  if(hours < 10){
    hours = "0" + hours;
  }

  if(minutes < 10){
    minutes = "0" + minutes;
  }

  var newTime = hours + ":" + minutes;

  return newTime;
}
