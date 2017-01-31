thermostat = new Thermostat();


$(document).ready(function(){
  $("#tempUp").click(function(){
    thermostat.tempUp();
    updateDisplay();
  });
  $("#tempDown").click(function(){
    thermostat.tempDown();
    updateDisplay();
  });
  $("#reset").click(function(){
    thermostat.reset();
    updateDisplay();
  });
  $("#powerSave").click(function(){
    thermostat.togglePowerSave();
    updateDisplay();
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=f0477ab646fc63e3d9ca2e2be2c2e3f8&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  })
});



var updateDisplay = function(){
  $("#temperatureDisplay").text("temp: "+thermostat._degrees);
  $("#powerSaveDisplay").text("power save: "+thermostat.getPowerSave());
  $("#energyUsageDisplay").text("energy usage: "+thermostat.energy());
}
