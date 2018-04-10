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
		document.getElementById("form").style.display = "";
	}
}

function form(){
	var r = document.getElementById("r").value;
	var c = document.getElementById("c").value;
	var arr = [];
	var table = document.getElementById("values").children;
	var inner = Math.ceil(c/3);
	for(var i=0; i<r; i++){
		var arr1 = [];
		var tr = table[i].children;
		for(var j=0; j<c; j++){
			arr1.push(tr[j].children[0].value);
		}
		arr.push(arr1);
	}
	for(var i=0; i<r; i++){
		var row = document.createElement("tr");
		for(var j=0; j<c; j++){
			var cell = document.createElement("td");
			var table1 = document.createElement("table");
			table1.border = "1";
			table1.width = "100%";
			for(var k=0; k<inner; k++){
				var row1 = document.createElement("tr");
				for(var l=0; l<3; l++){
					var cell1 = document.createElement("td");
					var value = arr[i][k*3+l];
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
	document.getElementById("clues").style.display = "";
}

function add(){
	var row = document.getElementsByClassName("row")[0];
	var clone = row.cloneNode(true);
	document.getElementById("clues").children[0].append(clone);
}