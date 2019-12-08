var puzzle = document.getElementById("advent").textContent;
var width = 25;
var height = 6;

var layers = [];
var layerscount = 0;

for (var i = 0; i < puzzle.length; i += width) {
  if (layers[layerscount]) {
  	if (layers[layerscount].length == height) {
    	layerscount++;
      layers[layerscount] = [];
    }
  } else {
  	layers[layerscount] = [];
  }
  
  var layer = [];
  for (var j = 0; j < width; j++) {
    layer.push(puzzle[i + j]);
  }
  layers[layerscount].push(layer);

}

var filled = [];
for (var i = 0; i < height; i++) {
	filled[i] = [];
	for (var j = 0; j < width; j++) {
  	filled[i].push("x");
  }
}
filled = filled.flat();


for (var i = 0; i < layers.length; i++) {
	var flattend = layers[i].flat();
	for (var j = 0; j < flattend.length; j++) {
  	if (filled[j] == "x" && flattend[j] == "0") {
    	// black
      filled[j] = 0;
    } else if (filled[j] == "x" && flattend[j] == "1") {
    	// white
      filled[j] = 1;
    }
  }
}

var image = [];

for (var i = 0; i < filled.length; i += width) {
	image.push(filled.slice(i, i + width));
}

function printOutput() {
	var output = "<table>";
	for (var i = 0; i < image.length; i++) {
  	output = output + "<tr>"
  	for (var j = 0; j < image[i].length; j++) {
    	var color = "";
      if (image[i][j] == 0) {
      	color = "#000000";
      } else {
      	color = "#ffffff";
      }
    	output = output + "<td style='background-color:" + color + "'>" + image[i][j] + "</td>";
    }
    output = output + "</tr>";
  }
  output = output + "</table>"
  return output;
}


document.getElementById("adventOut").innerHTML = printOutput();


