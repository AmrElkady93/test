function displayTable() {

    var table = "" //draw
    for (var i = 0; i < products.length; i++)
    {
        table += "<tr class=\"rem" + (i + 1) + "\"><td class=\"invert\">" + (i + 1) + "</td>\n\
<td class=\"invert-image\"><a href=\"single.html\"><img src=\"images/s1.jpg\" alt=\" \" class=\"img-responsive\"></a></td>\n\
<td class=\"invert\"> <div class=\"quantity\"><div class=\"quantity-select\">\n\
<div class=\"entry value-minus\">&nbsp;</div>\n\
<div class=\"entry value\"><span>" + products[i].quantity + "</span></div>\n\
<div class=\"entry value-plus active\">&nbsp;</div></div></div>\n\
</td><td class=\"invert\">" + products[i].name + "</td><td class=\"invert\">" + products[i].price + "</td><td  ; class=\"invert\"><div class=\"rem\"><div  onclick=\"deleteRow(this)\" class=\"close\"  id=\"row"+(i+1)+"\"></div></div></td></tr>";


    }

    document.getElementById("drawid").innerHTML = table;

    //add puls button
    $('.value-plus').on('click', function () {
        var divUpd = $(this).parent().find('.value'),
                newVal = parseInt(divUpd.text(), 10) + 1;
        divUpd.text(newVal);
        var index = $(this).parent().parent().parent().parent().index();
        ChangeQuntity(index, newVal)

    });

    //add minus button
    $('.value-minus').on('click', function () {
        var divUpd = $(this).parent().find('.value'),
                newVal = parseInt(divUpd.text(), 10) - 1;
        if (newVal >= 1)
            divUpd.text(newVal);
        // $(this).parent().parent().parent().cl;
        var index = $(this).parent().parent().parent().parent().index();
        ChangeQuntity(index, newVal)
    });
}




var products = JSON.parse(localStorage.getItem("cart"));

for (var i = 0; i < products.length; i++)
{


    //add remove action 
    $(document).ready(function (c) {
        var close = ".close" + (i + 1);
        var rem = ".rem" + (i + 1);
        $(close).on('click', function (c) {
            $(rem).fadeOut('slow', function (c) {
                $(rem).remove();
            });
        });
    });

}



//delete product from cart 
function deleteRow(r) {
    //var i = r.parentNode.parentNode.parentNode.index();
    //var parent = this.parent().closest('td').attr("class");
    var classname = $(r).attr('id');
    //alert(classname);
    var i = $('#' + classname).parent().parent().parent().index()//.parent().closest('td').attr('class'));
   // alert(i);
    products = JSON.parse(localStorage.getItem("cart"));
    products.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(products));

}

function ChangeQuntity(index, newVal) {
    products = JSON.parse(localStorage.getItem("cart"));
    products[index].quantity = newVal;
    localStorage.setItem('cart', JSON.stringify(products));

}




window.onload = displayTable();

