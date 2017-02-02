var thermostat = new Thermostat()

$(document).ready(function(){
  getServer();

  $("#up").click(function (){
    thermostat.up();
    updateDisplay();
  });

  $("#down").click(function (){
    thermostat.down();
    updateDisplay();
  });

  $("#reset").click(function (){
    thermostat.reset();
    updateDisplay();
  });

  $("#togglePMS").click(function (){
    thermostat.togglePMS();
    updateDisplay();
  });

  $("#cityList").change(function(){
    var city = $("#cityList").val()
    updateCity(city);
  });
});

function updateDisplay(){
  $("#temperatureDisplay").text(thermostat.temperature());
  $("#powerSave").text(thermostat.powerSaveDisplay());
  $("#powerUsage").text(thermostat.usage());
  $('#powerUsage').attr('class', thermostat.usage());
  postServer();
};

function updateCity(city){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=3f6c90a6078f0139892320231c4b918f' , function(data){
    $('#weather').text("Current temperature: " + data.main.temp + " degree in " + data.name);
  });
  postServer();
}

function getServer() {
  $.getJSON("http://localhost:4567/temperature", function(result){
    var city = result["city"];
    var temperature = parseInt(result["temperature"])

    if (city === "" || city === null){city = "London"}
    $("#cityList").val(result["city"]).change();

    if (temperature < 10 || temperature > 32 || isNaN(temperature)){temperature = 20}
    $("#temperatureDisplay").text(temperature);
    thermostat = new Thermostat(temperature)
    updateCity(city)
  });
  updateDisplay();
}

function postServer() {
  var temperature = parseInt($("#temperatureDisplay").text())
  var city = $("#cityList").val()
  $.post("http://localhost:4567/temperature",{"city":city, "temperature":temperature})
}
