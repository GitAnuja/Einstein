function getValues(){
	var r = document.getElementById("r").value;
	var c = document.getElementById("c").value;
	for(var i=0; i<r; i++){
		var row = document.createElement("tr");
		for(var j=0; j<c; j++){
			var cell = document.createElement("td");
			var input = document.createElement("input");
			cell.append(input);
			row.append(cell);
		}
		document.getElementById("values").append(row);
	}
}