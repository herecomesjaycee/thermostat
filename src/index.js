thermostat = new Thermostat();

$(document).ready(function(){
    $("#tempUp").click(function(){
        thermostat.tempUp();
        $("#temperatureDisplay").text("temp: "+thermostat._degrees);
    });
    $("#tempDown").click(function(){
        thermostat.tempDown();
        $("#temperatureDisplay").text("temp: "+thermostat._degrees);
    });
    $("#reset").click(function(){
        thermostat.reset();
        $("#temperatureDisplay").text("temp: "+thermostat._degrees);
    });
    $("#powerSave").click(function(){
        thermostat.togglePowerSave();
        $("#powerSaveDisplay").text("power save: "+thermostat.getPowerSave());
    });
});
