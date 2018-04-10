var selectedSubModuleID;
$(document).ready(function () {
	
	getModuleNameList();
	
	$('#idMName').on('change', function(){
		selectedModuleName = $(this).val();
		//alert("selectedModuleName: " + selectedModuleName);
		getSubModuleFromModule(selectedModuleName);
   	});
	
	$('#idSMName').on('change', function(){
		selectedSubModuleID = $(this).val();
		//alert("selectedSubModuleID: " + selectedSubModuleID);
		getFunctionFromSubmodule(selectedSubModuleID);
	});
	
	$('#idFunctionName').on('change', function(){
		selectedFunctionName = $(this).val();
		//alert("selectedFunctionName: " + selectedFunctionName);
		getSubFunctionFromFunction(selectedFunctionName);
	});
	
	$('#idSubFunctionName').on('change', function(){
		selectedSubFunctionName = $(this).val();
		//alert("selectedSubFunctionName: " + selectedSubFunctionName);
		getFunctionEventFromSubFunction(selectedSubFunctionName);
	});
	
	
	$('#idFunctionEvent').on('change', function(){
		selectedFunctionEvent = $(this).val();
		//alert("selectedFunctionEvent: " + selectedFunctionEvent);
		getFunctionSubEventFromEvent(selectedFunctionEvent);
	});
	
	
	$("#idAddExceptions").on("click", function(event) {
		
		var formData = $('#idAddExceptionForm').serializeToJSON();
		
		formData["subModuleID"] = selectedSubModuleID;
		
		var data = JSON.stringify(formData);
		
		saveData("POST", data, "createFinexaExceptionHandling", onAddExceptionSuccess)
		
		function onAddExceptionSuccess(addData) {
			window.location = "viewFinexaExceptionHandling.html";
		}
		
	});
	
	
});

function getModuleNameList() {
	$.ajax({
		type : 'GET',
		async : true,
		url : ClientServiceUrl+"finexaModuleList",
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			mnDrop = $("#idMName");
			mnDrop.find('option').remove();
			mnDrop.append('<option value="0">Module Name</option>');
			$.each(data, function (index, item) {
				mnDrop.append('<option value="' + item + '">' + item + '</option>');
			});
		},
		error : function(data) {
			bootbox.alert("Failed to get Module Name List");
		}
	});
}

function getSubModuleFromModule(selectedModuleName) {
	serviceurl = "subModuleFromModule?moduleName=" + selectedModuleName;
	getClientDataAsyncFalse("GET","",serviceurl,subModuleFromModuleSuccess);
	
	function subModuleFromModuleSuccess(data){
	//	console.log(data);
		smnDrop = $("#idSMName");
		smnDrop.find('option').remove();
		smnDrop.append('<option value="0">Sub Module Name</option>');
		$.each(data, function (index, item) {
			smnDrop.append('<option value="' + item.id + '">' + item.description + '</option>');
		});
		
	} 	
}

function getFunctionFromSubmodule(selectedSubModuleID) {
	serviceurl = "functionFromSubmodule?subModuleID=" + selectedSubModuleID;
	getClientDataAsyncFalse("GET","",serviceurl,functionFromSubmoduleSuccess);
	
	function functionFromSubmoduleSuccess(data) {
		fnDrop = $("#idFunctionName");
		fnDrop.find('option').remove();
		fnDrop.append('<option value="0">Function In SubModule</option>');
		$.each(data, function (index, item) {
			fnDrop.append('<option value="' + item + '">' + item + '</option>');
		});
	}
	
}

function getFunctionEventFromSubFunction(selectedSubFunctionName) {
	serviceurl = "eventFromSubFunction?subFunction=" + selectedSubFunctionName;
	getClientDataAsyncFalse("GET","",serviceurl,functionEventFromSubFunctionSuccess);
	
	function functionEventFromSubFunctionSuccess(data) {
		feDrop = $("#idFunctionEvent");
		feDrop.find('option').remove();
		feDrop.append('<option value="0">Function Event In SubModule</option>');
		$.each(data, function (index, item) {
			feDrop.append('<option value="' + item + '">' + item + '</option>');
		});
	}
	
}

function getFunctionSubEventFromEvent(selectedFunctionEvent) {
	serviceurl = "subEventFromEvent?event=" + selectedFunctionEvent;
	getClientDataAsyncFalse("GET","",serviceurl,functionSubEventFromEventSuccess);
	
	function functionSubEventFromEventSuccess(data) {
		if (data != "") {
			fseDrop = $("#idFunctionSubEvent");
			fseDrop.find('option').remove();
			fseDrop.append('<option value="0">Function Sub Event In SubModule</option>');
			$.each(data, function (index, item) {
				fseDrop.append('<option value="' + item + '">' + item + '</option>');
			});
		} else {
			alert("No Sub Event for this Event!");
			fseDrop = $("#idFunctionSubEvent");
			fseDrop.find('option').remove();
			fseDrop.append('<option value="0">Function Sub Event In SubModule</option>');
		}
	}
}

function getSubFunctionFromFunction(selectedFunctionName) {
	serviceurl = "subFunctionFromFunction?function=" + selectedFunctionName;
	getClientDataAsyncFalse("GET","",serviceurl,subFunctionFromFunctionSuccess);
	
	function subFunctionFromFunctionSuccess(data) {
		if (data != "") {
			sfDrop = $("#idSubFunctionName");
			sfDrop.find('option').remove();
			sfDrop.append('<option value="0">Sub Function In SubModule</option>');
			$.each(data, function (index, item) {
				sfDrop.append('<option value="' + item + '">' + item + '</option>');
			});
		} else {
			alert("No Sub Function for this Function!");
			sfDrop = $("#idSubFunctionName");
			sfDrop.find('option').remove();
			sfDrop.append('<option value="0">Sub Function In SubModule</option>');
		}
	}
	
}