//BusinessServiceUrl = serviceIP + "/BusinessService/";
var ClientServiceUrl = serviceIP + "/clientservice/";

function getClientData(method, jsondata, path, callbackSuccess) {
	console.log("rest service = " + ClientServiceUrl + path);
	if (method == "GET") {
		$.ajax({
			async: true,
			url: ClientServiceUrl + path,
			method: method,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: callbackSuccess,
			error: function (jqXHR, exception) {
				var msg = '';
		        if (jqXHR.status === 0) {
		            msg = 'Could not connect to the server, please contact System Administrator.';
		        }else if(jqXHR.status == 400){
		        	msg = 'There is some problem in the server, please contact System Administrator.\n';
		        }else if(jqXHR.status == 401){
		        	msg = 'You are not authorized to access this data.';
		        } else if (jqXHR.status == 404) {
		            msg = 'Requested service url not found.';
		        } else if (jqXHR.status == 500) {
		        	msg = 'There is some problem in the server, please contact System Administrator.\n';
		        } else if (exception === 'parsererror') {
		            msg = 'Failed to get result.';
		        } else if (exception === 'timeout') {
		            msg = 'Timed Out!';
		        } else if (exception === 'abort') {
		            msg = 'Request aborted.';
		        } else {
		            msg = 'Something went wrong, could not connect to the server, please contact System Administrator.\n';
		        }
		        //$('#post').html(msg);
		        /*var alertBox = bootbox.alert("Message: " + msg, function(){ 
		        	//console.log('This was logged in the callback!'); 
		        	$("#idClient").load("resources/errorPage.html");
		        });*/
		       // alert("Error Msg : \n" + ClientServiceUrl + path +"\n "+ msg);
		        /*setTimeout(function() {
		            alertBox.modal('hide');
		            $("#idClient").load("resources/errorPage.html");
		        }, 3000);*/
		        if (JSON.parse(jqXHR.responseText).errorMessage != null || JSON.parse(jqXHR.responseText).errorMessage != undefined || JSON.parse(jqXHR.responseText).errorMessage != "") {
		        	sessionStorage.removeItem("MSG");
		        	sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage);
		        } 
		        
		        if (msg != "" || JSON.parse(jqXHR.responseText).errorMessage != null || JSON.parse(jqXHR.responseText).errorMessage != "undefined" || JSON.parse(jqXHR.responseText).errorMessage != ""){
		        	sessionStorage.removeItem("MSG");
			        sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage +'\n'+msg);
		        }
		       
		        if (JSON.parse(jqXHR.responseText).errorMessage == undefined) {
		        	sessionStorage.removeItem("MSG");
		        	sessionStorage.setItem("MSG", msg);
		        }
		         /*if (msg != "") {
		        	sessionStorage.removeItem("MSG");
		        	sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage +'\n'+msg);
		        }*/
		         $("#idClient").load("resources/errorPage.html");
		         $("#idBusiness").load("resources/errorPage.html");
		         $("#idBuinessMasters").load("resources/errorPage.html");
		    }
		});

	} else {
		$.ajax({
			async: false,
			url: ClientServiceUrl + path,
			method: method,
			data: jsondata,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: callbackSuccess,
			error: function (jqXHR, exception) {
				
				var msg = '';
		        if (jqXHR.status === 0) {
		            msg = 'Could not connect to the server, please contact System Administrator.';
		        }else if(jqXHR.status == 400){
		        	msg = 'There is some problem in the server, please contact System Administrator.\n';
		        }else if(jqXHR.status == 401){
		        	msg = 'You are not authorized to access this data.';
		        } else if (jqXHR.status == 404) {
		            msg = 'Requested service url not found.';
		        } else if (jqXHR.status == 405) {
		        	msg = 'Could not connect to the server, please contact System Administrator.\n';
		        } else if (jqXHR.status == 500) {
		        	msg = 'There is some problem in the server, please contact System Administrator.\n';
		        } else if (exception === 'parsererror') {
		            msg = 'Failed to get result.';
		        } else if (exception === 'timeout') {
		            msg = 'Timed Out!';
		        } else if (exception === 'abort') {
		            msg = 'Request aborted.';
		        } else {
		            msg = 'Something went wrong, could not connect to the server, please contact System Administrator.\n';
		        }
		        //$('#post').html(msg);
		       /* var alertBox = bootbox.alert("Message: " + msg, function(){ 
		        	//console.log('This was logged in the callback!'); 
		        	$("#idClient").load("resources/errorPage.html");
		        });*/
		       // alert("Error Msg : \n" + ClientServiceUrl + path +"\n "+ msg);
		       /* setTimeout(function() {
		            alertBox.modal('hide');
		            hideLoaderOnSave("#idAddCash");
		            $("#idClient").load("resources/errorPage.html");
		        }, 3000);*/
		        
		        if (JSON.parse(jqXHR.responseText).errorMessage != null || JSON.parse(jqXHR.responseText).errorMessage != undefined || JSON.parse(jqXHR.responseText).errorMessage != "") {
		        	sessionStorage.removeItem("MSG");
		        	sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage);
		        } 
		        
		        if (msg != "" || JSON.parse(jqXHR.responseText).errorMessage != null || JSON.parse(jqXHR.responseText).errorMessage != "undefined" || JSON.parse(jqXHR.responseText).errorMessage != ""){
		        	sessionStorage.removeItem("MSG");
			        sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage +'\n'+msg);
		        }
		       
		        if (JSON.parse(jqXHR.responseText).errorMessage == undefined) {
		        	sessionStorage.removeItem("MSG");
		        	sessionStorage.setItem("MSG", msg);
		        }
		         /*if (msg != "") {
		        	sessionStorage.removeItem("MSG");
		        	sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage +'\n'+msg);
		        }*/
		         $("#idClient").load("resources/errorPage.html");
		         $("#idBusiness").load("resources/errorPage.html");
		         $("#idBuinessMasters").load("resources/errorPage.html");
			}
		});
	}
}

