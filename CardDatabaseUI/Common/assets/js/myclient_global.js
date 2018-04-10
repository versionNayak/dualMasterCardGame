var version = "Version - 0.1";
//var serviceIP = "http://132.148.68.158:8080"; // Cloud VPS
//var serviceIP = "http://testing.finexa.in"; // Testing Server
//var serviceIP = "http://192.168.1.110:8080"; // Local Dev
var serviceIP = "http://localhost:8080"; // Developer Local
//var serviceIP = "http://192.168.1.14:8080"; //Developer Local

/*var vClientId;
var REQUEST_URL_BM = serviceIP + "/BudgetManagementService";
var REQUEST_URL_GP = serviceIP + "/GoalPlanningService";
var REQUEST_URL_FP = serviceIP + "/FinancialPlanningService";
var REQUEST_URL_PM = serviceIP + "/PortfolioManagementService";

var goalId=2;
var selectedMode = 2;// This is for which type of investment to be made,by Default investment mode is set as lumpsum
var lumpsumForSIP = 0;
var vglideNonglideMode = "G"; // by Default Glide Path will be selected
var numericWithDecimalTwoPlaces = "(?=[^\0])(?=^([0-9]+){0,1}(\.[0-9]{1,2}){0,1}$)";
function isNumericDecimal(iNum){
	this.iNum = iNum;
	if (this.iNum.match(numericWithDecimalTwoPlaces)){
		return true;
	}
	else{
		return false;
	}
}
*//**********************************My Business User Management related Constants *****************//*
var RETURN_VAL_ERROR = -1;
var RETURN_VAL_ERROR_ROLE_MAPPING = 101;
var RETURN_VAL_ERROR_SUPERVISOR_MAPPING = 102;
var RETURN_VAL_ERROR_CLIENT_MAPPING = 103;
var RETURN_VAL_SUCCESS = 100;*/

var client_side_timezone = "Asia/Calcutta|Asia/Kolkata"; 

/*****Set Global TimeZone JS Side*****/
moment.tz.setDefault(client_side_timezone);		
/*****Set Global TimeZone JS Side*****/
