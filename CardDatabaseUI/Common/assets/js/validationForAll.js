// Set value for salutation
//alert('Inside ValidationForAll');

//var integerOnly = /^[0-9]+$/;
var integerOnly = /^[1-9][0-9]*$/;
var charOnly = /^[A-Za-z- ]+$/;
var numberOnly = /^\d+$/;
//var decimalOnly = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;
var uppercaseOnly = /^[A-Z]+$/;
var lowercaseOnly = /^[a-z]+$/;
var alphanumericOnly = /^[A-Za-z0-9]+$/;
var stringOnly = /^[A-Za-z\s]+$/;
var stringhyphenOnly = /^[-\sa-zA-Z]+$/;
var numericWithDecimalTwoPlaces = "(?=[^\0])(?=^([0-9]+){0,1}(\.[0-9]{1,2}){0,1}$)";
var decimalOnly = /^(0|[1-9]\d*)(\.\d+)?$/;

function testInputDataValue(myData, restrictionType) {
	 //alert('Inside testInputData ');
	 //alert('Restriction Type '+ restrictionType);
	 if(myData!==''){
	 //if (!this.myData.match(restrictionType)){
	 if(restrictionType.test(myData)){
	   //alert('It is GOOD!');
	   return true;
	  }else{
	   //alert('Your data input is invalid!');
		return false;  
	  }
	 }else{
	  //alert('Please enter data!');
	  return false;	 
	 }   
	}

function testInputData(myfield, restrictionType) {
 //alert('Inside testInputData ');
 //alert('Restriction Type '+ restrictionType);
 var myData = myfield.value;
 if(myData!==''){
 //if (!this.myData.match(restrictionType)){
 if(restrictionType.test(myData)){
   //alert('It is GOOD!');
   return true;
  }else{
   //alert('Your data input is invalid!');
	return false;  
  }
 }else{
  //alert('Please enter data!');
  return false;	 
 }   
}


// Validate Date of Birth

function validateDOB(pDate){
	//alert("In validate date");
	this.pDate=pDate;
	var lDate=this.pDate;
    var eighteenYearsAgo = moment().subtract('years', 18);
    var birthday = moment(lDate);
    //alert("Birthday: "+birthday);
    if (!birthday.isValid()) {
//    	alert("Invalid DOB: "+ birthday);
        return 0;    
    }
    else if (eighteenYearsAgo.isAfter(birthday)) {
    	//alert("Age more than 18");
        return 1;    
    }
    else {
    	//alert("Age less than 18");
        return 2;    
    }
}

function date1AfterDate2(date1, date2){
	//alert("In compare date");
	
	var date1Str = date1;
	var date2Str = date2;

	//alert("Date1 String: " + date1Str);
	//alert("Date2 String: " + date2Str);

    var lDate1 = moment(date1, 'DD-MM-YYYY');
    var lDate2 = moment(date2, 'DD-MM-YYYY');

	if (lDate1 > lDate2){
    	return true;
    }

    if (lDate1 < lDate2){
    	return false;
    }
    
}


//Check if a date entered is a past date
function isPastDate(iDate) {
//	alert('Inside isPastDate '+iDate);
	//return false;
	var day = iDate.slice(0,2);
//	alert('Day'+ day);
	var month = iDate.slice(3,5);
//	alert('Month'+ month);
	var year = iDate.slice(6);
//	alert('Year'+ year);
	
	var iDateReformatted  = year.concat("-", month, "-", day);
//	alert ("lLoanStartDateVal: " + lLoanStartDateVal);
	var lDate = new Date(iDateReformatted);
	//var selectedText=iDate;
	var selectedDate=new Date(lDate.toString());
//	alert('Selected Date '+ selectedDate);
	var today=new Date();
	var dd=today.getDate();
	var mm=today.getMonth()+1;
	var yyyy=today.getFullYear();

	if(dd<10){
		dd='0'+dd;
	}
	if(mm<10){
		mm='0'+mm;
	}
	var today=new Date(mm+'/'+dd+'/'+yyyy);
//	alert('Today '+ today);

	if(selectedDate>today){
	//	alert('success');
		return false;
	}
	else return true;
}

