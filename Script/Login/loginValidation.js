export function validation(input) {
  const typeInput = input.dataset.type;

  if (input.validity.valid) {
    input.parentElement.classList.remove("invalid");
    input.parentElement.querySelector(".login__errorMessage").innerHTML = "";
  } else {
    input.parentElement.classList.add("invalid");
    input.parentElement.querySelector(".login__errorMessage").innerHTML = getMessageError(typeInput, input);
  }
}

const typeError = ["valueMissing", "typeMismatch"];

const errorMessages = {
  email: {
    valueMissing: "El campo de Coreo Electrónico es boligatorio",
    typeMismatch: "Formato incorrecto, vuelva a intentar",
  },
  password: {
    valueMissing: "El campo de Contraseña es boligatorio",
    typeMismatch: "Formato incorrecto, vuelva a intentar",
  },
};

function getMessageError(typeInput, input) {
    let message = "";

    typeError.forEach(error => {
        if (input.validity[error]){
            message = errorMessages[typeInput][error];
        }
    });

    return message;
}