const products = [
  {
    name: "Milk Pack",
    image: "https://www.bbassets.com/media/uploads/p/l/40215938_1-verka-double-toned-milk-yellow.jpg",
    price: 30,
    category: "Dairy"
  },
  {
    name: "Cheese Block",
    image: "https://m.media-amazon.com/images/I/71sMyqeQGjL.jpg",
    price: 120,
    category: "Dairy"
  },
  {
    name: "Amul Dark Chocolate",
    image: "https://www.amul.com/files/products/promotion/dark-55_100_chocolate_with_transparent.png",
    price: 50,
    category: "Chocolate"
  },
  {
    name: "Dairy Milk",
    image: "https://m.media-amazon.com/images/I/41p3Vg+6GLL._AC_.jpg",
    price: 40,
    category: "Chocolate"
  },
  {
    name: "Brown Bread",
    image: "https://m.media-amazon.com/images/I/71UbYicb3qL._AC_UF1000,1000_QL80_.jpg",
    price: 25,
    category: "Bakery"
  },
  {
    name: "Eggs Pack",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/9/NT/XD/YB/20818025/fresh-brown-shell-eggs-pack-of-6.jpg",
    price: 60,
    category: "Poultry"
  },
  {
    name: "Tomatoes (1kg)",
    image: "https://t4.ftcdn.net/jpg/05/72/95/29/360_F_572952963_YNVwHoPX0FWaENu6jShGiYpIICS3W1cc.jpg",
    price: 20,
    category: "Vegetables"
  },
  {
    name: "Potatoes (1kg)",
    image: "https://www.simplotfoods.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F0dkgxhks0leg%2FRKiZ605RAV8kjDQnxFCWP%2Fb03b8729817c90b29b88d536bfd37ac5%2F9-Unusual-Uses-For-Potatoes.jpg%3Ffm%3Dwebp&w=1920&q=75",
    price: 25,
    category: "Vegetables"
  }
];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cartCount.textContent = `Cart: ${cart.length}`;
}

products.forEach(product => {
  const productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Price: ₹${product.price}</p>
    <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
  `;
  productList.appendChild(productDiv);
});

function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
  updateCartCount();
}

updateCartCount(); // update on page load
