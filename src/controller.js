thermostat = new Thermostat();

$(document).ready(function(){
  getServer();
  updateDisplay();
  //updateCity("London");

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
  })


  });

var updateDisplay = function(){
  $("#temperature").text(thermostat.temperature());
  $("#powerSave").text(thermostat.powerSaveDisplay());
  $("#powerUsage").text(thermostat.usage());
  $('#powerUsage').attr('class', thermostat.usage());
  // var temperature = $('#temperature').text
  // var city = $('#cityList').val()
  // $.post('http://localhost:4567/temperature', function(temperature, city){
  //    return temperature + city
  // })

  postServer();

};

var updateCity = function(city){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=3f6c90a6078f0139892320231c4b918f' , function(data){
    $('#weather').text("Current temperature: " + data.main.temp + " degree in " + data.name);
  });
}

function getServer() {
    $.ajax({
      type: "GET",
      url: 'http://localhost:4567/temperature',
      dataType: 'html',
      success: function(temp){
        thermostat._temperature = temp
        $('#tempDisplay').text("TEMP = "+temp)
      }
    })
}

function postServer() {
  var temperature = $('#temperature').text
  var city = $('#cityList').val()
  var url = "http://localhost:4567/temperature/?city=London"
  $.post('http://localhost:4567/temperature/?city=London&temperature=20');
}
