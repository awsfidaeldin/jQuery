

function validateNameAddress()
	{
		var name = $('#name').val();
		if ( name === '' )
		{

			//add red border
			$('#name').addClass('invalid');
			$('#name').removeClass('valid');
		}
		else
		{
			//add green border
			$('#name').addClass('valid');
			$('#name').removeClass('invalid');
		}
		


		var address = $('#address').val();
		if ( address === '' )
		{

			//add red border
			$('#address').addClass('invalid');
			$('#address').removeClass('valid');
		}
		else
		{
			//add green border
			$('#address').addClass('valid');
			$('#address').removeClass('invalid');
		}

	}

$('button').on('click',validateNameAddress);




function validatePhone()
	{
		var phone = $('#phone').val();
		
		if(phone.length < 10) {
			$('#phone').addClass('invalid');
		} else if(arr.length > 10) {
			$('#phone').addClass('invalid');
		} else {
			$('#phone').addClass('valid');
		}
	}

$('#phone').on('keyup',validatePhone);




function validateEmail()
	{
		var email = $('#email').val();
		
		var n = email.indexOf("@");

		if(n === -1) {
			$('#email').addClass('invalid');
		} else {
			$('#email').addClass('valid');
		}
	
}

$('button').on('click',validateEmail);



function WritePhone()
	{
		var phone = $('#phone').val();
		// 3034763506
		if ( phone === '' )
		{
			//add red border
			$('#phone').addClass('invalid');
			$('#phone').removeClass('valid');
		}
		else
		{
			$('#phone').addClass('valid');
			$('#phone').removeClass('invalid');
			var areaCode = "(" + phone.substring(0,3) + ")";
			var firstDigit = "-" + phone.substring(3,6) + "-";
			var lastDigit = phone.substring(6,10);
			$("#phone").val(areaCode + firstDigit + lastDigit);
			// $("#phone").val('Phone # is: ' + phone);
		}
	}

$('button').on('click',WritePhone);


