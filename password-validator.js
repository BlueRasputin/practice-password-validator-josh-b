let readlineSync = require ("readline-sync");
let passwordIsValid = false;
let password;

while (!passwordIsValid) {
    
    let passLongEnough = false;
    let upperCase = false;
    let hasNum = false;
    
    password = readlineSync.question("Please enter a valid Password: ")

    
    if (password.length < 8) {
        console.log("Password requires at least 8 characters.");
        } else {
            passLongEnough = true;
        }

    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
    
        
        if (charCode >= 65 && charCode <= 90) {
            upperCase = true;
        }

        
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


    
    if (passLongEnough && upperCase && hasNum) {
        passwordIsValid = true;
    }
}

console.log("password accepted!");