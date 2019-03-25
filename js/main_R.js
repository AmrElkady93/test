$(function(){
	var dp1 = $('#dp1').datepicker().data('datepicker');
	dp1.selectDate(new Date());
	//var dp2 = $('#dp2').datepicker().data('datepicker');
	// dp2.selectDate(new Date());
})
//-----------------------------------------------

/*
function validate(){
	var email = $("#mail").val();
	var mobile = $("#phoneNum").val();
	var password = $("#password").val();
    var passwordRepeat = $("#psw-repeat").val();

    
    if(validateEmail(email) && validateMobile(mobile) && validatePassword(password,passwordRepeat) && validateCreditCard(creditCard)  ){
    		return true ;
	}else{
			return false ;
	}
}
function validatePassword(password,passwordRepeat){
	if(password==passwordRepeat){
		document.getElementById("passwordlbl").innerHTML = "<b>Password</b>" ;
		return true ;
	}else{
		var paragraph = document.getElementById("passwordlbl");
		var msg ="password does not match";
		var msgview = paragraph.textContent;
		if(msgview.indexOf(msg)== -1){
		var text = document.createTextNode("password does not match");
		paragraph.appendChild(text);
		}
		return false ;
	}
}
function validateEmail(email){
	var regex =/.*@.*(.com)$/;
	if(regex.test(email)){
		document.getElementById("maillbl").innerHTML = "<b>Email</b>" ;
		return true;
	}else{
		var paragraph = document.getElementById("maillbl");
		var msgview = paragraph.textContent;
		var msg ="email is not valid";
		if(msgview.indexOf(msg)== -1){
		var text = document.createTextNode(" email is not valid");
		paragraph.appendChild(text);
		}
		return false ;
	}
	
}
function validateMobile(mobile){
	var regex =/^(01)(0|1|2)\d{8}$/;
	if(regex.test(mobile)){
		document.getElementById("phoneNumlbl").innerHTML = "<b>Phone Number</b>" ;
		return true;
	}else{
		var paragraph = document.getElementById("phoneNumlbl");
		var msg ="Phone number is not valid";
		var msgview = paragraph.textContent;
		if(msgview.indexOf(msg)== -1){
		var text = document.createTextNode(" Phone number is not valid");
		paragraph.appendChild(text);
		}
		return false ;
	}
}*/

//=====================================================================================================================================
//=====================================================================================================================================

function validatevalues(){
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('name') == 'email') {
            var regex =/.*@.*(.com)$/;
			if(regex.test($(input).val()) == false){
				return false;
			}
        }else if($(input).attr('name') == 'phonenumber') {
        	var regex =/^(01)(0|1|2)\d{8}$/;
			if(regex.test($(input).val()) == false){
				return false ;
			}
        }else if($(input).attr('type') == 'password' || $(input).attr('name') == 'password'){
        	var confirmpassword = $("#passwordconfirm").val();
        	console.log(confirmpassword);
        	if($(input).val() != confirmpassword || $(input).val() ==""){
        		return false ;
        	}
        }else if($(input).attr('name') == 'creditLimit'){
        	if($(input).val() <0 || $(input).val() == "" ){
        		return false ;
        	}
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

}