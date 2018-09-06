var message = "Hello";

// using const
// short for constant,
// the value shouldnt change
// so dont use when the value will change, instead use let
// can help you debug or assure that a variable will not change
// block level (between the "{}")
const pi = 3.141


// used when you want to reasign a variable
// let has block level scoping
// especially usefull in "for" loops
let score = 38;

const buttons = document.getElementsByTagName("button");

for(let i = 0;i < buttons.length; i++) { // let is used her so i can be incremented
    const button = buttons[i];
    button.addEventListener("click", function() {
        alert("Button " + i + " Pressed");
    });
}
