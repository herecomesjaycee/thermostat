thermostat = new Thermostat();

$(document).ready(function(){
  updateDisplay();

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
});

var updateDisplay = function(){
  $("#temperature").text(thermostat.temperature());
  $("#powerSave").text(thermostat.powerSaveDisplay());
  $("#powerUsage").text(thermostat.usage());
  if(thermostat.usage()== 'low-usage'){
    $('#powerUsage').css('color', 'green')
  } else if (thermostat.usage()== 'medium-usage') {
    $('#powerUsage').css('color', 'black')
  } else {
    $('#powerUsage').css('color', 'red')
  }
};