function getClientDataWithErrorHandling(method, jsondata, path, callback, errCallback) {
	console.log("rest service = " + ClientServiceUrl + path);
	if (method == "GET") {
		$.ajax({
			async: true,
			url: ClientServiceUrl + path,
			method: method,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: callback,
			error: errCallback   
		});
	} else {
		$.ajax({
			async: false,
			url: ClientServiceUrl + path,
			method: method,
			data: jsondata,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: callback,
			error: errCallback		
		});
	}
}

function getClientDataAsyncFalse(method, jsondata, path, callback) {
	console.log("rest service = " + ClientServiceUrl + path);
	if (method == "GET") {
		$.ajax({
			async: false,
			url: ClientServiceUrl + path,
			method: method,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: callback,
			error: function (jqXHR, exception) {
				var msg = '';
		        if (jqXHR.status === 0) {
		            msg = 'Could not connect to the server, please contact System Administrator.';
		        }else if(jqXHR.status == 400){
		        	msg = 'There is some problem in the server, please contact System Administrator.\n';
		        }else if(jqXHR.status == 401){
		        	msg = 'You are not authorized to access this data.';
		        } else if (jqXHR.status == 404) {
		            msg = 'Requested service url not found.]';
		        } else if (jqXHR.status == 500) {
		        	msg = 'There is some problem in the server, please contact System Administrator.\n';
		        } else if (exception === 'parsererror') {
		            msg = 'Failed to get result.';
		        } else if (exception === 'timeout') {
		            msg = 'Timed Out!';
		        } else if (exception === 'abort') {
		            msg = 'Request aborted.';
		        } else {
		            msg = 'Something went wrong, could not connect to the server, please contact System Administrator.\n';
		        }
		        //$('#post').html(msg);
		       /* bootbox.alert("Message: " + msg, function(){ 
		        	//console.log('This was logged in the callback!'); 
		        	$("#idClient").load("resources/errorPage.html");
		        });*/
		       // alert("Error Msg : \n" + ClientServiceUrl + path +"\n "+ msg);
		        if (JSON.parse(jqXHR.responseText).errorMessage != null || JSON.parse(jqXHR.responseText).errorMessage != undefined || JSON.parse(jqXHR.responseText).errorMessage != "") {
		        	sessionStorage.removeItem("MSG");
		        	sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage);
		        } 
		        
		        if (msg != "" || JSON.parse(jqXHR.responseText).errorMessage != null || JSON.parse(jqXHR.responseText).errorMessage != "undefined" || JSON.parse(jqXHR.responseText).errorMessage != ""){
		        	sessionStorage.removeItem("MSG");
			        sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage +'\n'+msg);
		        }
		       
		        if (JSON.parse(jqXHR.responseText).errorMessage == undefined) {
		        	sessionStorage.removeItem("MSG");
		        	sessionStorage.setItem("MSG", msg);
		        }
		         /*if (msg != "") {
		        	sessionStorage.removeItem("MSG");
		        	sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage +'\n'+msg);
		        }*/
		         $("#idClient").load("resources/errorPage.html");
		         $("#idBusiness").load("resources/errorPage.html");
		         $("#idBuinessMasters").load("resources/errorPage.html");
			}
		});
	} 
}

