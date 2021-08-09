function validate() {  
	var result = "";	
	result += validateName(); 	
	result += validateEmail();
	result += validateAge();
	result += validatePassword();
	result += validateTerms();
	
	if (result == "") return true;
	
	alert("Validation Result:\n\n" + result);
	return false;	
}

function validateName() {
	var name = document.getElementsByName("name")[0].value;
	if (name.length <= 3)
		return "Name should be at least three characters.\n";	
	return "";
}

function validatePassword() {
	var password = valueOf("password");
	
	
	if (password.length <= 6) 
		return "Password should be at least 6 characters.\n";
	
	return "";
}
function validateAge() {
	var age = valueOf("age");
	
	
	if (age <= 10) 
		return "Don't allow less than 10year .\n";
	
	return "";
}

function validateEmail() {
	var email = valueOf("email");
	
	
	if (email.indexOf('@') == -1) 
		return "Email should be a valid address.\n";
	
	
	return "";	
}

function validateTerms() {
	var terms = document.getElementsByName("terms")[0];
	if (!terms.checked)
		return "Please accept the Terms of Service and Privacy Policy";	
	return "";
}

function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}
