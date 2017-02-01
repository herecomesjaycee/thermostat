describe('thermostat', function(){
	var thermostat;
	var defaultTemperature;
	var psmOnMaxDefault;
	var psmOffMaxDefault;

beforeEach(function(){
	thermostat = new Thermostat();
	defaultTemperature = thermostat._defaultTemperature;
	psmOnMaxDefault = thermostat._psmOnMaxTemperature;
	psmOffMaxDefault = thermostat._psmOffMaxTemperature;
})

	describe('thermostat start at 20 degrees', function(){
		it('should return 20 degrees',function(){
			expect(thermostat.temperature()).toEqual (defaultTemperature);
		});
	});

	describe('can increase the temperature with an up function', function(){
		it('should increase the temperautre from 20', function(){
			thermostat.up();
			expect(thermostat.temperature()).toEqual (defaultTemperature+1);
		});
	});

	describe('can decrease the temperature with a down function', function(){
		it('should decrease the temperature from 20', function(){
			thermostat.down();
			expect(thermostat.temperature()).toEqual (defaultTemperature-1);
		});
	});

	describe('the min temperature is 10 degrees', function(){
		it('cannot go lower than 10 degrees', function(){
			for(var i=0; i<=9; i++){thermostat.down()};
			var error = "temperature cannot go below minimum value";
		      expect(function() {thermostat.down()}).toThrow(error);
		});
	});

	describe('power saving mode options', function(){
		describe('power saving mode is on, the maximum temperature is 25 degrees', function(){
			it('should be no more than 25 degrees', function(){
				for(var i=0; i<=4; i++){thermostat.up()};
				var error = "temperature cannot go above maximum value"
				expect(function() {thermostat.up()}).toThrow(error);
			});
		});

		describe('power saving mode is off, the maximum temperature is 32 degree', function(){
			it('should be no more than 32 degrees', function(){
				thermostat.togglePMS();
				for(var i=0; i<=11; i++){thermostat.up()};
				var error = "temperature cannot go above maximum value"
				expect(function() {thermostat.up()}).toThrow(error);
			});
		});

		describe('power save display', function() {
			it('power save displays on', function() {
				expect(thermostat.powerSaveDisplay()).toEqual('on')
			});
			it('power save displays off', function() {
				thermostat.togglePMS();
				expect(thermostat.powerSaveDisplay()).toEqual('off')
			});
		});

		describe('power save maximum temperature', function() {
			it('alters the maximum temperature to psm on temperature', function(){
				thermostat.togglePMS();
				thermostat._temperature = psmOffMaxDefault;
				thermostat.togglePMS();
				expect(thermostat.temperature()).toEqual(psmOnMaxDefault)
			})
		});
	});

	describe('reset the temperature to 20 with a reset function', function(){
		it('should reset to 20', function(){
			thermostat.up();
			thermostat.reset();
			expect(thermostat.temperature()).toEqual (defaultTemperature);
		})
	})

	describe('ask for current usage', function(){
		it('should return low usage if temperature is < 18',function(){
			thermostat._temperature = 17;
			expect(thermostat.usage()).toEqual ('low-usage')
		})
		it('should return medium usage if temperature is <25',function(){
			thermostat._temperature = 23;
			expect(thermostat.usage()).toEqual ('medium-usage')
		})
		it('should return high usage if temperature is >24',function(){
			thermostat._temperature = 25;
			expect(thermostat.usage()).toEqual ('high-usage')
		})
	})

});
