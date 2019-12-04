var ops = document.getElementById("advent").textContent;
var opsArray = ops.split(",");
console.log(opsArray[95]);

for (var k = 0; k < opsArray.length; k++) {
	opsArray[k] = parseInt(opsArray[k], 10);
}

for (var i = 0; i < opsArray.length; i++) {
	console.log(opsArray[i], opsArray[i + 1], opsArray[i + 2], opsArray[i + 3]);
  if (opsArray[i] == 1) {
    var sum = opsArray[opsArray[i + 1]] + opsArray[opsArray[i + 2]];
    opsArray[opsArray[i + 3]] = sum;
  } else if (opsArray[i] == 2) {
    var prod = opsArray[opsArray[i + 1]] * opsArray[opsArray[i + 2]];
    opsArray[opsArray[i + 3]] = prod;
  }
  console.log(opsArray);
  i += 3;
}
console.log("result:", opsArray);