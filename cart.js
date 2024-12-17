
let cart = [];
let total = 0;

function addToCart(product, price,img) {

cart.push({ product, price });


total += price;


displayCart();
}

function displayCart() {
const cartList = document.getElementById("cart");
const totalElement = document.getElementById("total");


cartList.innerHTML = "";


cart.forEach((item) => {
const listItem = document.createElement("li");

listItem.textContent = `${item.product} - $${item.price }`;

cartList.appendChild(listItem);
});


totalElement.textContent = `Total: $${total}`;
}
function addToCart(product, price, img) {

let item = cart.find(item => item.product === product);
if (item) {
    item.quantity += 1;
    item.totalPrice = item.quantity * item.price;
} else {
    cart.push({
        product,
        price,
        img,
        quantity: 1,
        totalPrice: price
    });
}
total += price;
displayCart();
}

function displayCart() {
const cartList = document.getElementById("cart-items");
const totalElement = document.getElementById("total");


cartList.innerHTML = "";

cart.forEach((item) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("col-12", "col-md-6", "col-lg-4", "cart-item");

    cartItemElement.innerHTML = `
       <img src="${item.img}" alt="${item.name}" width="80" height="80" class="me-2"> 
        <div class="cart-item-details">
            <h4>${item.product}</h4>
            <p>Price: $${item.price}</p>
            <p>Quantity: <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.product}', this.value)"></p>
            <p>Total: $${item.totalPrice}</p>
            <button onclick="removeItem('${item.product}')">Remove</button>
        </div>
        `;
    cartList.appendChild(cartItemElement);
});

totalElement.textContent = `$${total.toFixed(2)}`;
}

function updateQuantity(product, newQuantity) {
const item = cart.find(item => item.product === product);
if (item) {
    const priceDifference = item.price * (newQuantity - item.quantity);
    item.quantity = newQuantity;
    item.totalPrice = item.price * newQuantity;
    total += priceDifference;
}
displayCart();
}

function removeItem(product) {  
const itemIndex = cart.findIndex(item => item.product === product);
if (itemIndex !== -1) {
    total -= cart[itemIndex].totalPrice;
    cart.splice(itemIndex, 1);
}
displayCart();
}





  