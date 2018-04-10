
$(document).ready(function () {
	
	/*$('.timepicker').timepicker({
	    timeFormat: 'h:mm p',
	    interval: 60,
	    minTime: '10',
	    maxTime: '6:00pm',
	    defaultTime: '11',
	    startTime: '10:00',
	    dynamic: false,
	    dropdown: true,
	    scrollbar: true
	});*/
	
	
	
	getModuleNameList();
	
	$('#idMName').on('change', function(){
		selectedModuleName = $(this).val();
		//alert("selectedModuleName: " + selectedModuleName);
		getSubModuleFromModule(selectedModuleName);
   	});
	
	$('#idSMName').on('change', function(){
		selectedSubModuleName = $(this).val();
		//alert("selectedSubModuleName: " + selectedSubModuleName);
		//getFunctionFromSubmodule(selectedSubModuleID);
	});
	
	$("#idAddImpacts").on("click", function(event) {
		
		var formData = $('#idAddImpactForm').serializeToJSON();
		
		formData["subModuleName"] = selectedSubModuleName;
		
		var data = JSON.stringify(formData);
		
		saveData("POST", data, "createFinexaImpactAnalysis", onAddImpactSuccess)
		
		function onAddImpactSuccess(addData) {
			window.location = "viewImpactAnalysis.html";
			//alert("Successfully Added Impact!");
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
		smnDrop.append('<option value="">Sub Module Name</option>');
		$.each(data, function (index, item) {
			smnDrop.append('<option value="' + item.description + '">' + item.description + '</option>');
		});
		
	} 	
}