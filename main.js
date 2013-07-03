var finder = require("./finder.js");
var partlist = require("./partList.json");

var startDate = new Date(2013, 5, 29);

for(var partname in partlist){
	var partid = partlist[partname];
	finder.find(startDate, new Date(), partid);
}