//Check if a date entered is a future date
function isFutureDate(iDate) {
	//alert('Inside isFutureDate '+iDate);
	var monthName = iDate.slice(0,3);
	//alert('Month '+ monthName);
	var monthNumber = new Date(Date.parse(monthName +" 1, 2017")).getMonth()+1
	//alert('Month No. '+ monthNumber);
	var year = iDate.slice(4);
	//alert('Year'+ year);
	
	var iDateReformatted  = year.concat("-", monthNumber, "-01");
	//var iDateReformatted  = month.concat("-", year);
	//alert ("lLoanStartDateVal: " + lLoanStartDateVal);
	var lDate = new Date(iDateReformatted);
	//var selectedText=iDate;
	var selectedDate=new Date(lDate.toString());
	//alert('Selected Date '+ selectedDate);
	var today=new Date();
	var dd=today.getDate();
	var mm=today.getMonth()+1;
	var yyyy=today.getFullYear();

	if(dd<10){
		dd='0'+dd;
	}
	if(mm<10){
		mm='0'+mm;
	}
	var today=new Date(mm+'/'+dd+'/'+yyyy);
	//alert('Today '+ today);

	if(selectedDate<today){
		return false;
	}
	else return true;
}
function aa(startdate,bdateplusLife){
	console.log("startdate "+startdate);

	console.log("bdateplusLife "+bdateplusLife);
	//alert('Inside iscomare2 '+p);
	var monthName = startdate.slice(0,3);
	//alert('Month '+ monthName);
	var monthNumber = new Date(Date.parse(monthName +" 1, 2017")).getMonth()+1;
	//alert('monthNumber. '+ monthNumber);
	var year = startdate.slice(4);
	//alert('Year'+ year);
	
	var iDateReformatted  = year.concat("-", monthNumber, "-01");
	//var iDateReformatted  = month.concat("-", year);
//	alert ("startdate: " + iDateReformatted);
	var startdate333 = new Date(iDateReformatted.toString());
	console.log ("startdate333: " + startdate333);
	/*var startdate=new Date(startdate333.toString());
	console.log('startdate '+ startdate);*/
	//alert('mdate '+ mdate);
	//ldate Jun 12, 2050 12:00:00 AM
	
	
	
	var day = bdateplusLife.slice(0,2);
//	alert('Day'+ day);
	var month = bdateplusLife.slice(3,5);
//	alert('Month'+ month);
	var year = bdateplusLife.slice(6);
//	alert('Year'+ year);
	
	var iDateReformatted  = year.concat("-", month, "-", day);
//	console.log ("bdateplusLife: " + iDateReformatted);
	var bdateplusLife333 = new Date(iDateReformatted);
//	console.log("bdateplusLife "+bdateplusLife333);
	var bdateplusLife=new Date(bdateplusLife333.toString());
//	console.log("bdateplusLife "+bdateplusLife);
	  
	
	
	
	if(startdate333>bdateplusLife){
	//	console.log("false");
		return false;
	}
	else {
	//	console.log("true");
		return true;	
	}
}
function bb(startdate1,gnumber,bdateplusLife){
//	alert("nnnnn");
//	alert(p1);

	
//	alert ("mDate1-2: " + lDate1);
	var day = bdateplusLife.slice(0,2);
//	console.log('Day'+ day);
	var month = bdateplusLife.slice(3,5);
//	console.log ('Month'+ month);
	var year = bdateplusLife.slice(6);
//	console.log('Year'+ year);
	
	var iDateReformatted1  = year.concat("-", month, "-", day);
//	console.log("bdateplusLife: " + iDateReformatted1);
	var bdateplusLifeDate = moment(iDateReformatted1,"YYYY-MM-DD");
//	console.log("after moment bdateplusLifeDate "+bdateplusLifeDate);
	  
	
	var monthName = startdate1.slice(0,3);
//	console.log('Month '+ monthName);
	var monthNumber = new Date(Date.parse(monthName +" 1, 2017")).getMonth()+1;
//	console.log ('monthNumber. '+ monthNumber);
	var year = startdate1.slice(4);
//	console.log('Year'+ year);
	
	var iDateReformatted  = year.concat("-", monthNumber, "-01");
//	console.log ("iDateReformatted: " + iDateReformatted);
	//var lDate = new Date(iDateReformatted);
	//console.log ("Selected Date1: " + lDate);
	
	
	
	var lStartDatePlusRecurringYears = moment(iDateReformatted,"YYYY-MM-DD").add(Number(gnumber), 'years');
	console.log("after moment lStartDatePlusRecurringYears "+lStartDatePlusRecurringYears);
	
	
	if(lStartDatePlusRecurringYears>bdateplusLifeDate){
		console.log("false");
		return false;
	}
	else {
	console.log("true");
		return true;	
	}
}
function cc(age,Lnumber,lifeE){
	
	var c=Number(Lnumber)+Number(age);
	if(c>lifeE){
		console.log("false");
		return false;
	}
	else {
	console.log("true");
		return true;	
	}
}
//Check alpha

