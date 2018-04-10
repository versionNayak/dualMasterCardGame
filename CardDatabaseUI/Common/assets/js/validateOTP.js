function validateOTP(form) {
	
	var lOtp = document.getElementById("idOtp");
	
	var errOtp = 0;
	
	lOtp.style.border = "1px solid #ccc";
	
	document.getElementById('alertOtp').innerHTML="";
	
	if (!hasValue(lOtp.value)) {
		document.getElementById('alertOtp').innerHTML="Please enter sent OTP";
		lOtp.style.border = "2px solid red";
		errOtp=1;
	}
	
	if (errOtp==1 ){
		document.getElementById('alertForm').innerHTML="Please correct the errors highlighted below.";
		return false;
	}else{
		return true;
	}
	
}