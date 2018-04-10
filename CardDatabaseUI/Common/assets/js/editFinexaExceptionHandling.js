$(document).ready(function () {
	
	var id = sessionStorage.getItem("SELECTED_EXCEPTION_ID");
	//alert("id: " + id);
	var smid = sessionStorage.getItem("SELECTED_SMID");
	//alert("smid: " + smid);
//	var fid = sessionStorage.getItem("SELECTED_FID");
	getClientData("GET", "", "finexaExceptionHandling?id=" + id, onGetExceptionDataSuccess);
	
	function onGetExceptionDataSuccess(data) {
		populateForm($('#idUpdateExceptionForm'), data);
		//alert(data.moduleName);
		
	}
	
	$("#idUpdateExceptions").on("click", function(event) {
		
		var formData = $('#idUpdateExceptionForm').serializeToJSON();
		
		formData["id"] = id;
		formData["subModuleID"] = smid;
		
		var data = JSON.stringify(formData);
		
		getClientData("POST", data, "editFinexaExceptionHandling", onUpdateExceptionSuccess)
		
		function onUpdateExceptionSuccess(updatedData) {
			window.location = "viewFinexaExceptionHandling.html";
		}
		
	});
	
	
});

function setModuleName(pModuleName) {
	//alert('Setting Fund House in EDIT mode: '+pFundHouse);							    	   
	$("#idMName option").filter(function() {
		return this.value==pModuleName;							    
	}).prop('selected', true);
}

function setSubModuleName(pModuleName, pSubModuleName) {
	
	serviceurl = "subModuleFromModule?moduleName=" + pModuleName;
	getClientDataAsyncFalse("GET","",serviceurl,subModuleFromModuleSuccess);
	
	function subModuleFromModuleSuccess(data){
	//	console.log(data);
		smnDrop = $("#idSMName");
		smnDrop.find('option').remove();
		smnDrop.append('<option value="0">Sub Module Name</option>');
		$.each(data, function (index, item) {
			smnDrop.append('<option value="' + item.id + '">' + item.description + '</option>');
		});
		$("#idSMName option").filter(function() {
			return this.value==pSubModuleName;			    
		}).prop('selected', true); 
	} 	
}