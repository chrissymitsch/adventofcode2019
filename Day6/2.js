var puzzle = document.getElementById("advent").textContent;
var directOrbits = puzzle.split("\n");

var orbitObject = {};

for (var i = 0; i < directOrbits.length; i++) {
	var orbitSplit = directOrbits[i].split(")");
  	orbitObject[orbitSplit[1]] = orbitSplit[0];
}

// search all indirects
var orbitingPlanets = Object.keys(orbitObject);
for (var i = 0; i < orbitingPlanets.length; i++) {
	var splitOrbits = orbitObject[orbitingPlanets[i]].split(",");
	if (splitOrbits.find(element => element == "COM")) {

  } else {
    orbitObject[orbitingPlanets[i]] = orbitObject[orbitingPlanets[i]] + "," + getAllIndirects(splitOrbits[splitOrbits.length - 1]);
  }
}

function getAllIndirects(element) {
	if (!orbitObject[element].includes("COM")) {
  	//orbitObject recursion
    return orbitObject[element] + "," + getAllIndirects(orbitObject[element]);
  } else {
  	return orbitObject[element];
  }
}


var counter = 0;
var splitsYou = orbitObject["YOU"].split(",");
var splitsSan = orbitObject["SAN"].split(",");
var way = splitsYou.concat(splitsSan);

for (var i = 0; i < way.length; i++) {
	var occurence = way.filter(element => element == way[i]);
  if (occurence.length == 1) {
  	counter++;
  }
}

console.log(counter);
