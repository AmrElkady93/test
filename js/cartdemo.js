
function Product(price, name, quantity) {
    this.price = price;
    this.name = name;
    this.quantity = quantity;
}
$('.shoe-cart').click(function () {

    var x = $(this).parent().children();//.next('input[type=text]'). 
    var quantity = x[1].value;
    var name = x[2].value;
    var price = x[3].value;


    var newProduct = new Product(price, name, quantity);
    addProduct(newProduct);


});

function addProduct(newProduct) {

    if (newProduct != null) {
        var products;
        if (window.localStorage.getItem("cart") != null) {
            products = JSON.parse(localStorage.getItem("cart"));

            var index = products.findIndex(obj => obj.name == newProduct.name);
       
            if (index == -1) {

                products.push(newProduct);
                window.localStorage.setItem("cart", JSON.stringify(products));
            }

        } else {
            products = [];
            products.push(newProduct);
            window.localStorage.setItem("cart", JSON.stringify(products));
        }
    }

}




