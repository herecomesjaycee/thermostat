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
});

var updateDisplay = function(){
  $("#temperatureDisplay").text("temp: "+thermostat._degrees);
  $("#powerSaveDisplay").text("power save: "+thermostat.getPowerSave());
  $("#energyUsageDisplay").text("energy usage: "+thermostat.energy());
}
