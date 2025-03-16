let readlineSync = require ("readline-sync");
let passwordIsValid = false;
let password;

while (!passwordIsValid) {

    //Start with variables can store the booleans tied to password requirements
    let passLongEnough = false;
    let upperCase = false;
    let hasNum = false;

    //Prompt User for Password Entry
    password = readlineSync.question("Please enter a valid Password: ")


    //Check for at least 8 characters in password
    if (password.length < 8) {
        console.log("Password requires at least 8 characters.");
        } else {
            passLongEnough = true;
        }

    //Loop through each character in the password

    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
        

        //Check for upper case letters (which is Unicode 65 to 90)
        if (charCode >= 65 && charCode <= 90) {
            upperCase = true;
        }

        //Check for a number in the password (Unicode 48 to 57)
        if (charCode >= 48 && charCode <= 57) {
            hasNum = true;
        }
    }

    if (!upperCase) {
    console.log("Password requires at least one Uppercase character.");
    }

    if (!hasNum) {
    console.log("Password requires at least one number.")
    }


    //Final check for all conditions met
    if (passLongEnough && upperCase && hasNum) {
        passwordIsValid = true;
    }
}

console.log("password accepted!");