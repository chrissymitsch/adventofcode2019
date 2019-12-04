var wiresInput = document.getElementById("advent").textContent;
var wires = wiresInput.split("\n");

var wire1 = wires[0].split(",");
var wire2 = wires[1].split(",");

var directions1 = [];
var x1 = 0;
var y1 = 0;

for (var i = 0; i < wire1.length; i++) {
	var richtung = wire1[i].slice(0,1);
  var schritte = parseInt(wire1[i].slice(1, wire1[i].length), 10);
  directions1[i] = [];
  
  var ind = 0;
  
  if (richtung == "R") {
    for (var j = 0; j < schritte; j++) {
      directions1[i][ind] = [];
      directions1[i][ind++] = (x1 + j + 1) + "," + y1;
    }
  	x1 = schritte + x1;
  } else if (richtung == "L") {
    for (var j = 0; j < schritte; j++) {
      directions1[i][ind] = [];
      directions1[i][ind++] = (x1 - (j + 1)) + "," + y1;
    }
  	x1 = x1 - schritte;
  } else if (richtung == "U") {
    for (var j = 0; j < schritte; j++) {
      directions1[i][ind] = [];
      directions1[i][ind++] = x1 + "," + (y1 + j + 1);
    }
    y1 = y1 + schritte;
  } else if (richtung == "D") {
   	for (var j = 0; j < schritte; j++) {
      directions1[i][ind] = [];
      directions1[i][ind++] = x1 + "," + (y1 - (j + 1));
    }
  	y1 = y1 - schritte;
  }
}

directions1 = directions1.flat();


var directions2 = [];
var x2 = 0;
var y2 = 0;

for (var i = 0; i < wire2.length; i++) {
	var richtung = wire2[i].slice(0,1);
  var schritte = parseInt(wire2[i].slice(1, wire2[i].length), 10);
  directions2[i] = [];
  
  var ind = 0;
  
  if (richtung == "R") {
    for (var j = 0; j < schritte; j++) {
      directions2[i][ind] = [];
      directions2[i][ind++] = (x2 + j + 1) + "," + y2;
    }
  	x2 = schritte + x2;
  } else if (richtung == "L") {
    for (var j = 0; j < schritte; j++) {
      directions2[i][ind] = [];
      directions2[i][ind++] = (x2 - (j + 1)) + "," + y2;
    }
  	x2 = x2 - schritte;
  } else if (richtung == "U") {
    for (var j = 0; j < schritte; j++) {
      directions2[i][ind] = [];
      directions2[i][ind++] = x2 + "," + (y2 + j + 1);
    }
    y2 = y2 + schritte;
  } else if (richtung == "D") {
   	for (var j = 0; j < schritte; j++) {
      directions2[i][ind] = [];
      directions2[i][ind++] = x2 + "," + (y2 - (j + 1));
    }
  	y2 = y2 - schritte;
  }
}

directions2 = directions2.flat();

//suche Schnittpunkt
var length = 0;
var searchin;
var holder;
var distances = [];
var di = 0;
if (directions1.length >= directions2.length) {
	length = directions2.length;
  searchin = directions1;
  holder = directions2;
} else {
	length = directions1.length;
  searchin = directions2;
  holder = directions1;
}
for (var i = 0; i < length; i++) {
	const isSchnittpunkt = (element) => element == holder[i];
	if (searchin.includes(holder[i])) {
    var xy = holder[i].split(",");
    distances[di++] = Math.abs(parseInt(xy[0], 10)) + Math.abs(parseInt(xy[1], 10));
  }
}

function sortNumbers(a, b) {
	return a-b;
}
console.log(distances.sort(sortNumbers));
