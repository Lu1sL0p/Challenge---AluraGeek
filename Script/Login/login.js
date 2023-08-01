const btn = document.querySelector("[data-log]");

btn.addEventListener("submit", e => {
    e.preventDefault();
    window.location.href = "../screens/products.html";
})

