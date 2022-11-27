// LOADING ALL THE PRODUCT ON SITE FROM DATABASE WHENEVR SITE IS VISITED
const parentDiv = document.getElementsByClassName("shop-items")[0];
window.addEventListener("load", () => {
  axios.get("http://localhost:3000/products").then((products) => {
    products.data.productDetails.forEach((product) => {
      const itemsDiv = `<div class="shop-item">
                    <span class="shop-item-title">${product.title}</span>
                    <img class="shop-item-image" src="${product.image}">
                    <div class="shop-item-details">
                        <span class="shop-item-price">$${product.price}</span>
                        <button class="btn btn-primary shop-item-button" onclick="addToCart(${product.id})" type="button">ADD TO CART</button>  
                    </div>`;
      parentDiv.innerHTML += itemsDiv;
    });
  });
});

function addToCart(product) {
  axios
    .post("http://localhost:3000/cart", { productId: product })
    .then((res) => {
      if (res.status == 200) {
        CreateNotification(res.data.message);
        console.log(res.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function CreateNotification(message) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.innerText = message;
  notificationContainer.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
