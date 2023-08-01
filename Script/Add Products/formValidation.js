export function validation(input) {
  const typeInput = input.dataset.type;

  if (input.validity.valid) {
    input.parentElement.classList.remove("invalid");
    input.parentElement.querySelector(".form__container__error").innerHTML = "";
  } else {
    input.parentElement.classList.add("invalid");
    input.parentElement.querySelector(".form__container__error").innerHTML =
      showErrorMessage(typeInput, input);
  }
}

const typeError = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
];

const errorMessages = {
  url: {
    valueMissing: "El campo de url no puede estar vacío",
    typeMismatch: "Formato incorrecto, vuelva a intentar",
  },
  name: {
    valueMissing: "El campo de nombre no puede estar vacío",
    tooShort: "El nombre debe de contener al menos 10 caracteres",
    typeMismatch: "Formato incorrecto, vuelva a intentar",
  },
  price: {
    valueMissing: "El campo de nombre no puede estar vacío",
    typeMismatch: "Formato incorrecto, vuelva a intentar",
  },
  description: {
    valueMissing: "El campo de descripción no puede estar vacío",
    tooShort: "El nombre debe de contener al menos 15 caracteres",
  },
};

function showErrorMessage(typeInput, input) {
  let message = "";
  typeError.forEach((error) => {
    if (input.validity[error]) {
      message = errorMessages[typeInput][error];
    }
  });

  return message;
}

function optionsSelect(option) {
  const message = document.querySelector("[data-wrong]");
  if (option.value == "wrong") {
    option.style.border = "2px solid var(--red)"
    message.style.display = "block";
  } else {
    option.style.border = "2px solid var(--blue)"
    message.style.display = "none";
  }
}

export const validationFunctions = {
  validation,
  optionsSelect,
};
