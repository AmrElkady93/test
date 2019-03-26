
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


function displayTable() {
    var products = JSON.parse(localStorage.getItem("cart"));
    var table = "" //draw
    for (var i = 0; i < products.length; i++)
    {
        table += "<tr class=\"rem1\"><td class=\"invert\">"+(i+1)+"</td>\n\
<td class=\"invert-image\"><a href=\"single.html\"><img src=\"images/s1.jpg\" alt=\" \" class=\"img-responsive\"></a></td>\n\
<td class=\"invert\"> <div class=\"quantity\"><div class=\"quantity-select\">\n\
<div class=\"entry value-minus\">&nbsp;</div>\n\
<div class=\"entry value\"><span>1</span></div>\n\
<div class=\"entry value-plus active\">&nbsp;</div></div></div>\n\
</td><td class=\"invert\">"+products[i].name+"</td><td class=\"invert\">"+products[i].price+"</td><td class=\"invert\"><div class=\"rem\"><div class=\"close1\"></div></div></td></tr>";
    }
    $("draw").html(table);
}

