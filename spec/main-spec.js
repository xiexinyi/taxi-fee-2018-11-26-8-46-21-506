const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it("if less than 2 miles then should be 6 yuan", function(){
    	var miles = 1;
    	var waiting = 0;
    	var cost = main(miles,waiting);

    	expect(cost).toEqual(6);
    });

    it("if more than 2 miles and less than 8 then should be 0.8 yuan/mile", function(){
    	var miles = 3;
    	var waiting = 0;
    	var cost = main(miles,waiting);

    	expect(cost).toEqual(7);
    });

    it("if more than 8 miles then should be 1.2 yuan/mile", function(){
    	var miles = 9;
    	var waiting = 0;
    	var cost = main(miles,waiting);

    	expect(cost).toEqual(12);
    });

    it("0.25 yuan/min for waiting time", function(){
    	var miles = 9;
    	var waiting = 1;
    	var cost = main(miles, waiting);

    	expect(cost).toEqual(12);
    });


});
