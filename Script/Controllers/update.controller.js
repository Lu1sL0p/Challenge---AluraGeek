import { productsService } from "./product-service.js";

const form = document.querySelector("[data-form]");



const getInformation = async () => {
  const address = new URL(window.location);
  const id = address.searchParams.get("id");
  const url = document.querySelector("[data-url]");
  const name = document.querySelector("[data-name]");
  const category = document.querySelector("[data-select]")
  const price = document.querySelector("[data-price]");
  const description = document.querySelector("[data-description]");

  try {
    const product = await productsService.detailProduct(id);
    if (true) {
      url.value = product.image;
      name.value = product.name;
      price.value = product.price;
      description.value = product.description;
      category.value = product.category;
    } else {
    }
  } catch(err) {
    console.log(err)
  }
};

getInformation();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const address = new URL(window.location);
  const id = address.searchParams.get("id");
  const url = document.querySelector("#url").value;
  const name = document.querySelector("[data-name]").value;
  const category = document.querySelector("[data-select]").value;
  const price = document.querySelector("[data-price]").value;
  const description = document.querySelector("[data-description]").value;


  productsService.updateItem(description, url, name, category, price, id).then(() => {
    window.location.href = "../screens/products.html";
  });
});
