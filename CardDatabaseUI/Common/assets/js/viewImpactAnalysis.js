var findId;
$(document).ready(function () {
	$("#idEditImpacts").hide();
	
	//$('#idTable').dataTable();
	
	$('th:nth-child(9)').hide();
	
	$("#idAddImpacts").on("click", function(event) {
		
		window.location = "addImpactAnalysis.html";
		
	});
	
	getClientData("GET", "", "finexaImpactAnalysisList", onSuccess);
	
	function onSuccess(data) {
		
		$('#idTable').dataTable().fnDestroy();
		
		$.each(data, function (index, impactList) {
			
			$("#idImpactList").append('<tr>' +
					'<td>' + impactList.masterTableName + '</td>' +
					'<td>' + impactList.moduleName + '</td>' +
					'<td>' + impactList.subModuleName + '</td>' +
					'<td>' + impactList.controller + '</td>' +
					'<td>' + impactList.serviceImpl + '</td>' +
					'<td>' + impactList.method + '</td>' +
					'<td>' + impactList.changes + '</td>' +
					'<td>' + impactList.impact + '</td>' +
					'<td class="hidden"><input type="text" id="idImpact" name="id"  value=' + impactList.id + ' readonly="readonly"></td>' +
			'</tr>');
		});
		
		$('#idTable').dataTable(
				{
					
					"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
					
				}
			);
		
	}
	
	
	/*$("#idImpactDownload").on("click", function(event) {
		$('#idTable').tableExport({type:'excel',escape:'false',tableName:'ImpactRecords'});
	    event.preventDefault();
	});*/
	
	$("#idImpactList").on("click","tr",function(e){
		
		$("#idEditImpacts").show();
		findId = $(this).find("#idImpact").val();
		console.log("id of Impact: "+ findId);
		
		sessionStorage.removeItem("SELECTED_IMPACT_ID");
		sessionStorage.setItem("SELECTED_IMPACT_ID",findId);
		
		$(this).addClass("selected");
		$(this).addClass("selected").siblings().removeClass("selected"); 
		
	});
	
	$("#idEditImpacts").on("click", function(event) {
		
		window.location = "editImpactAnalysis.html";
		
	});
	
});