function saveData(method, jsondata, path, callbackSuccess) {
	if (method == "POST") {
		$.ajax({
			async: false,
			url: ClientServiceUrl + path,
			method: method,
			data: jsondata,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: callbackSuccess,
			error: function (jqXHR, exception) {
				var msg = '';
		        if (jqXHR.status === 0) {
		            msg = 'Could not connect to the server, please contact System Administrator.';
		        }else if(jqXHR.status == 400){
		        	msg = 'There is some problem in the server, please contact System Administrator.\n';
		        }else if(jqXHR.status == 401){
		        	msg = 'You are not authorized to access this data.';
		        } else if (jqXHR.status == 404) {
		            msg = 'Requested service url not found.';
		        } else if (jqXHR.status == 405) {
		        	msg = 'Could not connect to the server, please contact System Administrator.\n';
		        } else if (jqXHR.status == 500) {
		        	msg = 'There is some problem in the server, please contact System Administrator.\n';
		        } else if (exception === 'parsererror') {
		            msg = 'Failed to get result.';
		        } else if (exception === 'timeout') {
		            msg = 'Timed Out!';
		        } else if (exception === 'abort') {
		            msg = 'Request aborted.';
		        } else {
		            msg = 'Something went wrong, could not connect to the server, please contact System Administrator.\n';
		        }
		        
		        if (JSON.parse(jqXHR.responseText).errorMessage != null || JSON.parse(jqXHR.responseText).errorMessage != undefined || JSON.parse(jqXHR.responseText).errorMessage != "") {
		        	sessionStorage.removeItem("MSG");
		        	sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage);
		        } 
		        
		        if (msg != "" || JSON.parse(jqXHR.responseText).errorMessage != null || JSON.parse(jqXHR.responseText).errorMessage != "undefined" || JSON.parse(jqXHR.responseText).errorMessage != ""){
		        	sessionStorage.removeItem("MSG");
			        sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage +'\n'+msg);
		        }
		       
		        if (JSON.parse(jqXHR.responseText).errorMessage == undefined) {
		        	sessionStorage.removeItem("MSG");
		        	sessionStorage.setItem("MSG", msg);
		        }
		         /*if (msg != "") {
		        	sessionStorage.removeItem("MSG");
		        	sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage +'\n'+msg);
		        }*/
		         hideLoaderOnSave();
		         $("#idClient").load("resources/errorPage.html");
		         $("#idBusiness").load("resources/errorPage.html");
		         $("#idBuinessMasters").load("resources/errorPage.html");
		     
			}
		});
	}
}

function hideLoaderOnSave(btnID){	
	//alert('In hideLoaderOnSave()');
	$(btnID).removeAttr("disabled");
	$(btnID).html("SAVE");
	//$("body").css("cursor", "default");
	$("#overlayLoading").css({'display':'none'});
}

/*function getBusinessData(method, jsondata, path, callback) {
	console.log("rest service = " + BusinessServiceUrl + path);
	if (method == "GET") {
		$.ajax({
			url: BusinessServiceUrl + path,
			method: method,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: callback,
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(ajaxOptions);
				console.log(thrownError);
			}
		});

	} else {
		$.ajax({
			url: BusinessServiceUrl + path,
			method: method,
			data: jsondata,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: callback,
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(ajaxOptions);
				console.log(thrownError);
			}
		});

	}
}*/

function populateForm($form, data) {
	// console.log("PopulateForm, All form data: " + JSON.stringify(data));

	$.each(data, function (key, value) // all json fields ordered by name
	{
		// console.log("Data Element: " + key + " value: " + value );
		var $ctrls = $form.find('[name=' + key + ']'); // all form elements for
		// a name. Multiple
		// checkboxes can have
		// the same name, but
		// different values

		// console.log("Number found elements: " + $ctrls.length );

		if ($ctrls.is('select')) // special form types
		{
			$('option', $ctrls).each(function () {
				if (this.value == value)
					this.selected = true;
			});
		} else if ($ctrls.is('textarea')) {
			$ctrls.val(value);
		} else {
			switch ($ctrls.attr("type")) // input type
			{
				case "text":
				case "hidden":
					$ctrls.val(value);
					break;
				case "radio":
					if ($ctrls.length >= 1) {
						// console.log("$ctrls.length: " + $ctrls.length + "
						// value.length: " + value.length);
						$.each($ctrls, function (index) { // every individual
							// element
							var elemValue = $(this).attr("value");
							var elemValueInData = singleVal = value;
							if (elemValue === value) {
								$(this).prop('checked', true);
							} else {
								$(this).prop('checked', false);
							}
						});
					}
					break;
				case "checkbox":
					if ($ctrls.length > 1) {
						// console.log("$ctrls.length: " + $ctrls.length + "
						// value.length: " + value.length);
						$.each($ctrls, function (index) // every individual element
						{
							var elemValue = $(this).attr("value");
							var elemValueInData = undefined;
							var singleVal;
							for (var i = 0; i < value.length; i++) {
								singleVal = value[i];
								console.log("singleVal : " + singleVal
									+ " value[i][1]" + value[i][1]);
								if (singleVal === elemValue) {
									elemValueInData = singleVal
								}
								;
							}

							if (elemValueInData) {
								// console.log("TRUE elemValue: " + elemValue + "
								// value: " + value);
								$(this).prop('checked', true);
								// $(this).prop('value', true);
							} else {
								// console.log("FALSE elemValue: " + elemValue + "
								// value: " + value);
								$(this).prop('checked', false);
								// $(this).prop('value', false);
							}
						});
					} else if ($ctrls.length == 1) {
						$ctrl = $ctrls;
						if (value) {
							$ctrl.prop('checked', true);
						} else {
							$ctrl.prop('checked', false);
						}

					}
					break;
			} // switch input type
		}
	}) // all json fields
} // populate form

