$('.add').on('click',addProductToCart);

function product(name,price){
    this.name=name;
    this.price=price;
}
function addProductToCart(){
    var name=$('.product_name').html();
    var price=$('.item_price').html(); 
    var newProduct=new product(name,price);
    addProduct(newProduct) ;
    alert(price);
}

function addProduct(newProduct) {
    
    if (newProduct != null) {
        var contacts;
        if (window.localStorage.getItem("products") != null) {
            contacts = JSON.parse(localStorage.getItem("products"));
            contacts.push(newProduct);
            window.localStorage.setItem("products", JSON.stringify(contacts));
        } else {
            contacts = [];
            contacts.push(newProduct);
            window.localStorage.setItem("products", JSON.stringify(contacts));
        }
    }
}