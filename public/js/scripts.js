/*var total;

//Function called from the html
function calculate() {
	var field1 = (document.getElementById("field1")).value;
	var field2 = (document.getElementById("field2")).value;	
	performOperations(field1,field2);
}

//Function to reset the text-fields
function resetMathVariables() {
	document.getElementById("field1").value = "";
	document.getElementById("field2").value = "";
	
	document.getElementById("addition").checked = false;
	document.getElementById("subtraction").checked = false;
	document.getElementById("multiplication").checked = false;
	document.getElementById("division").checked = false;
	
	document.getElementById("solution1").innerHTML = "";
	document.getElementById("error").innerHTML = "";
}

//Function to actually perform the operation as specified by the user.
//The function checks if the fields are valid Number and after validation, the user selected operation is peformed
function performOperations(field1, field2) {
	if(isNaN(field1) || isNaN(field2) || field1 === "" || field2 === "") {
		document.getElementById("error").innerHTML = "Invalid data entered!";
		document.getElementById("solution1").innerHTML = "";
		return;
	}
	var field1 = field1;
	var field2 = field2;
	
	var type1 = checkType(field1);
	var type2 = checkType(field2);
	
	if(type1 === 1 && type2 === 1){
		field1 = parseInt(field1);
		field2 = parseInt(field2);
	} else if ( type1 === 1 && type2 === 2 ){
		field1 = parseInt(field1);
		field2 = parseFloat(field2);
	} else if ( type1 === 2 && type2 === 1) {
		field1 = parseFloat(field1);
		field2 = parseInt(field2);
	} else if ( type1 === 2 && type2 === 2) {
		field1 = parseFloat(field1);
		field2 = parseFloat(field2);
	}
	
	if(document.getElementById("addition").checked) total = field1 + field2;
	else if(document.getElementById("subtraction").checked) total = field1 - field2;
	else if(document.getElementById("multiplication").checked) total = field1 * field2;
	else if(document.getElementById("division").checked) total = field1 / field2;
	
	document.getElementById("solution1").innerHTML = total;
	document.getElementById("error").innerHTML = "";
}

//Function to validate if the function is a number
function checkType(field) {
	//Check if Integer
	if(field % 1 === 0 && !isNaN(field)) return 1;
	else if(field % 1 != 0 && !isNaN(field)) return 2;
	else return 3;
}
*/
window.onload = function() {
$('#addition').click(function(){	
	var fNo = document.getElementById('field1').value;
	var sNo = document.getElementById('field2').value;
	//$.post('/addition/'+fNo+'/'+sNo);
	//$.post('/addition');
	$.get("/addition",{fNo:fNo, sNo:sNo});
	//$.get("/addition",{fNo:fNo, sNo:sNo});
	});
}