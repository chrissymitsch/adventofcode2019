counter = 0;
for (var i = 236491; i < 713787; i++) {
	var stringify = i + "";
	var bedingung1 = []; // 22
  var bedingung2 = []; // 123
  for (var j = 0; j < stringify.length; j++) {
  	var countoccurence = (stringify.match(new RegExp(stringify[j], "g")) || []).length;
  	if (countoccurence == 2) {
    	bedingung1[j] = "true";
    } else {
    	bedingung1[j] = "false";
    }
    if (j < stringify.length - 1) {
      if (parseInt(stringify[j], 10) <= parseInt(stringify[j + 1], 10)) {
        bedingung2[j] = "true";
      } else {
        bedingung2[j] = "false";
      }
    }
  }
  if (bedingung1.includes("true") && !bedingung2.includes("false")) {
  	counter++;
  }
}

console.log(counter);