function populateCountryDrop(dropId) {
	getClientDataAsyncFalse("GET", "", "AllCountries", onCountrySuccess);
	//getBusinessData("GET", "", "AllCountries", onCountrySuccess);
	function onCountrySuccess(data) {
		console.log(data);
		dropId.find('option').remove();
		dropId.append('<option value="">Select Country</option>');
		$.each(data, function (index, item) {
			dropId.append('<option value="' + item.id + '">'
				+ item.name + '</option>');

		});
	}
}

function populateMaritalStatusDrop(dropId) {
	getClientDataAsyncFalse("GET", "", "AllMaritalStatus", onMSSuccess);
	function onMSSuccess(data) {
		console.log(data);
		dropId.find('option').remove();
		dropId.append('<option value="">Select Marital Status</option>');
		$.each(data, function (index, item) {
			dropId.append('<option value="' + item.id + '">'
				+ item.description + '</option>');
		});
	}
}

function populateEduQualiDrop(dropId) {
	getClientDataAsyncFalse("GET", "", "AllEducationalQualification", onMSSuccess);
	function onMSSuccess(data) {
		console.log(data);
		dropId.find('option').remove();
		dropId.append('<option value="">Select Educational Qualification</option>');
		$.each(data, function (index, item) {
			dropId.append('<option value="' + item.id + '">'
				+ item.description + '</option>');

		});
	}
}

function populateEmploymentTypeDrop(dropId) {
	getClientDataAsyncFalse("GET", "", "AllEmploymentType", onMSSuccess);
	function onMSSuccess(data) {
		console.log(data);
		dropId.find('option').remove();
		dropId.append('<option value="">Select Employment Type</option>');
		$.each(data, function (index, item) {
			dropId.append('<option value="' + item.id + '">'
				+ item.description + '</option>');

		});
	}
}

function populateResidentTypeDrop(dropId) {
	getClientDataAsyncFalse("GET", "", "AllResidentType", onMSSuccess);
	function onMSSuccess(data) {
		console.log(data);
		dropId.find('option').remove();
		dropId.append('<option value="">Select Resident Type</option>');
		$.each(data, function (index, item) {
			dropId.append('<option value="' + item.id + '">'
				+ item.description + '</option>');

		});
	}
}

function populateRelationDrop(dropId) {
	getClientDataAsyncFalse("GET", "", "AllRelations", onRelationSuccess);

	function onRelationSuccess(data) {
		dropId.find('option').remove();
		dropId.append('<option value="">Select Relation</option>');
		$.each(data, function (index, relation) {
			dropId.append('<option value="' + relation.id + '">' + relation.description + '</option>');

		});
	}
}

function populateStateDrop(stateDrop) {
	getClientDataAsyncFalse("GET", "", "AllMasterState", onStateSuccess);

	function onStateSuccess(data) {
		stateDrop.find('option').remove();
		stateDrop.append('<option value="0">Select State</option>');
		$.each(data, function (index, stateDp) {
			stateDrop.append('<option value="' + stateDp.id + '">' + stateDp.state + '</option>');

		});
	}
}


function populateInterestFrequency(freqDrop) {
	getClientDataAsyncFalse("GET", "", "AllFrequency", freqSuccess);
	function freqSuccess(data) {
		freqDrop.find('option').remove();
		freqDrop.append('<option value="">Select Interest Frequency</option>');
		$.each(data, function (index, item) {
			freqDrop.append('<option value="' + item.id + '">' + item.description + '</option>');
		});
	}
}

function populateFundHouseList(fhDrop) {
	getClientData("GET", "", "fundHouseList", fundHouseSuccess);
	function fundHouseSuccess(data) {
		fhDrop.find('option').remove();
		fhDrop.append('<option value="">Select Mutual Fund</option>');
		$.each(data, function (index, item) {
			fhDrop.append('<option value="' + item + '">' + item + '</option>');
		});

	}
}

