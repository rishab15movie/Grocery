// Load cart items from backend
fetch('http://localhost:3000/api/cart')
  .then(res => res.json())
  .then(data => {
    const cartDiv = document.getElementById('cart-items');
    if (data.length === 0) {
      cartDiv.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }

    cartDiv.innerHTML = '<ul>' + data.map(item => `
      <li>Product ID: ${item.productId} — Quantity: ${item.quantity}</li>
    `).join('') + '</ul>';
  });

// Place Order
function placeOrder() {
  fetch('http://localhost:3000/api/order', {
    method: 'POST'
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      location.reload(); // refresh the cart page
    });
}