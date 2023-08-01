import { productsService } from "./product-service.js"; 

const createItem = (image, name, price, category, id) => {
    const item = document.createElement("div");
    item.classList.add("products__body--item");
    const content = `
      <div class="products__body--img">
          <img
           class="products__body__image"
           src="${image}"
           alt=""
          />
      </div>
      <span class="products__body__name text">${name}</span>
      <span class="products__body__price text">$ ${price}.00</span>
      <a class="products__body__link text--active" href="#">Ver producto</a>
      `;
    item.innerHTML = content;
    
    return item;
  };

  const toys = document.querySelector("[data-toy]");
  const clothes = document.querySelector("[data-clothes]");
  const others = document.querySelector("[data-other]");

  productsService.productItem()  
  .then((data) => {
    data.forEach(({ image, name, price, category, id }) => {
      const newItem = createItem(image, name, price, category, id);
      if (category == "Ropa"){
        clothes.appendChild(newItem);
      }
      if (category == "Juguete") {
        toys.appendChild(newItem);
      }
      if (category == "Otros"){
        others.appendChild(newItem);
      }
    });
  })
  .catch((error) => {
    alert("Ocurrió un error");
  });
  