function populateSecurityNameList(sipfDrop) {
getClientDataAsyncFalse("GET","","securityNameList",securityNameSuccess);

function securityNameSuccess(data){
//	console.log(data);
	//sipfDrop = $("#idSecurityNameList");
	sipfDrop.find('option').remove();
	sipfDrop.append('<option value="">Select Security Name</option>');
	/* $("#idSIPFETF").append('<option value="0">Select SIP Frequency</option>'); */
	$.each(data, function (index, item) {
		sipfDrop.append('<option value="' + item.isin + '">' + item.stockName + '</option>');
		/* $("#idSIPFETF").append('<option value="' + item.id + '">' + item.description + '</option>'); */
	});
	
   }
}

function populateSchemes(snDrop) {
		serviceurl = "SchemeFromFund/" + $(this).val();
		getClientData("GET", "", serviceurl, schemeFromFundSuccess);

		function schemeFromFundSuccess(data) {
			snDrop.find('option').remove();
			snDrop.append('<option value="">Select Scheme</option>');
			$.each(data, function (index, item) {
				snDrop.append('<option value="' + item + '">' + item + '</option>');
			});

		}
}

function populateFundCategory(fcDrop) {
	getClientData("GET", "", "AllFundCategory", fundCategorySuccess);

	function fundCategorySuccess(data) {
		fcDrop.find('option').remove();
		fcDrop.append('<option value="">Select Asset Category</option>');
		$.each(data, function (index, item) {
			fcDrop.append('<option value="' + item.id + '">' + item.description + '</option>');
		});

	}
}

function populateInvestmentMode(fimDrop) {
	getClientData("GET", "", "AllFundInvestmentMode", fundInvestmentModeSuccess);

	function fundInvestmentModeSuccess(data) {
		fimDrop.find('option').remove();
		fimDrop.append('<option value="">Select Investment Mode</option>');
		$.each(data, function (index, item) {
			fimDrop.append('<option value="' + item.id + '">' + item.description + '</option>');
		});

	}
}

function populateUserListDrop(userListDrop,advId){
	getClientData("GET", "", "getUserList/"+advId, onSuccess);

	function onSuccess(data) {
		fimDrop.find('option').remove();
		fimDrop.append('<option value="">Select User</option>');
		$.each(data, function (index, item) {
			fimDrop.append('<option value="' + item.id + '">' + item.userName + '</option>');
		});

	}
}

// deleted as same Method is declared above
/*function populateInterestFrequency(sipfDrop) {
	getClientData("GET", "", "AllFrequency", sipFrequencySuccess);

	function sipFrequencySuccess(data) {
		sipfDrop.find('option').remove();
		sipfDrop.append('<option value="">Select Frequency</option>');
		$.each(data, function (index, item) {
			sipfDrop.append('<option value="' + item.id + '">' + item.description + '</option>');
		});

	}
}*/

function populateCashBalanceType(cbtDrop) {
	getClientData("GET", "", "AllMasterProductClassification", cashBalanceTypeSuccess);

	function cashBalanceTypeSuccess(data) {
		cbtDrop.find('option').remove();
		cbtDrop.append('<option value="">Select Cash Balance Type</option>');
		$.each(data, function (index, item) {
			cbtDrop.append('<option value="' + item.id + '">' + item.productName + '</option>');
		});
	}
}

