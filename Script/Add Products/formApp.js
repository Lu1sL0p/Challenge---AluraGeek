import { validation } from "./formValidation.js";
const inputs = document.querySelectorAll(".form__container__input");
const area = document.querySelector(".form__container__input--area");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validation(input.target);
  });
});

area.addEventListener("blur", (input) => {
  validation(input.target)
})