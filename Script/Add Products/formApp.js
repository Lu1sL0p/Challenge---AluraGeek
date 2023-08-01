import { validationFunctions } from "./formValidation.js";
const inputs = document.querySelectorAll(".form__container__input");
const area = document.querySelector(".form__container__input--area");
const option = document.querySelector("[data-select]");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validationFunctions.validation(input.target);
  });
});

area.addEventListener("blur", (input) => {
  validationFunctions.validation(input.target)
})


option.addEventListener("blur", () =>{
  validationFunctions.optionsSelect(option);
})