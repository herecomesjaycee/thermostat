describe ("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat
  });

  describe("#initialize", function() {
    it ("returns initial temperature as 20", function() {
      expect(thermostat.temperature()).toEqual(20)
    });
  });
});
