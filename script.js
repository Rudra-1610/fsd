const products = [
  { id: 1, name: "Apples", price: 1.5 },
  { id: 2, name: "Bananas", price: 1.0 },
  { id: 3, name: "Carrots", price: 0.75 },
  { id: 4, name: "Dairy Milk", price: 2.0 },
  { id: 5, name: "Eggs", price: 3.0 },
];

let cartCount = 0;

function addProductToList() {
  const productList = document.getElementById("product-list");
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;
    productList.appendChild(productDiv);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

window.onload = addProductToList;
