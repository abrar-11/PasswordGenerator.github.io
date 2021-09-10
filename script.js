let generate = document.getElementById("generate");

let passDisplay = document.getElementById("passDisplay");
generate.addEventListener("click", () => {
    let length = document.getElementById("length");
    passDisplay.innerHTML = "";
    if (length.value) {
        let i = 0;
        let password = "";
        for (i = 0; i < length.value; i++) {
            let character = generatePassword();
            if (!(character === "undefined")) {
                password += character;
            }
        }
        console.log(password);
        if (password.length > 0) {
            passDisplay.innerHTML = password;
            console.log(password);
            console.log(password.length);
        }
    }
});

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let special = `~!@#$%^&*(){}[]'`;

let lowerCaseCheck = document.getElementById("LowerCase");
let upperCaseCheck = document.getElementById("UpperCase");
let numberCheck = document.getElementById("number");
let specialCheck = document.getElementById("Characters");

function generatePassword() {
    let pass = [];
    let flag = false;
    if (numberCheck.checked) {
        pass.push(getNumber());
        flag = true;
    }
    if (upperCaseCheck.checked) {
        pass.push(getUpperCase());
        flag = true;
    }
    if (lowerCaseCheck.checked) {
        pass.push(getlowerCase());
        flag = true;
    }
    if (specialCheck.checked) {
        pass.push(getSpecial());
        flag = true;
    }

    if (flag) {
        return pass[Math.floor(Math.random() * pass.length)];
    } else {
        return "";
    }
}

function getUpperCase() {
    return upperCase[Math.floor(Math.random() * upperCase.length)];
}
function getlowerCase() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSpecial() {
    return special[Math.floor(Math.random() * special.length)];
}