function populateBankName(bnDrop) {
	getClientDataAsyncFalse("GET", "", "AllMasterCash", bankNameSuccess);

	function bankNameSuccess(data) {
		bnDrop.find('option').remove();
		bnDrop.append('<option value="">Select Bank Name</option>');
		$.each(data, function (index, item) {
			bnDrop.append('<option value="' + item.id + '">' + item.name + '</option>');
		});
	}
}
function populateFamilyMemberByClientId(clientId, tableRowId) {

	getClientData("GET", "", "clientFamilyMemberImageByClient/" + clientId, familyMemberSuccess);
	function familyMemberSuccess(data) {
		var gender;
		tableRowId.empty();
		$.each(data,function(index, item) {
			console.log(item);
			sessionStorage.removeItem("RELATION_ID");
			sessionStorage.setItem("RELATION_ID", item.relationID);
							if (item.relationID === 0) {
								
								sessionStorage.setItem("SELECTED_FAMILY_MEMBER_ID",item.id);
								
								gender=item.gender;
								if (gender === 'M') {
									tableRowId
											.append('<td><img src="../Common/assets/images/icons/Man-C.png" id="'
													+ item.id
													+ '" onClick="onClickImage('
													+ item.id
													+ ')" class="assetOwner1_img"  alt="'+item.relationName+'" tabindex="200"/>'+item.relationName+'<br/>&nbsp;</td>');
								} else {
									tableRowId
											.append('<td><img src="../Common/assets/images/icons/Lady-C.png"  id="'
													+ item.id
													+ '" onClick="onClickImage('
													+ item.id
													+ ')" class="assetOwner1_img"  alt="'+item.relationName+'" tabindex="200"/>'+item.relationName+'<br/>&nbsp;</td>');
								}

							}
							if (item.relationID === 1) {
								/*sessionStorage.removeItem("RELATION_ID");
								sessionStorage.setItem("RELATION_ID", item.relationID);*/
								if (gender === 'M') {
									//alert('In M');
									console.log('In M');
									tableRowId
											.append('<td><img src="../Common/assets/images/icons/Lady-A.png"  id="'
													+ item.id
													+ '" onClick="onClickImage('
													+ item.id
													+ ')" class="assetOwner1_img"  alt="'+item.relationName+'" tabindex="200"/>'+item.relationName+'<br/>'+item.firstName+'</td>');
								} else {
									console.log('In F');
									tableRowId
											.append('<td><img src="../Common/assets/images/icons/Man-A.png"  id="'
													+ item.id
													+ '" onClick="onClickImage('
													+ item.id
													+ ')" class="assetOwner1_img"  alt="'+item.relationName+'" tabindex="200"/>'+item.relationName+'<br/>'+item.firstName+'</td>');
								}

							}
							if (item.relationID === 2) {
								/*sessionStorage.removeItem("RELATION_ID");
								sessionStorage.setItem("RELATION_ID", item.relationID);*/

								tableRowId
										.append('<td><img src="../Common/assets/images/icons/Boy-A.png"  id="'
												+ item.id
												+ '" onClick="onClickImage('
												+ item.id
												+ ')" class="assetOwner1_img"  alt="'+item.relationName+'" tabindex="200"/>'+item.relationName+'<br/>'+item.firstName+'</td>');

							}

							if (item.relationID === 3) {
								/*sessionStorage.removeItem("RELATION_ID");
								sessionStorage.setItem("RELATION_ID", item.relationID);*/
								tableRowId
										.append('<td><img src="../Common/assets/images/icons/Girl-A.png"  id="'
												+ item.id
												+ '" onClick="onClickImage('
												+ item.id
												+ ')" class="assetOwner1_img"  alt="'+item.relationName+'" tabindex="200"/>'+item.relationName+'<br/>'+item.firstName+'</td>');

							}

							if (item.relationID === 4) {
								/*sessionStorage.removeItem("RELATION_ID");
								sessionStorage.setItem("RELATION_ID", item.relationID);*/

								tableRowId
										.append('<td><img src="../Common/assets/images/icons/Father-A.png"  id="'
												+ item.id
												+ '" onClick="onClickImage('
												+ item.id
												+ ')" class="assetOwner1_img"  alt="'+item.relationName+'" tabindex="200"/>'+item.relationName+'<br/>'+item.firstName+'</td>');

							}
							if (item.relationID === 5) {
								/*sessionStorage.removeItem("RELATION_ID");
								sessionStorage.setItem("RELATION_ID", item.relationID);*/

								tableRowId
										.append('<td><img src="../Common/assets/images/icons/Mother-A.png"  id="'
												+ item.id
												+ '" onClick="onClickImage('
												+ item.id
												+ ')" class="assetOwner1_img"  alt="'+item.relationName+'" tabindex="200"/>'+item.relationName+'<br/>'+item.firstName+'</td>');

							}
							if (item.relationID === 6) {
								/*sessionStorage.removeItem("RELATION_ID");
								sessionStorage.setItem("RELATION_ID", item.relationID);
*/
								tableRowId
										.append('<td><img src="../Common/assets/images/icons/Boy-A.png"  id="'
												+ item.id
												+ '" onClick="onClickImage('
												+ item.id
												+ ')" class="assetOwner1_img"  alt="'+item.relationName+'" tabindex="200"/>'+item.relationName+'<br/>'+item.firstName+'</td>');

							}
							if (item.relationID === 7) {
							/*	sessionStorage.removeItem("RELATION_ID");
								sessionStorage.setItem("RELATION_ID", item.relationID);*/

								tableRowId
										.append('<td><img src="../Common/assets/images/icons/Girl-A.png"  id="'
												+ item.id
												+ '" onClick="onClickImage('
												+ item.id
												+ ')" class="assetOwner1_img"  alt="'+item.relationName+'" tabindex="200"/>'+item.relationName+'<br/>'+item.firstName+'</td>');

							}
							if (item.relationID === 8) {
								/*sessionStorage.removeItem("RELATION_ID");
								sessionStorage.setItem("RELATION_ID", item.relationID);*/

								tableRowId
										.append('<td><img src="../Common/assets/images/icons/Other-A.png"  id="'
												+ item.id
												+ '" onClick="onClickImage('
												+ item.id
												+ ')" class="assetOwner1_img"  alt="'+item.relationName+'" tabindex="200"/>'+item.relationName+'<br/>'+item.firstName+'</td>');

							}
						});
	}

}

