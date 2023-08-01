const nombre = document.querySelector("[data-name]");
const msg = document.querySelector("[data-msg]");
const error = document.querySelector("[data-error]");
const error2 = document.querySelector("[data-error2]");

nombre.addEventListener("blur", (e) => {
  if (nombre.validity.valid) {
    nombre.parentElement.classList.remove("invalid");
    error.style.display = "none";
  } else {
    nombre.parentElement.classList.add("invalid");
    error.style.display = "block";
  }
});

msg.addEventListener("blur", (e) => {
  if (msg.validity.valid) {
    error2.style.display = "none";
    msg.parentElement.classList.remove("invalid");
  } else {
    msg.parentElement.classList.add("invalid");
    error2.style.display = "block";
  }
});

const form = document.querySelector("[data-contact]");
const succes = document.querySelector("[data-succes]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  succes.style.display = "block";

  setTimeout(() => {
    succes.style.display = "none"
  }, 4000);
});
