var faker = require('faker');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

var test = function(x) {
    // var results = {company:[]};
    var results = [];
    for (var i = 0; i < x; i++ ) {
        var obj = {
            company: faker.company.companyName(),
            // hacker: faker.hacker.abbreviation(),
            // finance: faker.finance.amount(),
            currentDay: timesAndPrice(),
            //currentDay: JSON.stringify(timesAndPrice()),
            }
        results.push(obj);
    }
    return results;

}


function timesAndPrice() {
    var x = 10;
    var times = [];
    var tt = 540;
    var ap = ['am', 'pm'];

    for (var i = 0; tt < 18.05*60; i++) {

        var hh = Math.floor(tt/60);
        var mm = (tt%60);
      var tempObj = {};
      tempObj['currentTime'] = ("0" + (hh%12)).slice(-2) + ":" + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)];
      tempObj['currentPrice'] = parseFloat(((Math.random() * Math.floor(500)) + 50).toFixed(2)); 
        times.push(JSON.stringify(tempObj));
        // times.push(tempObj); 
        tt = tt + x;
    }
    return times;
}

// faker.finance.amount();
// ((Math.random() * Math.floor(500)) + 50).toFixed(2);

var output = test(99);
console.log(output)
