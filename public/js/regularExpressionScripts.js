window.onload = function() {
	
	var name = /^[a-zA-Z ]{2,30}$/;
	var address = /[^!@#$%^&*-+=?<>:;\\{\\}].*$/;
	var phoneNumberRegex = /^[0-9]{10}/;
	var zipCodeRegex = /^[0-9]{5}/;
	var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	//var emailRegex = /^[a-zA-Z]@?\.[a-zA-Z]{2,3}$/;
	//var emailRegex = /^[a-zA-Z]@?\.[a-zA-Z]{2,3}$/;
	//([a-zA-Z]+|[0-9]+)
	
	
	var firstName = document.getElementById("firstName");
	firstName.onblur = function() {
		if(!name.test(firstName.value)) {
			firstName.style.borderColor = 'red';
		} else {
			firstName.style.borderColor = 'green';
		}
	}
	
	var lastName = document.getElementById("lastName");
	lastName.onblur = function() {
		if(!name.test(lastName.value)) {
			lastName.style.borderColor = 'red';
		} else {
			lastName.style.borderColor = 'green';
		}
	}
	
	
}