function validate() {
    // trim() to remove spaces
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var contact = document.getElementById("contact").value.trim();
    var position = document.getElementById("position").value;
    var experience = document.getElementById("experience").value.trim();

    // Initially the flag is set to true
    var isValid = true;

    if (name === "" || name.length < 5) {
        alert("Enter Valid Name.");
        isValid = false;
    }


    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "" || !email.match(emailPattern)) {
        alert("Enter a Valid email.");
        isValid = false;
    }


    if (contact === "" || contact.length !== 10) {
        alert("Enter a valid 10-digit Contact Number.");
        isValid = false;
    }

    if (position === "") {
        alert("Select a Position to apply for.");
        isValid = false;
    }

    if (experience === "" || experience.length < 10) {
        alert("Enter Proper Details of Previous Experience.");
        isValid = false;
    }
    return isValid;
}