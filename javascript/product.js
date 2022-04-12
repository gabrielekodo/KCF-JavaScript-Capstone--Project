const detailContainer = document.querySelector(".productDetails");

const productToDisplay = JSON.parse(localStorage.getItem("details"));

detailContainer.innerHTML = `
<div class="card card-info"  data-id="${productToDisplay.id}">
                <div class="title">${productToDisplay.name}</div>
                <div class="card-container">
                <img src="${productToDisplay.img}" alt="${productToDisplay.name}">
             <div class="info"> 
               <div class="Price">Price: UGX ${productToDisplay.price}</div>
                <div class="Price">In Stock: ${productToDisplay.stock}</div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="reviews">(60 reviews)</span>
                </div>
                <input type="number" min="1" class="btn" placeholder="Enter number of items" value="1">
                <button class="Add-to-cart orderProduct">Add to cart</button>
                </div>
                </div>
            </div>


`;
