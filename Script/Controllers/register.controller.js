import { productsService } from "./product-service.js";
const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const image = document.querySelector("[data-url]").value;
  const name = document.querySelector("[data-name]").value;
  const category = document.querySelector("[data-select]").value;
  const price = document.querySelector("[data-price]").value;
  const description = document.querySelector("[data-description]").value;

  productsService
    .createProduct(image, name, category, price, description)
    .then(() => {
      window.location.href = "../screens/products.html";
    })
    .catch((err) => alert("erester"));
});
