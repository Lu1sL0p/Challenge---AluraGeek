import { productsService } from "./product-service.js";

const createItem = (image, name, price, id) => {
  const item = document.createElement("div");
  item.classList.add("products__body--item");
  toString(price);
  const content = `
    <div class="products__body--img">
        <img
         class="products__body__image"
         src="${image}"
         alt=""
        />
        <div class="products__body__tools">
         <img src="../assets/Images/Products/Trash.svg" alt="" class="products__body__tools--btn trash" id="${id}">
         <a href="../screens/editProduct.html?id=${id}">
          <img src="../assets/Images/Products/Pencil.svg" alt="" class="products__body__tools--btn products__body__tools--btn--pencil">
         </a>
        </div>
    </div>
    <span class="products__body__name text">${name}</span>
    <span class="products__body__price text">$ ${price}.00</span>
    <a class="products__body__link text--active" href="#">Ver producto</a>
    `;
  item.innerHTML = content;

  const deleteBtn = item.querySelector(".trash");
  deleteBtn.addEventListener("click", () => {
    const id = deleteBtn.id;
    productsService.deleteItem(id).then(() => {})
    .catch((error) => 
      alert("Ocurrió un error"));
  })
  
  return item;
};

const section = document.querySelector("[data-type-content]");

productsService
  .productItem()
  .then((data) => {
    data.forEach(({ image, name, price, id }) => {
      const newItem = createItem(image, name, price, id);
      section.appendChild(newItem);
    });
  })
  .catch((error) => {
    alert("Ocurrió un error");
  });

