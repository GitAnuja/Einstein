function form(obj){
	var inner = Math.ceil(obj.c/3);
	for(var i=0; i<obj.r; i++){
		var row = document.createElement("tr");
		for(var j=0; j<obj.c; j++){
			var cell = document.createElement("td");
			var table1 = document.createElement("table");
			table1.border = "1";
			table1.width = "100%";
			for(var k=0; k<inner; k++){
				var row1 = document.createElement("tr");
				for(var l=0; l<3; l++){
					var cell1 = document.createElement("td");
					var value = obj.values[i][k*3+l];
					value = value ? value : "";
					cell1.innerText = value;
					row1.append(cell1);
				}
				table1.append(row1);
			}
			cell.append(table1);
			row.append(cell);
		}
		document.getElementById("formValues").append(row);
	}
	formRules(obj);
}

function formRules(obj){
	var table = document.getElementById("clues");
	for(var i=0; i<obj.clues.length; i++){
		var row = document.createElement("tr");
		table.append(row);
		var td1 = document.createElement("td");
		var input = document.createElement("input");
		td1.append(input);
		input.type = "checkbox";
		row.append(td1);
		var td2 = document.createElement("td");
		td2.innerText = obj.clues[i];
		row.append(td2);
	}
}