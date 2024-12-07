function validateFullName() {
    var error = document.getElementById("nameError");
    var input = document.getElementById("fullName").value;
    var checkChars = /^[\sA-Za-z]+$/
    var splitName = input.split(' ');
    var numSpaces = splitName.length;

    error.innerHTML = "";

    if (input === "") {
       error.innerHTML = "<b>Your name input cannot be empty.</b>";
       return false;
    }

    if (!checkChars.test(input)) {
       error.innerHTML = "<b>Your name can only contain letters and spaces.</b>";
       return false;
    }

    if (numSpaces != 2 || splitName[1] == "") {
       error.innerHTML = "<b>You must only enter your first and last name separated by a single space.</b>";
       return false;
    }

    return true;
}