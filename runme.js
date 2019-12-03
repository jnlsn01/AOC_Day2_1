var readline = require('readline');
var fs = require('fs');
var foo;
var spot;
var val1;
var val2;
var val1f;
var val2f;
var val3;
var lock;

var myInterface = readline.createInterface({
  input: fs.createReadStream('input.txt')
});

myInterface.on('line', function (line) {
  var temp = new Array();
  temp = line.split(",");
  foo = 0;
	while (temp[foo] != 99) {
		if (temp[foo] == 99) break;
		lock = 0;
		val1 = Number(temp[foo+1]);
		val1f = Number(temp[val1]);
		val2 = Number(temp[foo+2]);
		val2f = Number(temp[val2]);
		spot = Number(temp[foo+3]);
		
		if (lock == 0) {
			if (temp[foo] == 1) {
				lock = 1;
				val3 = val1f+val2f;
				console.log("Locked to add");
				};
			};
		if (lock == 0) {
			if (temp[foo] == 2) {
				lock = 1;
				val3 = val1f*val2f;
				console.log("Locked to multiply");
				};
			};
		console.log("Opcode: " , temp[foo]);
		console.log("Updating: " , spot, " to " , val3);
		temp[spot] = val3;
		foo = foo + 4;
	};
	console.log(temp[0]);
  });