function isChar(iText){
//	alert("Inside isChar");
	var chkAlpha = 0;
	this.iText = iText;
//	alert("Input: " + this.iText);
	if (!this.iText.match(charOnly)){
//		alert("Not alpha");
		return false;
	}
	else{
		return true;
	}
}

function isChar2(iText){
//	alert("Inside isChar");
	var chkAlpha = 0;
	this.iText = iText;
//	alert("Input: " + this.iText);
	if (!this.iText.match(alphanumericOnly)){
//		alert("Not alpha");
		return false;
	}
	else{
		return true;
	}
}
function isString(iText){
//	alert("Inside isChar");
	var chkAlpha = 0;
	this.iText = iText;
//	alert("Input: " + this.iText);
	if (!this.iText.match(stringOnly)){
//		alert("Not alpha");
		return false;
	}
	else{
		return true;
	}
}

function isStringhyphen(iText){
//	alert("Inside isChar");
	var chkAlpha = 0;
	this.iText = iText;
//	alert("Input: " + this.iText);
	if (!this.iText.match(stringhyphenOnly)){
//		alert("Not alpha");
		return false;
	}
	else{
		return true;
	}
}

//Check numeric
function isNumeric(iNum){
	this.iNum = iNum;
	if (!this.iNum.match(numberOnly)){
		return false;
	}
	else{
		return true;
	}
}

function isNumericDecimal(iNum){
//	alert("Number Numeric Decimal" + iNum)
	this.iNum = iNum;
	if (this.iNum.match(numericWithDecimalTwoPlaces)){
	//	alert("Matches");
		return true;
	}
	else{
	//	alert("No Match");
		return false;
	}
}
//Check PAN no.
function validatePan(iPanNo){
	//alert('�n validatePan');
	this.iPanNo = iPanNo;
	var panVal = this.iPanNo;
	var panPattern = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
	var panCode = /([C,P,H,F,A,T,B,L,J,G])/;
	var panCodeChk = panVal.substring(3,4);
	if ((panVal.search(panPattern) == -1) || (panCode.test(panCodeChk) == false)) {
	//if (panVal.search(panPattern) == -1) {
		//alert('PAN NOT OK');
		return false;	
	}
	else{
		//alert('PAN OK');
		return true;
	}
}

// Check Email address

function validateEmailAddress(iEmail){
	this.iEmail = iEmail;
	var emailVal = this.iEmail;
	var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (emailVal.search(emailPattern) == -1) {
		return false;
	}
	else{
		return true;
	}
}


// Check mobile no.

function validateMobileNo(iMobile){
	this.iMobile = iMobile;
	var lMobile = this.iMobile;
	//var chkMobile = lMobile.match(nums);
	var chkMobile = isNumeric(lMobile);

	//alert('chkMobile '+chkMobile);

	if (!chkMobile){
		return 1;
	}
	else{
		if (lMobile.length!=10){
			return 2;
		}
		else{
			return 0;
		}
	}
}
function validateAadhar(iAadhar){
	
	var chkiAadhar = isNumeric(iAadhar);

	//alert('chkiAadhar '+chkiAadhar);

	if (!chkiAadhar){
	//	alert("adhar numeric no");
		return 1;
	}
	else{
	//	alert("aa");
		if (iAadhar.length!=12){
		//	alert("adhar>12");
			return 2;
		}
		else{
		//	alert("no error");
			return 0;
		}
	}
}

function hasValue(iVal) {
	//alert('Input Value: '+iVal );
	if((iVal == null) || (iVal == "")){
			return false;
	}
	else return true;
}

function isPercent(iVal) {
	//alert('Input Value: '+iVal );
	if((iVal < 0) || (iVal > 100)){
			return false;
	}
	else return true;
}

function autofillSalutation(iGender, iMaritalStatus){
	//alert("Inside autofill");
	this.iGender = iGender;
	this.iMaritalStatus = iMaritalStatus;
	if (this.iGender.checked)
	{
		return "Mr";
	}
	else {
		if (this.iMaritalStatus.value == 2){
			return "Mrs";
		}
		else {
			return "Ms";
			}
	}
}

