<<<<<<< HEAD
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
=======
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("cart");

open.addEventListener("click", () => {
    container.classList.add("active");
});

close.addEventListener("click", () => {
    container.classList.remove("active");
});


// CODE START HERE-- TO REMOVE ITEMS FROM CART

// const addToCartItem = document.getElementsByClassName('shop-item-button')

// console.log(addToCartItem)
// for(let i=0; i<addToCartItem.length; i++)
// {
//     const addItem = addToCartItem[i];
//     addItem.addEventListener('click',function(event){
//         const addButtonClicked=event.target;
//         addButtonClicked.addEventListener('click',addToCartClicked)
        
//     })
// }
// function addToCartClicked(event)
// {
//     const button = event.target;
//     const shopItem =button.parentElement.parentElement;
//     const title =shopItem.getElementsByClassName('shop-item-title')[0].innerText;
//     const price =shopItem.getElementsByClassName('shop-item-price')[0].innerText;
//     const imageSrc =shopItem.getElementsByClassName('shop-item-image')[0].src;

//     console.log(title)
//     addItemToCart(title,price,imageSrc)
// }
// function addItemToCart(title,price,imageSrc)
// {
//     const cartRow =document.createElement('div')
//     cartRow.classList.add('cart-row')
//     const cartItems =document.getElementsByClassName('cart-items')[0]
//     const cartRowContent=`  <div class="cart-item cart-column">
//                     <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
//                     <span class="cart-item-title">${title}</span>
//                 </div>
//                 <span class="cart-price cart-column">${price}</span>
//                 <div class="cart-quantity cart-column"><!-- this div is inside cart-row  so  this is the parenet of this div-->
//                     <input class="cart-quantity-input" type="number" value="1">
//                     <button class="btn btn-danger" type="button">REMOVE</button>
//                     <!--here button parent element is cart-quantity cart-column because button is inside this -->
//                 </div>`
//                 cartRow.innerHTML=cartRowContent
//     cartItems.append(cartRow)

// }
>>>>>>> aaa54f26772c7664c79f502f4086154d077bda3f
