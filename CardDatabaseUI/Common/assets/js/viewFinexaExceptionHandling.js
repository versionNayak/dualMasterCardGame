var findId;
$(document).ready(function () {
	$("#idEditExceptions").hide();
	
	$('#idTable').dataTable();
	
	$('th:nth-child(9)').hide();
	$('th:nth-child(10)').hide();
	 
	$("#idAddExceptions").on("click", function(event) {
		
		window.location = "addFinexaExceptionHandling.html";
		
	});
	
	getClientData("GET", "", "finexaExceptionHandlingList", onSuccess);
	
	function onSuccess(data) {
		//$("#idExceptionList").empty();
		$('#idTable').dataTable().fnDestroy();
		$.each(data, function (index, exceptionList) {
			var subEvent;
			if (exceptionList.functionSubEvent == null) {
				subEvent = " ";
			} else {
				subEvent = exceptionList.functionSubEvent;
			}	
			var subFunction;
			if (exceptionList.subFunctionName == null) {
				subFunction = " ";
			} else {
				subFunction = exceptionList.subFunctionName;
			}
			$("#idExceptionList").append('<tr>' +
					'<td>' + exceptionList.moduleName + '</td>' +
					'<td>' + exceptionList.subModuleName + '</td>' +
					'<td>' + exceptionList.functionName + '</td>' +
					'<td>' + subFunction + '</td>' +
					'<td>' + exceptionList.functionEvent + '</td>' +
					'<td>' + subEvent + '</td>' +
					'<td>' + exceptionList.errorCode + '</td>' +
					'<td>' + exceptionList.errorMessage + '</td>' +
					'<td class="hidden"><input type="text" id="idException" name="id"  value=' + exceptionList.id + ' readonly="readonly"></td>' +
					'<td class="hidden"><input type="text" id="idSMID" name="subModuleID"  value=' + exceptionList.subModuleID + ' readonly="readonly"></td>' +
			'</tr>');
		});
		
		$('#idTable').dataTable(
				{
					
					"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
					
				}
			);
		
	}
	
	$("#idExceptionList").on("click","tr",function(e){
		
		$("#idEditExceptions").show();
		findId = $(this).find("#idException").val();
		console.log("id of Exception: "+ findId);
		
		sessionStorage.removeItem("SELECTED_EXCEPTION_ID");
		sessionStorage.setItem("SELECTED_EXCEPTION_ID",findId);
		
		var subModuleId = $(this).find("#idSMID").val();
		//alert("subModuleId: " + subModuleId);
		sessionStorage.removeItem("SELECTED_SMID");
		sessionStorage.setItem("SELECTED_SMID",subModuleId);
		
		$(this).addClass("selected");
		$(this).addClass("selected").siblings().removeClass("selected"); 
		
	});
	
	$("#idEditExceptions").on("click", function(event) {
		
		window.location = "updateFinexaExceptionHandling.html";
		
	});
	
	
});