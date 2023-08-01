import { validation } from "./loginValidation.js";
const inputs = document.querySelectorAll(".login__box");

inputs.forEach(input => {
    input.addEventListener("blur", input => {
        validation(input.target);
    })
})