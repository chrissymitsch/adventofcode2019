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

var occurences = [];

for (var i = 0; i < layers.length; i++) {
	var occurence = layers[i].flat().filter(element => element == "0");
  occurences[i] = occurence.length;
}

var index = 0;
var value = occurences[0];
for (var i = 1; i < occurences.length; i++) {
  if (occurences[i] < value) {
    value = occurences[i];
    index = i;
  }
}

var flatLayer = layers[index].flat();

var occurence1 = flatLayer.filter(element => element == "1");
var occurence2 = flatLayer.filter(element => element == "2");
console.log(occurence1.length * occurence2.length);