function onClickImage(id) {
	var newSrc;
	$('#familyMemberImage  > td').each(function() {
		if ($(this).find('img').attr('id') != id) {
			newSrc = $(this).find('img').attr('src').replace("-C", "-A");
			$(this).find('img').attr('src', newSrc);
		} else {
			newSrc = $(this).find('img').attr('src').replace("-A", "-C");
			$(this).find('img').attr('src', newSrc);
		}
	});

	
	sessionStorage.setItem("SELECTED_FAMILY_MEMBER_ID",id);
	if(typeof onCustomImageClick==="function")
		{
		onCustomImageClick();
		}
	
	//alert("id in onclickImage exit: " + id);
}
function poupulateFamilyMemberImage(id) {
	//alert("inside poupulateFamilyMemberImage"+$(this).find('img').attr('id'));
	//alert("id : " + id);
	//alert("image" + $('#familyMemberImage  > td'));
	$('#familyMemberImage  > td').each(function() {
		//alert("inside");
		if ($(this).find('img').attr('id') != id) {
			//alert("in if");
			newSrc = $(this).find('img').attr('src').replace("-C", "-A");
			$(this).find('img').attr('src', newSrc);
		} else {
			//alert("in else");
			newSrc = $(this).find('img').attr('src').replace("-A", "-C");
			$(this).find('img').attr('src', newSrc);
		}
	});
	
	sessionStorage.setItem("SELECTED_FAMILY_MEMBER_ID",id);
}

function addPage(path,heading)
{
				sessionStorage.setItem("PAGE_MODE", "ADD");
			//	if (sessionStorage.getItem("FAMILY_ADD_CLIENT") != "YES"){
				sessionStorage.setItem("FAMILY_ADD_CLIENT", "NO");
				sessionStorage.setItem("LifeExpecTancy_ADD_CLIENT", "NO");
			//	}
                $("#idClient").empty();
                $(".dashboardheading").html("");
				$("#idClient").load(path);
				$("#addRecord").addClass('btn_Disabled');
                $('#editRecord').hide();
                $('#deleteRecord').hide();
                $(".dashboardheading").html(heading);
        		$("#mandatory-field-msg").show();				                 
}

function editPage(path,heading)
{
				sessionStorage.setItem("PAGE_MODE", "EDIT");
				sessionStorage.setItem("FAMILY_ADD_CLIENT", "NO");
				sessionStorage.setItem("LifeExpecTancy_ADD_CLIENT", "NO");
                $("#idClient").empty();
                $(".dashboardheading").html("");
				$("#idClient").load(path);
                $("#page-content-wrapper").css("height","auto");
				$(".form-section-container").addClass("height1257px");
				$(".nonload").css("display","block");
				$("#top-nav-bar").show();
				$(".displayonload").hide();
				$("#addRecord").show();
                $('#editRecord').show();
                $('#deleteRecord').show();
                $("#addRecord").removeClass('btn_Disabled');
                $('#editRecord').addClass('btn_Disabled');
                $('#deleteRecord').removeClass('btn_Disabled');
                $(".dashboardheading    ").html(heading);
        		$("#mandatory-field-msg").show();	
}
function addPageBusiness(path,heading)
{				
				sessionStorage.setItem("PAGE_MODE", "ADD");
	            
                $("#idBusiness").empty();
				$("#idBusiness").load(path);
				
				$("#idBuinessMasters").empty();
				$("#idBuinessMasters").load(path);
				
				$("#addRecord").addClass('btn_Disabled');
                $('#editRecord').hide();
                $('#deleteRecord').hide();
                $(".dashboardheading    ").html(heading);    
                
}
function addPageRiskProfile(path,heading)
{				
	            var loggedUser = JSON.parse(sessionStorage.getItem("LOGGED_IN_USER"));
	            loggedUserId=loggedUser.advisorMasterId;
	            console.log("loggedUserId "+loggedUserId);
	            
				sessionStorage.setItem("PAGE_MODE", "ADD");
				
				var url="getRiskProfileNameList/"+loggedUserId;
				getClientData("GET","",url,successRiskProfile);

				function successRiskProfile(data) {
					if(data.length>0){
						 bootbox.confirm({
							 title: "delete RiskProfile",
						     message: "Older risk profile for clients are no longer valid and risk profile questionnaire needs to be answered as per the new risk profile created",
					    	callback: function (result) {
					    		 if (result === true) {
					    			 
					    			 getClientData("GET","","deleteAllRiskProfile/"+loggedUserId,successRiskProfileDelete);

					 				function successRiskProfileDelete(data){
				    	
					    			   $("#idBuinessMasters").empty();
										$("#idBuinessMasters").load(path);
										
										$("#addRecord").addClass('btn_Disabled');
						                $('#editRecord').hide();
						                $('#deleteRecord').hide();
						                $(".dashboardheading    ").html(heading);    
					 				}
	    			 			}
		    	 				else{
		     					//alert(false);
		     					
		    	 				}
	    	 				}	
	            		});
					}
					else{
						$("#idBuinessMasters").empty();
						$("#idBuinessMasters").load(path);
						
						$("#addRecord").addClass('btn_Disabled');
		                $('#editRecord').hide();
		                $('#deleteRecord').hide();
		                $(".dashboardheading    ").html(heading);    
					}

				}
                
				
                
}
/*********************** new add edit added for MyBusiness ********************************/
function editPageBusiness(path,heading)
{
				sessionStorage.setItem("PAGE_MODE", "EDIT");
                $("#idBusiness").empty();
				$("#idBusiness").load(path);
				
				$("#idBuinessMasters").empty();
				$("#idBuinessMasters").load(path);
				
                $("#page-content-wrapper").css("height","auto");
				$(".form-section-container").addClass("height1257px");
				$(".nonload").css("display","block");
				$("#top-nav-bar").show();
				$(".displayonload").hide();
				$("#addRecord").show();
                $('#editRecord').show();
                $('#deleteRecord').show();
                $("#addRecord").removeClass('btn_Disabled');
                $('#editRecord').removeClass('btn_Disabled');
                $('#deleteRecord').removeClass('btn_Disabled');
                $(".dashboardheading    ").html(heading);
    
    
}