function validateCountryCode(iCountryCode){
	this.iCountryCode = iCountryCode;
	var lCountryCode = this.iCountryCode;
	var lCountryCodeNums = 0;
//alert ("Inside validate country code");
	var posPlus = lCountryCode.indexOf("+");
	//alert ("Inside validate country code: " + posPlus);
	if (posPlus >0){
		//alert ("Position is wrong");
		return 1;
	}
	else{
		//alert ("Position is right");
		if (posPlus == 0){
			//alert ("Position is 0");
			lCountryCodeNums = lCountryCode.substr(1);
			//alert ("Country code sans +: " + lCountryCodeNums);
		}
		else{
			//alert ("Position is not 0");
			lCountryCodeNums = lCountryCode.substr(0);
			//alert ("Country code sans +: " + lCountryCodeNums);
		}
		if (!testInputDataValue(lCountryCodeNums,integerOnly)){
			//alert ("Country code is not numeric");
			return 2;
		}
		else{
			//alert ("Country code is numeric");
			return 0;
		}
	}
		
}


function specialDate(iDate){
//	alert('inside function');
	//return false;
	var day = iDate.slice(0,2);
	//alert('Day'+ day);
	var month = iDate.slice(3,5);
	//alert('Month'+ month);
	var year = iDate.slice(6);
	//alert('Year'+ year);
	
	var iDateReformatted  = year.concat("-", month, "-", day);
	//alert ("lLoanStartDateVal: " + lLoanStartDateVal);
	var lDate = new Date(iDateReformatted);
	//var selectedText=iDate;
	var selectedDate=new Date(lDate.toString());
	//alert('Selected Date '+ selectedDate);
	//return false;
	var today=new Date();
	//alert("today: "+today);
	//return false;
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	var mmSelected = selectedDate.getMonth()+1;
	var yyyySelected = selectedDate.getFullYear();
//	alert("mmSelected: "+mmSelected);
//	alert("yyyySelected: "+yyyySelected);
	//return false;
	
//	alert('before if statement');
//	return false;
	//alert("mmSelected: " + mmSelected);
//	return false;
	
	if(dd<10){
		dd='0'+dd;
	}
	if(mm<10){
		mm='0'+mm;
	}
	
	var today = new Date(mm+'/'+dd+'/'+yyyy);
	//alert("today: "+today);
	//return false;
//	alert('before getDaysInMonth');
	//return false;
	var getDaysInMonth = function (year, month) {
	    var now = new Date;

	    month = typeof month != undefined ? month
	            : (typeof year != undefined ? year : now.getMonth() + 1);

	    year = typeof month != undefined && typeof year != undefined ? year
	            : now.getFullYear();

	    now.setFullYear(year, month, 0);
	    return now.getDate();
	};
//	var days = getDaysInMonth(yyyy, mm);
//	var days = today.daysInMonth(yyyy, mm);
	var daysSelected = getDaysInMonth(yyyySelected, mmSelected);
//	alert('mmSelected: ' + mmSelected);
//	alert('yyyySelected: ' + yyyySelected);
//	alert('dd: ' + dd);
//	alert('today: ' + today);
//	alert('selectedDate: ' + selectedDate);
//	alert('value: ' + days);
//	alert('daysSelected: ' + daysSelected);
//	return false;
//	alert('value: ' + days);
//	return false;
	var targetDate = new Date();
	targetDate.setDate(today.getDate() + daysSelected);
//	console.log(daysInMonth(mm, yyyy));
	if(selectedDate > targetDate){
		//alert('within data limits');
		return false;
	}
	else{
		//alert('outside data limits');
		return true;
	}
}


function openPage(pageURL)
{
window.location.href = pageURL;
}
function calculateAge(iDate) {
	alert('Inside calculateAge 11 '+iDate);

	var years = moment().diff(moment(29/03/2000,"DD/MM/YYYY"), 'years', false);
	var a = moment(iDate,"DD/MM/YYYY").add(years, 'year');

	var months = moment().diff(a, 'month', false);
	var b = a.add(months, 'month');

	var days = moment().diff(b, 'day', false);
	
	//alert('New Date '+ c);
	return years   ;
	//return years;
}    

function calculateAgeYears(iDate) {
//	alert('Inside calculateAge '+iDate);
 //   alert('Moment: ' + moment(iDate,"DD/MM/YYYY"));
	var years = moment().diff(moment(iDate,"DD/MM/YYYY"), 'years', false);
//	alert('after calculateAge '+years);
	return years;
}  

function isDecimal(iNum){
	//alert("Inside isdecimel "+iNum);
	if (!(decimalOnly.test(iNum))){
	//	alert("Not isdecimel");
		return false;
	}
	else{
	//	alert("isdecimel");
		return true;
	}
}

function isInteger(iNum){
//	alert("Inside isInteger");
	if (!(integerOnly.test(iNum))){
//		alert("Not isInteger");
		return false;
	}
	else{
	//	alert("isinteger");
		return true;
		
	}
}
function piyali(){
	alert("piyali ");
}