const api = new XMLHttpRequest()
api.open("GET", "https://dummyjson.com/carts")
api.send()
api.onreadystatechange = () => {
    console.log(api.readyState);

    if (api.readyState == 4) {

        if (api.status >= 200 && api.status < 300) {

            response = JSON.parse(api.responseText)
            // console.log(response);
            cartItems = response.carts
            console.log(cartItems[0].products[0]);
            cartItems.forEach(item => {
                item.products.forEach(product => {
                    cards.innerHTML += `   <div class="card" style="width: 18rem;">
            <img width="100%" src="${product.thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              
              <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
               <div class="price-button">
                   <a href="#" class="btn">Buy Now</a> 
                    <h5 class="price">&#x20B9 ${product.price}</h5>
               </div>
            </div>
          </div>`})

            });



            ;



        }
        else {
            console.log("Api call failed");

        }

    }
    else {
        console.log("Waiting for server response");


    }
}