function deleteRow()
{
	
    $('#myModal').modal('show');
	$("#wrapper").css("height","1368px;");
	$("#page-content-wrapper").css("height","auto");
	$(".form-section-container").css("height","auto");
	//$("#idClient").load(URL);
	//$(".dashboardheading    ").html("");
	//$(".dashboardheading    ").html(heading);	      				
					
}
/***********************************End of Add *******************************************/

function addRowHandlers() {
	$("#addRecord").show();
    $('#editRecord').show();
    $('#deleteRecord').show();
    $("#addRecord").removeClass('btn_Disabled');
    $('#editRecord').removeClass('btn_Disabled');
    $('#deleteRecord').removeClass('btn_Disabled');   
}

function initRowHandlers() {
	$("#addRecord").show();
    $('#editRecord').show();
    $('#deleteRecord').show();
    $("#addRecord").removeClass('btn_Disabled');
    $('#editRecord').addClass('btn_Disabled');
    $('#deleteRecord').addClass('btn_Disabled');   
}

function  deleteSelectedRecord(URL)
{ 
	var deleteStatus;
	console.log("Inside Delete Selected Client: " + URL);
    $.ajax({
		type : 'GET',
		async : false,
		url : URL,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			deleteStatus = "success";
                      },
		error : function(jqXHR, exception) {
			deleteStatus = "error";
			var msg = '';
	        if (jqXHR.status === 0) {
	            msg = 'Could not connect to the server, please contact System Administrator.';
	        }else if(jqXHR.status == 400){
	        	msg = 'There is some problem in the server, please contact System Administrator.\n';
	        }else if(jqXHR.status == 401){
	        	msg = 'You are not authorized to access this data.';
	        } else if (jqXHR.status == 404) {
	            msg = 'Requested service url not found.]';
	        } else if (jqXHR.status == 500) {
	        	msg = 'There is some problem in the server, please contact System Administrator.\n';
	        } else if (exception === 'parsererror') {
	            msg = 'Failed to get result.';
	        } else if (exception === 'timeout') {
	            msg = 'Timed Out!';
	        } else if (exception === 'abort') {
	            msg = 'Request aborted.';
	        } else {
	            msg = 'Something went wrong, could not connect to the server, please contact System Administrator.\n';
	        }
	        //$('#post').html(msg);
	        if (JSON.parse(jqXHR.responseText).errorMessage != null || JSON.parse(jqXHR.responseText).errorMessage != undefined || JSON.parse(jqXHR.responseText).errorMessage != "") {
	        	sessionStorage.removeItem("MSG");
	        	sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage);
	        } 
	        
	        if (msg != "" || JSON.parse(jqXHR.responseText).errorMessage != null || JSON.parse(jqXHR.responseText).errorMessage != "undefined" || JSON.parse(jqXHR.responseText).errorMessage != ""){
	        	sessionStorage.removeItem("MSG");
		        sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage +'\n'+msg);
	        }
	       
	        if (JSON.parse(jqXHR.responseText).errorMessage == undefined) {
	        	sessionStorage.removeItem("MSG");
	        	sessionStorage.setItem("MSG", msg);
	        }
	         /*if (msg != "") {
	        	sessionStorage.removeItem("MSG");
	        	sessionStorage.setItem("MSG", JSON.parse(jqXHR.responseText).errorMessage +'\n'+msg);
	        }*/
	         $("#idClient").load("resources/errorPage.html");
	         $("#idBusiness").load("resources/errorPage.html");
	         $("#idBuinessMasters").load("resources/errorPage.html");
		}
	});
    return deleteStatus;
}

// Example use var foo = getParameterByName('foo'); // "lorem"
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

