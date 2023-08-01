const createProduct = (image, name, category, price, description) => {
  return fetch("http://localhost:3000/product", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({image, name, category, price, description, id: uuid.v4()}),
  });
};

const productItem = () =>
  fetch("http://localhost:3000/product").then((respuesta) => respuesta.json());


const detailProduct = (id) => {
  return fetch(`http://localhost:3000/product/${id}`).then((respuesta) => respuesta.json())
}

const updateItem = (description, image, name, category, price, id) => {
  return fetch(`http://localhost:3000/product/${id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({description, image, name, category, price}),
  })
  .then(() => {})
  .catch(err => alert(err))
}

const deleteItem = (id) => {
  return fetch(`http://localhost:3000/product/${id}`, {
    method: "DELETE",
  });
};

export const productsService = {
  createProduct,
  productItem,
  detailProduct,
  updateItem,
  deleteItem,
};
