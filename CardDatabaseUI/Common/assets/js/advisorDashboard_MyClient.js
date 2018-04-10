

$(".form-section-container").css("padding","18px 45px 636px");


$(function () {
	

	
			"use strict";
			$("[data-toggle=\"tooltip\"]").tooltip();
			$("#idaddmtngdate,#idaddtaskDate,#ideditmtngDate,#idedittaskDate").datepicker({
				format: "dd/mm/yyyy",
				todayHighlight: true,
				todayBtn: true
			});
			$(".datepicker-icon").on("click", function () {
				$(this).closest(".input-group").find("input").trigger("focus");
			});
		$('#timepicker1').timepicker();
			$('#timepicker2').timepicker();
				$('#timepicker3').timepicker();
					$('#timepicker4').timepicker();
			
				
			
		});
		

		

var totalEquityPercentage=0;
var totalFixedIncomePercentage=0;
var totalCashPercentage=0;
var totalalAlternatePercentage=0;	

var totalCash1Percentage=0;
var totalRetiRementScemesPercentage=0;
var totalSmallSavingScemesPercentage=0;
var totalDepositBondsPercentage=0;
var totalMfEtfPmsPercentage=0;
var totalDirectEquityPercentage=0;

var insuranceType;		
var asset;

$(document).ready(function () {
	

	populateAssetDrop($("#idSelectAssetList"));
	populateInsuranceDrop($("#idInsurancTypeList"));
	
	loggedUser = JSON.parse(sessionStorage.getItem("LOGGED_IN_USER"));
	console.log("loggedUser "+loggedUser.id);
	
	
	//===================start 1st block=========================//
	var serviceurl = "clientMasterListDashBoard/"+loggedUser.id ;
	getClientData("GET", "", serviceurl, onSuccess);
	function onSuccess(data) {
	//	////alert("Return data in business Side = " + data.length);
		$("#idtotal_clients").text(data.length);
		$("#idClientListDashBoard").empty();
		$.each(data, function (index, client) {
			var middle;
			if (client.middleName == null) {
				middle = "";
			} else {
				if (client.middleName != null) {
					middle = " "+client.middleName;
				}
			}
			createdOn = moment(client.createdOn,'DD/MM/YYYY').format('DD-MMM-YY');
			serviceSubscribed="Goal planning";
			$("#idClientListDashBoard").append('<tr>' +
				'<td>' +  client.firstName + middle + ' ' + client.lastName + '</td>' +
				'<td>' + serviceSubscribed + '</td>' +
				'<td>' + client.mobile + '</td>' +
				'<td>' + createdOn + '</td>' +
				'<td class="hidden"><input type="text" id="idclientId" name="clientId"  value=' + client.id + ' readonly="readonly"></td>' +
				'<td class="hidden"><input type="text" id="idclientName" name="clientName"  value="' + client.firstName + ' ' + client.lastName + '" readonly="readonly"></td>' +
				'<td class="hidden"><input type="text" id="idclientEmail" name="clientEmail"  value=' + client.emailId + ' readonly="readonly"></td>' +
				'<td class="hidden"><input type="text" id="idclientMobile" name="clientMobile"  value=' + client.mobile +' readonly="readonly"></td>' +

				'</tr>');
		});
	}
	 serviceurl = "addedClients/"+loggedUser.id+"/"+1;
	 getClientData("GET", "", serviceurl, onSuccessData);
	  function onSuccessData(data) {
		//  ////alert("data "+data);
		  $("#idNo").html(data); 
	  }
	
	    $("#idClientsAdded").on('change', function(){
	    	 var val = $(this).val();
	    	 // ////alert("val "+val+" loggedUser.id "+loggedUser.id);
	    	  serviceurl = "addedClients/"+loggedUser.id+"/"+val;
	    	  getClientData("GET", "", serviceurl, onSuccessClient);
	    	  function onSuccessClient(data) {
	    		//  ////alert("data.length "+data);
	    		  $("#idNo").html(data); 
	    	  }
		   
		 })
		 //===================start 1st block=========================//
		 //=================start 2nd and 3rd block===========================
		
			     var totalAsset=0;
			     var totalEquity=0;
			     var totalFixedIncome=0;
			     var totalCash=0;
			     var totalalAlternate=0;
			  
			    var totalCash1=0;
				var totalRetiRementScemes=0;
				var totalSmallSavingScemes=0;
				var totalDepositBonds=0;
				var totalMfEtfPms=0;
				var totalDirectEquity=0;
				var totalAllProducttype=0;
				
				
		
			
				var loggedUser = JSON.parse(sessionStorage.getItem("LOGGED_IN_USER"));
				var id = loggedUser.id;
			    console.log("loggedUser.id "+loggedUser.id);
				$.ajax({
					type: 'GET',
					url: REQUEST_URL_PM+'/getClientNetworthByAdvisorId?advisorUserID='+loggedUser.id,
					async: false,
					dataType: 'json',
					success: function (data) {
					//	console.log(data.length);
						$.each(data, function (Key, Value) { 
						populateDetailsNetworth(Value);
						});
					
						/*console.log("out "+" totalCash  "+totalCash);
						console.log("out "+" totalEquity  "+totalEquity);
						console.log("out "+" totalFixedIncome  "+totalFixedIncome);
						console.log("out "+" totalalAlternate  "+totalalAlternate);*/
						
					 /*   ////alert(data.name+" totalCash  "+totalCash);
					    ////alert(data.name+" totalEquity  "+totalEquity);
					    ////alert(data.name+" totalFixedIncome  "+totalFixedIncome);
					    ////alert(data.name+" totalalAlternate  "+totalalAlternate);*/
						
						
						totalAsset=(totalEquity+totalFixedIncome+totalCash+totalalAlternate);
						
						
					//	console.log(data.name+" totalAllAssetType "+totalAsset);
						
						//////alert(data.name+" totalAllAssetType "+totalAsset);
						
						
						totalEquityPercentage = ((totalEquity/totalAsset)*100).toFixed(2);
						totalEquityPercentage=parseFloat(totalEquityPercentage);
						
						totalFixedIncomePercentage = ((totalFixedIncome/totalAsset)*100).toFixed(2);
						totalFixedIncomePercentage=parseFloat(totalFixedIncomePercentage);
						
						totalCashPercentage = ((totalCash/totalAsset)*100).toFixed(2);
						totalCashPercentage=parseFloat(totalCashPercentage);
						
						totalalAlternatePercentage = ((totalalAlternate/totalAsset)*100).toFixed(2);
						totalalAlternatePercentage=parseFloat(totalalAlternatePercentage);
						
					/*	console.log("out "+data.name+" totalCash per  "+totalCashPercentage);
						console.log("out "+data.name+" totalEquity per "+totalEquityPercentage);
						console.log("out "+data.name+" totalFixedIncome per "+totalFixedIncomePercentage);
						console.log("out "+data.name+" totalalAlternate per "+totalalAlternatePercentage);*/
						
						
						totalAllProducttype=totalCash1+totalRetiRementScemes+totalSmallSavingScemes+totalDepositBonds+totalMfEtfPms+totalDirectEquity;
						
					
						/*console.log("out "+" totalCash1  "+totalCash1);
						console.log("out "+" totalRetiRementScemes "+totalRetiRementScemes);
						console.log("out "+" totalSmallSavingScemes "+totalSmallSavingScemes);
						console.log("out "+" totalDepositBonds  "+totalDepositBonds);
						console.log("out "+" totalMfEtfPms  "+totalMfEtfPms);
						console.log("out "+" totalDirectEquity  "+totalDirectEquity);
						console.log("out "+" totalAllProducttype  "+totalAllProducttype);*/
						
						totalCash1Percentage = ((totalCash1/totalAllProducttype)*100).toFixed(2);
						totalCash1Percentage=parseFloat(totalCash1Percentage);
						
						totalRetiRementScemesPercentage = ((totalRetiRementScemes/totalAllProducttype)*100).toFixed(2);
						totalRetiRementScemesPercentage=parseFloat(totalRetiRementScemesPercentage);
						
						totalSmallSavingScemesPercentage = ((totalSmallSavingScemes/totalAllProducttype)*100).toFixed(2);
						totalSmallSavingScemesPercentage=parseFloat(totalSmallSavingScemesPercentage);
						
						totalDepositBondsPercentage = ((totalDepositBonds/totalAllProducttype)*100).toFixed(2);
						totalDepositBondsPercentage=parseFloat(totalDepositBondsPercentage);
						
						totalMfEtfPmsPercentage = ((totalMfEtfPms/totalAllProducttype)*100).toFixed(2);
						totalMfEtfPmsPercentage=parseFloat(totalMfEtfPmsPercentage);
						
						totalDirectEquityPercentage = ((totalDirectEquity/totalAllProducttype)*100).toFixed(2);
						totalDirectEquityPercentage=parseFloat(totalDirectEquityPercentage);
						
						/*console.log("out "+" totalCash1Percentage  "+totalCash1Percentage);
						console.log("out "+" totalRetiRementScemesPercentage "+totalRetiRementScemesPercentage);
						console.log("out "+" totalSmallSavingScemesPercentage "+totalSmallSavingScemesPercentage);
						console.log("out "+" totalDepositBondsPercentage  "+totalDepositBondsPercentage);
						console.log("out "+" totalMfEtfPmsPercentage  "+totalMfEtfPmsPercentage);
						console.log("out "+" totalDirectEquityPercentage  "+totalDirectEquityPercentage);*/
						totalAllProducttype=(totalAllProducttype/10000000).toFixed(2);
					    totalAsset=(totalAsset/10000000).toFixed(2);
						$("#idTotalProductType").html("<b>Total:"+totalAllProducttype+"</b><span style='float:right'><b>AUM(Rs Crores)</b></span>");
						$("#idTotalAsset").html("<b>Total:"+totalAsset+"</b><span style='float:right'><b>AUM(Rs Crores)</b></span>");
						onLoadAllPieCharts();

					}, 
						error: function (data) {

					}
				});	

				function populateDetailsNetworth(data)
				{	
				var totalAssetMap={};
				var totalAssetValue=0;
				var equity=0;
				var fixedIncome=0;
				var cash=0;
				var alternate=0;
				var mFETFPMS=0;
				var directEquity=0;
				var depositBonds=0;
				var SmallSavingSchemes=0;
				var retirementOrientedSchemes=0;
				var alternateInvestments=0;
				var cash1=0;
				var totalAllAssetType=0;
				var totalassetType=0;
				
				
				
				$.each(data, function (mapKey, mapValue) { 
					if(mapKey=='totaltypeValueMap'){
						totalAssetMap["Investment Assets"] = mapValue["Investment"];
						totalAssetValue =((totalAssetMap["Investment Assets"] > 0)? totalAssetMap["Investment Assets"] : 0.00).toFixed(2);
					}
				});
				
				//console.log(JSON.stringify(data));

				$.each(data, function (mapKey, mapValue) {
					//console.log("mapKey "+mapKey);
					//console.log("mapValue"+mapValue);
					var html1="";
					var totalAllProductType=0;
					html1+="<tr><td>"+data.clientID+"</td><td>"+data.name+"</td>";
					if(mapKey=='typeValueMap'){
						$.each(mapValue, function (key, value) {
						if(key=='MF / ETF / PMS'){
							if(value!=0)
							mFETFPMS=value;
							totalAllProductType=totalAllProductType+value;
						}
                        if(key=='Direct Equity'){
                        	if(value!=0)
            				directEquity=value;
                        	totalAllProductType=totalAllProductType+value;
						}
                        if(key=='Deposit/Bonds'){
                        	if(value!=0)
            				depositBonds=value;
                        	totalAllProductType=totalAllProductType+value;
						}
                        if(key=='Small Saving Schemes'){
                        	if(value!=0)
            				SmallSavingSchemes=value;
                        	totalAllProductType=totalAllProductType+value;
                        }
                        if(key=='Retirement Oriented Schemes'){
                        	if(value!=0)
            				retirementOrientedSchemes=value;
                        	totalAllProductType=totalAllProductType+value;
                        }
                    
                        if(key=='Cash'){
                        	if(value!=0)
                        	cash1=value;
                        	totalAllProductType=totalAllProductType+value;
                        }

						});
					
						
				
						
											
                       	 if(mFETFPMS > 0 ){	
                       	totalMfEtfPms=totalMfEtfPms+mFETFPMS;
                         }
                    
                     
                         if(directEquity > 0 ){	 
                         totalDirectEquity=totalDirectEquity+directEquity;
                          }
                     
                         if(depositBonds > 0){ 
                         totalDepositBonds=totalDepositBonds+depositBonds;
                         }
                         
                         if(SmallSavingSchemes > 0){ 
                         totalSmallSavingScemes=totalSmallSavingScemes+SmallSavingSchemes;
                         }
                         
                         if(retirementOrientedSchemes > 0){ 
                        totalRetiRementScemes=totalRetiRementScemes+retirementOrientedSchemes;
                         }
                         
                         if(cash1 > 0){	
     					totalCash1=totalCash1+cash1;
     					}
                      
					
						
						
						html1+="<td>"+maskAmountValue(directEquity.toFixed(2))+"</td><td>"+maskAmountValue(mFETFPMS.toFixed(2))+"</td>"+
						       "<td>"+maskAmountValue(depositBonds.toFixed(2))+"</td><td>"+maskAmountValue(SmallSavingSchemes.toFixed(2))+"</td>"+
						       "<td>"+maskAmountValue(retirementOrientedSchemes.toFixed(2))+"</td><td>"+maskAmountValue(cash1.toFixed(2))+"</td>"+
						       "<td>"+maskAmountValue(totalAllProductType.toFixed(2))+"</td></tr>";
						
						$("#idProductTypeWiseAUM").append(html1);
						
						
						
					}
					
					    /*console.log("in "+" totalCash1  "+totalCash1);
						console.log("in "+" totalRetiRementScemes "+totalRetiRementScemes);
						console.log("in "+" totalSmallSavingScemes "+totalSmallSavingScemes);
						console.log("in "+" totalDepositBonds  "+totalDepositBonds);
						console.log("in  "+" totalMfEtfPms  "+totalMfEtfPms);
						console.log("in  "+" totalDirectEquity  "+totalDirectEquity);
						console.log("in  "+" totalAllProducttype  "+totalAllProducttype);*/
					
					if(mapKey=='rootMap')
					{
						
						$.each(mapValue, function (assetindex, assets) { 
							var circleImageCount=1;
							//console.log("assetindex "+assetindex);
						//	console.log("assets "+assets);
							if(assetindex=='Assets'){

								$.each(assets, function (typesubassetsindex, typesubassets) { 
								//	console.log("typesubassetsindex "+typesubassetsindex);
								//	console.log("typesubassets "+typesubassets);
									var total = 0;
									var totalInvestmentAsset = 0;
									var totalInvestmentAssetPercentage = 0;
									if(typesubassetsindex == 'Investment Assets'){
									
									
										
										
										var html="";
										html+="<tr><td>"+data.clientID+"</td><td>"+data.name+"</td>";
										
									
										$.each(typesubassets, function (typesubassetsProductsindex, typesubassetsProducts) { 
										//	console.log("typesubassetsProductsindex "+typesubassetsProductsindex);
										//	console.log("typesubassetsProducts "+typesubassetsProducts);
											var totalProductType=0;
											$.each(typesubassetsProducts, function (productindex, productvalue) { 
											//	console.log("productindex "+productindex);
											//	console.log("productvalue "+productvalue);
												totalProductType =totalProductType+productvalue.currentValue;
											//	console.log("totalProductType "+productvalue.currentValue);
												
												
												
												

										
											
																						
											});	
											if(typesubassetsProductsindex=='Cash'){
												if(totalProductType!=0)
												 //cash=maskAmountValue(totalProductType.toFixed(2));
													cash=totalProductType;
											}
                                           if(typesubassetsProductsindex=='Equity'){
                                        	   if(totalProductType!=0)
                                           	   //equity=maskAmountValue(totalProductType.toFixed(2));
                                        		  equity=totalProductType;
											}
                                           if(typesubassetsProductsindex=='FixedIncome'){	
                                        	   if(totalProductType!=0)
                               			      // fixedIncome=maskAmountValue(totalProductType.toFixed(2));
                                        		 fixedIncome=totalProductType;
											}
                                          if(typesubassetsProductsindex=='Alternate'){
                                        	  if(totalProductType!=0)
                              				 //alternate=maskAmountValue(totalProductType.toFixed(2));
                                        	  alternate=totalProductType;
                                           }
											
											totalAllAssetType=totalAllAssetType+totalProductType;
									
										});
										/*console.log("in method "+data.name+" Cash  "+cash);
										console.log("in method "+data.name+" Equity  "+equity);
										console.log("in method "+data.name+" FixedIncome  "+fixedIncome);
										console.log("in method "+data.name+" Alternate  "+alternate);
										console.log("in method "+data.name+" AssetType "+totalAllAssetType);*/
									
											if(cash > 0){	
											 totalCash=totalCash+cash;
											}
									
                                     
                                        	 if(equity > 0 ){	
                                        	 totalEquity=totalEquity+equity;
                                          }
                                  
                                     
                                           if(fixedIncome > 0 ){	 
                                        	 totalFixedIncome=totalFixedIncome+fixedIncome;
                                           }
                                     
                                    
                                          if(alternate > 0){ 
                                        	 totalalAlternate=totalalAlternate+alternate;
                                          }
                                     
										
										
										
										html=html+"<td>"+maskAmountValue(equity.toFixed(2))+"</td><td>"+maskAmountValue(fixedIncome.toFixed(2))+"</td><td>"+maskAmountValue(alternate.toFixed(2))+"</td><td>"+maskAmountValue(cash.toFixed(2))+"</td><td>"+maskAmountValue(totalAllAssetType.toFixed(2))
										
										
										
										
										+"</td></tr>";
										$("#idAssetTypeWiseAUM").append(html);
										
										
										
										
									}
								

								});
							}

						});
					}

				});

/*				console.log("in method "+" totalCash  "+totalCash);
				console.log("in method "+" totalEquity  "+totalEquity);
				console.log("in method "+" totalFixedIncome  "+totalFixedIncome);
				console.log("in method "+" totalalAlternate  "+totalalAlternate);
				console.log("in method "+" totalAllAssetType "+totalAllAssetType);*/
				
				 /*   console.log("in end"+" totalCash1  "+totalCash1);
					console.log("in end"+" totalRetiRementScemes "+totalRetiRementScemes);
					console.log("in end"+" totalSmallSavingScemes "+totalSmallSavingScemes);
					console.log("in end"+" totalDepositBonds  "+totalDepositBonds);
					console.log("in  end"+" totalMfEtfPms  "+totalMfEtfPms);
					console.log("in  end"+" totalDirectEquity  "+totalDirectEquity);
					console.log("in end "+" totalAllProducttype  "+totalAllProducttype);*/
		console.log("========================");
		}


			  
//==================end 2nd and 3rd block block===========================	
//==================start 4th block===================
				  var timePeriod=1;
				  specificRequermentStat="overview";
				  serviceurl=REQUEST_URL_PM+'/getclientPortfolioOverviewTimeperiodForAdvisor?advisorUserId='+loggedUser.id+'&specificRequermentStat='+specificRequermentStat+'&timePeriod='+timePeriod;
				  console.log("now serviceurl "+serviceurl);
				  var length=0;
				
				  $.ajax({
						type: 'GET',
						async : false,
						url: serviceurl,
						dataType: 'json',
						success: function (data) {
						
							var html="";
							length=data.length;
							
							$("#idAssetTable").empty();
							if(length>0){
							$.each(data, function(key, value) {
							
								  $("#idAssetTable").append('<tr>' +
										  '<td>' + value.clientName + '</td>' +
										  '<td>' + value.productName + '</td>' +
										  '<td>' + value.productType + '</td>' +
										  '<td>' + value.bankIssuerName + '</td>' +
										  '<td>' + value.currentValue + '</td>' +
										  '<td>' + maskAmountValue(value.maturityAmount.toFixed(2)) + '</td>' +
										  '<td>' + value.maturityDate + '</td>' +
						                '</tr>');
											   
		                     
							  });
							  
							}
						},
				   
				    	error: function (jqXHR, exception) {
				    	
				        var msg = '';
				        if (jqXHR.status === 0) {
				            msg = 'Could not connect. Verify Service/Server running.';
				        }else if(jqXHR.status == 401){
				        	msg = 'Unauthorized to Access [401]';
				        } else if (jqXHR.status == 404) {
				            msg = 'Requested page not found. [404]';
				        } else if (jqXHR.status == 500) {
				            msg = 'Internal Server Error [500].';
				        } else if (exception === 'parsererror') {
				            msg = 'Requested JSON parse failed.';
				        } else if (exception === 'timeout') {
				            msg = 'Time out error.';
				        } else if (exception === 'abort') {
				            msg = 'Ajax request aborted.';
				        } else {
				            msg = 'Uncaught Error.\n' + jqXHR.responseText;
				        }
				      
					}
				  
				  });
				  
				 
				  specificRequermentStat="overview";
				
				  serviceurl=REQUEST_URL_PM+'/getclientPortfolioOverviewTimeperiodAndAssetForAdvisor?advisorUserId='+loggedUser.id+'&specificRequermentStat='+specificRequermentStat+'&asset='+asset+'&timePeriod='+timePeriod;
				  //console.log("serviceurl "+serviceurl);
				  var length=0;
		
				  $.ajax({
						type: 'GET',
						async : false,
						url: REQUEST_URL_PM+'/getclientPortfolioOverviewTimeperiodAndAssetForAdvisor?advisorUserId='+loggedUser.id+'&specificRequermentStat='+specificRequermentStat+'&asset='+asset+'&timePeriod='+timePeriod,
						dataType: 'json',
						success: function (data) {
						   
							var html="";
							length=data.length;
							////alert("l "+data.length);
							$("#idAssetRow").empty();
							if(length>0){
							$.each(data, function(key, value) {
								 html+='<div class="mySlides fade">' +
					  			  '<div style="width:230px"> <table class="" style="width: 97%;margin-top: -45px;">' + 
					  			  '<tr><td colspan="3" class="dashboardinnerheading"><span class="bgblurheadingclr">'+value.clientName+'</span><img src="../Common/assets/images/arrow.png" style="width: 12px;height: 21px;margin-top: -1px;"/></td>'+
								  '</tr>'+
					  			  '<tr style="font-size: 12px">' +
					  			  '<td class="resulttopbrdr">Name</td>' +
					  			  '<td class="resulttopbrdr">Maturity Date</td>'+
					  			   '<td class="resulttopbrdr">Maturity Amount</td>'+
					  			  '</tr>'+
					  			  '<hr/>'+
					  			  '<tr style="font-size: 12px;">'+
					  			  '<td class="textalignlft resulttopbrdr">'+value.bankIssuerName +'</td>'+
					  			  '<td style="text-align:left !important" class="resulttopbrdr"><b>'+ value.maturityDate+'</b></td>'+
					  			  '<td class="textalignlft resulttopbrdr">'+maskAmountValue(value.maturityAmount.toFixed(2)) +'</td>'+
					  			  '</tr>'+
					  			  '</table>'+
					  			  '</div></div>';
				
							});
							  
							    html+='<a class="prev1" onclick="plusSlides(-1)">&#10094;</a><a class="next1" onclick="plusSlides(1)">&#10095;</a>';
					  	
					  		    $("#idAssetRow").html(html);
					  		
					  		    showSlides(slideIndex=1);
					  		
						}else{
							  //  showSlides2(0);
						}
						},
				   
				    	error: function (jqXHR, exception) {
				    	
				        var msg = '';
				        if (jqXHR.status === 0) {
				            msg = 'Could not connect. Verify Service/Server running.';
				        }else if(jqXHR.status == 401){
				        	msg = 'Unauthorized to Access [401]';
				        } else if (jqXHR.status == 404) {
				            msg = 'Requested page not found. [404]';
				        } else if (jqXHR.status == 500) {
				            msg = 'Internal Server Error [500].';
				        } else if (exception === 'parsererror') {
				            msg = 'Requested JSON parse failed.';
				        } else if (exception === 'timeout') {
				            msg = 'Time out error.';
				        } else if (exception === 'abort') {
				            msg = 'Ajax request aborted.';
				        } else {
				            msg = 'Uncaught Error.\n' + jqXHR.responseText;
				        }
				        
					}
				  
				  }); 	
					$("#idSelectAssetList").on('change', function(){
					
						asset = $(this).val();
					    ////alert("asset "+asset);
					    ////alert("time period "+timePeriod);
						specificRequermentStat="overview";
				        var url=REQUEST_URL_PM+'/getclientPortfolioOverviewTimeperiodAndAssetForAdvisor?advisorUserId='+loggedUser.id+'&specificRequermentStat='+specificRequermentStat+'&asset='+asset+'&timePeriod='+timePeriod;
						//console.log("url "+url);
				        $.ajax({
								type: 'GET',
								async : false,
								url: REQUEST_URL_PM+'/getclientPortfolioOverviewTimeperiodAndAssetForAdvisor?advisorUserId='+loggedUser.id+'&specificRequermentStat='+specificRequermentStat+'&asset='+asset+'&timePeriod='+timePeriod,
								dataType: 'json',
								success: function (data) {
								
									var html="";
									length=data.length;
									////alert("l "+data.length);
									$('#idAssetRow').empty();
									if(length>0){
									$.each(data, function(key, value) {
										////alert("hi ");
										  html+='<div class="mySlides fade">' +
							  			  '<div style="width:230px"> <table class="" style="width: 97%;margin-top: -45px;">' + 
							  			  '<tr><td colspan="3" class="dashboardinnerheading"><span class="bgblurheadingclr">'+value.clientName+'</span><img src="../Common/assets/images/arrow.png" style="width: 12px;height: 21px;margin-top: -1px;"/></td>'+
										  '</tr>'+
							  			  '<tr style="font-size: 12px">' +
							  			  '<td class="resulttopbrdr">Name</td>' +
							  			  '<td class="resulttopbrdr">Maturity Date</td>'+
							  			   '<td class="resulttopbrdr">Maturity Amount</td>'+
							  			  '</tr>'+
							  			  '<hr/>'+
							  			  '<tr style="font-size: 12px;">'+
							  			  '<td class="textalignlft resulttopbrdr"><b>'+value.bankIssuerName +'</b></td>'+
							  			  '<td style="text-align:left !important" class="resulttopbrdr"><b>'+ value.maturityDate+'</b></td>'+
							  			  '<td class="textalignlft resulttopbrdr"><b>'+maskAmountValue(value.maturityAmount.toFixed(2)) +'</b></td>'+
							  			  '</tr>'+
							  			  '</table>'+
							  			  '</div></div>';
										 /* <!--  <div class="mySlides fade">
										  <div style="width:230px">
											   <table class="" style="width: 97%;
										margin-top: -45px;">
												
												<tr>
												<td colspan="3" class="dashboardinnerheading"><span class="bgblurheadingclr">Nikhil Agrawal</span><img src="../Common/assets/images/arrow.png" style="width: 12px;height: 21px;margin-top: -1px;"/></td>
												</tr>
												<tr style="font-size: 12px">
												<td class="textalignlft">Provider Name</td>
												<td style="text-align:left !important">Maturity Date</td>
												<td class="textalignlft">Maturity Amount</td>
												</tr>
												
												<hr/>
												<tr style="font-size: 12px;">
												<td class="textalignlft resulttopbrdr"><b>HDFC Bank</b></td>
												<td style="text-align:left !important" class="resulttopbrdr"><b>18 Aug 17</b></td>
												<td class="textalignlft resulttopbrdr"><b>176000</b></td>
												</tr>
														</table>
											  </div>
										</div> <!-- <a class="prev1" onclick="plusSlides(-1)">&#10094;</a>
                                      <a class="next1" onclick="plusSlides(1)">&#10095;</a> -->-->*/
									
										 
									});
									  
									    html+='<a class="prev1" onclick="plusSlides(-1)">&#10094;</a><a class="next1" onclick="plusSlides(1)">&#10095;</a>';
							  		
							  		    $("#idAssetRow").html(html);
							  		  
							  		    showSlides(slideIndex=1);
							  		   
								}else{
									
									 //  showSlides(0);
								}
								},
						   
						    	error: function (jqXHR, exception) {
						    	
						        var msg = '';
						        if (jqXHR.status === 0) {
						            msg = 'Could not connect. Verify Service/Server running.';
						        }else if(jqXHR.status == 401){
						        	msg = 'Unauthorized to Access [401]';
						        } else if (jqXHR.status == 404) {
						            msg = 'Requested page not found. [404]';
						        } else if (jqXHR.status == 500) {
						            msg = 'Internal Server Error [500].';
						        } else if (exception === 'parsererror') {
						            msg = 'Requested JSON parse failed.';
						        } else if (exception === 'timeout') {
						            msg = 'Time out error.';
						        } else if (exception === 'abort') {
						            msg = 'Ajax request aborted.';
						        } else {
						            msg = 'Uncaught Error.\n' + jqXHR.responseText;
						        }
						       
							}
						  
						  }); 
					});
				  
					$("#idTimePeriod").on('change', function(){
						timePeriod = $(this).val();
						////alert("asset "+asset);
					    ////alert("time period "+timePeriod);
						specificRequermentStat="overview";
						var url=REQUEST_URL_PM+'/getclientPortfolioOverviewTimeperiodAndAssetForAdvisor?advisorUserId='+loggedUser.id+'&specificRequermentStat='+specificRequermentStat+'&asset='+asset+'&timePeriod='+timePeriod;
					    //console.log("url "+url);
						$.ajax({
								type: 'GET',
								async : false,
								url: REQUEST_URL_PM+'/getclientPortfolioOverviewTimeperiodAndAssetForAdvisor?advisorUserId='+loggedUser.id+'&specificRequermentStat='+specificRequermentStat+'&asset='+asset+'&timePeriod='+timePeriod,
								dataType: 'json',
								success: function (data) {
					
									var html="";
									length=data.length;
									 ////alert("length "+length);
									$('#idAssetRow').empty();
									if(length>0){
									$.each(data, function(key, value) {
										  ////alert("hi ");
										  html+='<div class="mySlides fade">' +
							  			  '<div style="width:230px"> <table class="" style="width: 97%;margin-top: -45px;">' + 
							  			  '<tr><td colspan="3" class="dashboardinnerheading"><span class="bgblurheadingclr">'+value.clientName+'</span><img src="../Common/assets/images/arrow.png" style="width: 12px;height: 21px;margin-top: -1px;"/></td>'+
										  '</tr>'+
							  			  '<tr style="font-size: 12px">' +
							  			  '<td class="resulttopbrdr">Name</td>' +
							  			  '<td class="resulttopbrdr">Maturity Date</td>'+
							  			   '<td class="resulttopbrdr">Maturity Amount</td>'+
							  			  '</tr>'+
							  			  '<hr/>'+
							  			  '<tr style="font-size: 12px;">'+
							  			  '<td class="textalignlft resulttopbrdr"><b>'+value.bankIssuerName +'</b></td>'+
							  			  '<td style="text-align:left !important" class="resulttopbrdr"><b>'+ value.maturityDate+'</b></td>'+
							  			  '<td class="textalignlft resulttopbrdr"><b>'+maskAmountValue(value.maturityAmount.toFixed(2)) +'</b></td>'+
							  			  '</tr>'+
							  			  '</table>'+
							  			  '</div></div>';
										  
										
					
									});
									  
									    html+='<a class="prev1" onclick="plusSlides(-1)">&#10094;</a><a class="next1" onclick="plusSlides(1)">&#10095;</a>';
							  		//    ////console.log(html);
							  		    $("#idAssetRow").html(html);
							  		 //   slideIndex2=1;
							  		    showSlides(slideIndex=1);
							  		    ////console.log("end ");
								}else{
									// $('#idAssetRow').empty()
									// showSlides(0);
								}
								},
						   
						    	error: function (jqXHR, exception) {
						    	
						        var msg = '';
						        if (jqXHR.status === 0) {
						            msg = 'Could not connect. Verify Service/Server running.';
						        }else if(jqXHR.status == 401){
						        	msg = 'Unauthorized to Access [401]';
						        } else if (jqXHR.status == 404) {
						            msg = 'Requested page not found. [404]';
						        } else if (jqXHR.status == 500) {
						            msg = 'Internal Server Error [500].';
						        } else if (exception === 'parsererror') {
						            msg = 'Requested JSON parse failed.';
						        } else if (exception === 'timeout') {
						            msg = 'Time out error.';
						        } else if (exception === 'abort') {
						            msg = 'Ajax request aborted.';
						        } else {
						            msg = 'Uncaught Error.\n' + jqXHR.responseText;
						        }
						       
							}
						  
						  }); 
					});
					$("#idTimePeriodModalSelect").on('change', function(){
						timePeriod = $(this).val();
						  specificRequermentStat="overview";
						  serviceurl=REQUEST_URL_PM+'/getclientPortfolioOverviewTimeperiodForAdvisor?advisorUserId='+loggedUser.id+'&specificRequermentStat='+specificRequermentStat+'&timePeriod='+timePeriod;
						  console.log("now1 serviceurl "+serviceurl);
						  
						  var length=0;
					
							$.ajax({
								type: 'GET',
								async : false,
								url: REQUEST_URL_PM+'/getclientPortfolioOverviewTimeperiodForAdvisor?advisorUserId='+loggedUser.id+'&specificRequermentStat='+specificRequermentStat+'&timePeriod='+timePeriod,
								dataType: 'json',
								success: function (data) {
								
									var html="";
									length=data.length;
									
									$("#idAssetTable").empty();
									if(length>0){
									$.each(data, function(key, value) {

										 $("#idAssetTable").append('<tr>' +
												  '<td>' + value.clientName + '</td>' +
												  '<td>' + value.productName + '</td>' +
												  '<td>' + value.productName + '</td>' +
												  '<td>' + value.bankIssuerName + '</td>' +
												  '<td>' + maskAmountValue(value.currentValue.toFixed(2)) + '</td>' +
												  '<td>' + maskAmountValue(value.maturityAmount.toFixed(2)) + '</td>' +
												  '<td>' + value.maturityDate + '</td>' +
								                '</tr>');
													   
				                     
									  });
									  
									}
								},
						   
						    	error: function (jqXHR, exception) {
						    	
						        var msg = '';
						        if (jqXHR.status === 0) {
						            msg = 'Could not connect. Verify Service/Server running.';
						        }else if(jqXHR.status == 401){
						        	msg = 'Unauthorized to Access [401]';
						        } else if (jqXHR.status == 404) {
						            msg = 'Requested page not found. [404]';
						        } else if (jqXHR.status == 500) {
						            msg = 'Internal Server Error [500].';
						        } else if (exception === 'parsererror') {
						            msg = 'Requested JSON parse failed.';
						        } else if (exception === 'timeout') {
						            msg = 'Time out error.';
						        } else if (exception === 'abort') {
						            msg = 'Ajax request aborted.';
						        } else {
						            msg = 'Uncaught Error.\n' + jqXHR.responseText;
						        }
						       
							}
						  
						  });
					});
//===========================end 4th block====================================//
//===========================start 5th block==================================//
					$("#idTimePeriodModalSelectInsurance").on('change', function(){
						timePeriodInsurance = $(this).val();
						serviceurl = "getLockedUptoDateTimePeriodForAdvisor?advisorUserID="+loggedUser.id+'&timePeriod='+timePeriodInsurance;
						getClientData("GET", "", serviceurl, onSuccessInsuranceModal);
						  
						  ////console.log("serviceurl "+serviceurl);
						  var length=0;
						
						  function onSuccessInsuranceModal (data) {
							
									var html="";
									length=data.length;
								
									$("#idTimePeriodModalSelectInsuranceTable").empty();
									if(length>0){
									$.each(data, function(key, value) {
										   endDate=moment(value.lockedUptoDate,'DD/MM/YYYY').format('DD-MMM-YY');
										  $("#idTimePeriodModalSelectInsuranceTable").append('<tr>' +
												  '<td>' + value.clientName + '</td>' +
												  '<td>' + value.policyNumber + '</td>' +
												  '<td>' + value.ownerName + '</td>' +
												  '<td>' + value.policyName + '</td>' +
												  '<td>' + value.insuranceCompanyName + '</td>' +
												  '<td>' + value.insuranceType + '</td>' +
												  '<td>' + value.lookupPolicyTypeDesc+ '</td>' +
												  '<td>' + maskAmountValue(value.sumInsured.toFixed(2)) + '</td>' +
												  '<td>' + endDate + '</td>' +
								                '</tr>');
													   
				                     
									  });
									  
									}
								}
						  });
	         timePeriodInsurance = 1;
	         serviceurl = "getLockedUptoDateTimePeriodForAdvisor?advisorUserID="+loggedUser.id+'&timePeriod='+timePeriodInsurance;
	         getClientData("GET", "", serviceurl, onSuccessInsuranceModalonLoad);
	         ////console.log("serviceurl "+serviceurl);
	        
	         var length=0;

	        function onSuccessInsuranceModalonLoad (data) {
				var html="";
				length=data.length;
				
				$("#idTimePeriodModalSelectInsuranceTable").empty();
				if(length>0){
				$.each(data, function(key, value) {
					 endDate=moment(value.lockedUptoDate,'DD/MM/YYYY').format('DD-MMM-YY');
					  $("#idTimePeriodModalSelectInsuranceTable").append('<tr>' +
							  '<td>' + value.clientName + '</td>' +
							  '<td>' + value.policyNumber + '</td>' +
							  '<td>' + value.ownerName + '</td>' +
							  '<td>' + value.policyName + '</td>' +
							  '<td>' + value.insuranceCompanyName + '</td>' +
							  '<td>' + value.insuranceType + '</td>' +
							  '<td>' + value.lookupPolicyTypeDesc+ '</td>' +
							  '<td>' + maskAmountValue(value.sumInsured.toFixed(2)) + '</td>' +
							  '<td>' + endDate + '</td>' +
			                '</tr>');
								   
	             
				  });
				  
				}
			}
				
					  
	                  timePeriodInsurance=1;
					  serviceurl = "getLockedUptoDateForAdvisor?advisorUserID="+loggedUser.id+'&timePeriod='+timePeriodInsurance;
					  getClientData("GET", "", serviceurl, onSuccessInsurance);
					  
					  ////console.log("serviceurl "+serviceurl);
					  var length=0;
					 
					
					           function onSuccessInsurance(data) {
						
								var html="";
								length=data.length;
							
								 $("#idInsurancetypeTable").empty();
								if(length>0){
								$.each(data, function(key, value) {
									endDate=moment(value.lockedUptoDate,'DD/MM/YYYY').format('DD MMM YY');
							
									 html+=' <div class="mySlides1 fade">' +
						  			  '<div style="width:230px"> <table class="" style="width: 97%;margin-top: -45px;">' + 
						  			  '<tr><td colspan="3" class="dashboardinnerheading"><span class="bgblurheadingclr">'+value.clientName+'</span><img src="../Common/assets/images/arrow.png" style="width: 12px;height: 21px;margin-top: -1px;"/></td></tr>'+
						  			  '<tr style="font-size: 12px">' +
						  			  '<td class="textalignlft" style="width:50%">Insurance Policy Type</td>' +
						  			  '<td style="text-align:left !important">Maturity Date</td>'+
						  			   '<td class="textalignlft">Sum Insured</td>'+
						  			  '</tr>'+
						  			  '<hr/>'+
						  			  '<tr style="font-size: 12px;">'+
						  			  '<td class="textalignlft resulttopbrdr"><b>'+value.lookupPolicyTypeDesc +'</td>'+
						  			  '<td style="text-align:left !important" class="resulttopbrdr"><b>'+endDate+'</b></td>'+
						  			  '<td class="textalignlft resulttopbrdr"><b>'+maskAmountValue(value.sumInsured.toFixed(2))+'</b></td>'+
						  			  '</tr>'+
						  			  '</table>'+
						  			  '</div></div>';
									 
									 /*<div class="mySlides1 fade">
								      <div style="width:230px" > <table class="" style="width: 97%;margin-top: -45px;">
										
										<tr>
										<td colspan="3" class="dashboardinnerheading"><span class="bgblurheadingclr">Neha Mohnot</span><img src="../Common/assets/images/arrow.png" style="width: 12px;height: 21px;margin-top: -1px;"/></td>
										</tr>
										<tr style="font-size: 12px">
										<td class="textalignlft" style="width:50%">Insurance Policy Type</td>
										<td style="text-align:left !important">Maturity Date</td>
										<td class="textalignlft">Sum Insured</td>
										</tr>
										
										<hr/>
										<tr style="font-size: 12px;">
										<td class="textalignlft resulttopbrdr"><b>Mediclaim</b></td>
										<td style="text-align:left !important" class="resulttopbrdr"><b>17 Aug 17</b></td>
										<td class="textalignlft resulttopbrdr"><b>14000</b></td>
										</tr>
										</table>
								       </div>
								       </div>*/
				
									  
				
								});
								  
								    html+='<a class="prev2" onclick="plusSlides1(-1)">&#10094;</a><a class="next2" onclick="plusSlides1(1)">&#10095;</a>';
								    //<a class="prev2" onclick="plusSlides1(-1)" style="margin-left: -240px;">&#10094;</a><a class="next2" onclick="plusSlides1(1)">&#10095;</a>
								  /*  html+='<div style="text-align:center">'+
								    	  +'<span class="dot1" onclick="currentSlide1(1)"></span>'+
								    	  +'<span class="dot1" onclick="currentSlide1(2)"></span>'+
								    	  +'<span class="dot1" onclick="currentSlide1(3)"></span>'+ 
								    	  +'</div>';*/
						  		
						  		    $("#idInsurancetypeTable").html(html);
						  		 
						  		    showSlides1(slideIndex1=1);
						  		  
							}else{
								 //showSlides1(0);
							}
							}
					   
					  	
						$("#idInsurancTypeList").on('change', function(){
							
								insuranceType = $(this).val();
								
								//alert("timePeriodInsurance "+timePeriodInsurance);
								//alert("insuranceType "+insuranceType);
					
								var length=0;	
								if(insuranceType==1){
								serviceurl = "getLockedUptoDateForAdvisor?advisorUserID="+loggedUser.id+'&timePeriod='+timePeriodInsurance;
								getClientData("GET", "", serviceurl, onSuccessInsurancType);
		                        ////console.log("serviceurl "+serviceurl);	 
								}else{
								serviceurl = "getPolicyEndDateForadvisor?advisorUserID="+loggedUser.id+'&insuranceType='+insuranceType+'&timePeriod='+timePeriodInsurance;
								getClientData("GET", "", serviceurl, onSuccessInsurancType);
			                    ////console.log("serviceurl "+serviceurl);		 
								}
								
								
							                function onSuccessInsurancType(data)  {
								
											var html="";
											length=data.length;
										
											    
											 $("#idInsurancetypeTable").empty();
											 var endDate;
											 //alert("length "+length);
											if(length>0){
											$.each(data, function(key, value) {
												 if(insuranceType==1){
													 endDate=moment(value.lockedUptoDate,'DD/MM/YYYY').format('DD MMM YY');
												 }else{
													 endDate=moment(value.policyEndDate,'DD/MM/YYYY').format('DD MMM YY');
												 }
										
												  html+=' <div class="mySlides1 fade">' +
									  			  '<div style="width:230px"> <table class="" style="width: 97%;margin-top: -45px;">' + 
									  			  '<tr><td colspan="3" class="dashboardinnerheading"><span class="bgblurheadingclr">'+value.clientName+'</span><img src="../Common/assets/images/arrow.png" style="width: 12px;height: 21px;margin-top: -1px;"/></td></tr>'+
									  			  '<tr style="font-size: 12px">' +
									  			  '<td class="textalignlft" style="width:50%">Insurance Policy Type</td>' +
									  			  '<td style="text-align:left !important">Maturity Date</td>'+
									  			   '<td class="textalignlft">Sum Insured</td>'+
									  			  '</tr>'+
									  			  '<hr/>'+
									  			  '<tr style="font-size: 12px;">'+
									  			  '<td class="textalignlft resulttopbrdr"><b>'+value.lookupPolicyTypeDesc +'</td>'+
									  			  '<td style="text-align:left !important" class="resulttopbrdr"><b>'+endDate+'</b></td>'+
									  			  '<td class="textalignlft resulttopbrdr"><b>'+maskAmountValue(value.sumInsured.toFixed(2))+'</b></td>'+
									  			  '</tr>'+
									  			  '</table>'+
									  			  '</div></div>';
												  
												 
							
											});
											  
											    html+='<a class="prev2" onclick="plusSlides1(-1)">&#10094;</a><a class="next2" onclick="plusSlides1(1)">&#10095;</a>';
												
											    
											    /*<a class="prev2" onclick="plusSlides1(-1)">&#10094;</a>
											    <a class="next2" onclick="plusSlides1(1)">&#10095;</a>*/
											     
											     
									  		    $("#idInsurancetypeTable").html(html);
									  		
									  		    showSlides1(slideIndex1=1);
									  		   
										}else{
											 //showSlides3(0);
										}
							         }		
							      });		
						         $("#idTimePeriodInsurance").on('change', function(){
						
							    timePeriodInsurance = $(this).val();
								var length=0;	
								
								
								//alert("timePeriodInsurance "+timePeriodInsurance);
								//alert("insuranceType "+insuranceType);
					
								if(insuranceType==1){
								serviceurl = "getLockedUptoDateForAdvisor?advisorUserID="+loggedUser.id+'&timePeriod='+timePeriodInsurance;
								getClientData("GET", "", serviceurl, onSuccessInsuranceTime);
		                        ////console.log("serviceurl "+serviceurl);	 
								}else{
								serviceurl = "getPolicyEndDateForadvisor?advisorUserID="+loggedUser.id+'&insuranceType='+insuranceType+'&timePeriod='+timePeriodInsurance;
								getClientData("GET", "", serviceurl, onSuccessInsuranceTime);
			                    ////console.log("serviceurl "+serviceurl);		 
								}
								
								
								            function onSuccessInsuranceTime (data) {
									
											var html="";
											length=data.length;
											//alert("length "+length);
											    
											 $("#idInsurancetypeTable").empty();
											 var endDate;
											 if(length>0){
											 $.each(data, function(key, value) {
												if(insuranceType==1){
													 endDate=moment(value.lockedUptoDate,'DD/MM/YYYY').format('DD MMM YY');
												 }else{
													 endDate=moment(value.policyEndDate,'DD/MM/YYYY').format('DD MMM YY');
												 }
											
												  html+=' <div class="mySlides1 fade">' +
									  			  '<div style="width:230px"> <table class="" style="width: 97%;margin-top: -45px;">' + 
									  			  '<tr><td colspan="3" class="dashboardinnerheading"><span class="bgblurheadingclr">'+value.clientName+'</span><img src="../Common/assets/images/arrow.png" style="width: 12px;height: 21px;margin-top: -1px;"/></td></tr>'+
									  			  '<tr style="font-size: 12px">' +
									  			  '<td class="textalignlft" style="width:50%">Insurance Policy Type</td>' +
									  			  '<td style="text-align:left !important">Maturity Date</td>'+
									  			   '<td class="textalignlft">Sum Insured</td>'+
									  			  '</tr>'+
									  			  '<hr/>'+
									  			  '<tr style="font-size: 12px;">'+
									  			  '<td class="textalignlft resulttopbrdr"><b>'+value.lookupPolicyTypeDesc +'</td>'+
									  			  '<td style="text-align:left !important" class="resulttopbrdr"><b>'+endDate+'</b></td>'+
									  			  '<td class="textalignlft resulttopbrdr"><b>'+maskAmountValue(value.sumInsured.toFixed(2))+'</b></td>'+
									  			  '</tr>'+
									  			  '</table>'+
									  			  '</div></div>';
												  
							
											});
											  
											html+='<a class="prev2" onclick="plusSlides1(-1)">&#10094;</a><a class="next2" onclick="plusSlides1(1)">&#10095;</a>';
											
									  		
									  		    $("#idInsurancetypeTable").html(html);
									  		 
									  		    showSlides1(slideIndex1=1);
									  		   
										}else{
											// showSlides3(0);
										}
										}
						});         
//===========================end 5 th block===================================//	
//=====================start 6th block========================
							     serviceurl = "findClientBirthdayByUserID/"+loggedUser.id+"/"+1;
							  	 getClientData("GET", "", serviceurl, onSuccessBirthdayData);
							  	  function onSuccessBirthdayData(data) {
							//  		 console.log("len "+data.length);
							  	     var i=1;
							  	     var html="";
							  	   $("#idIterationDOB").empty();
							  	     if(data.length>0){
							  		  $.each(data, function (index, client) {
							  			var middle;
										if (client.middleName == null) {
											middle = "";
										} else {
											if (client.middleName != null) {
												middle = " "+client.middleName;
											}
										}
							  		  
										birthDate = moment(client.birthDate,'DD/MM/YYYY').format('DD MMM YY');
							  			  
							  			  html+='<div class="mySlides2 fade2">' +
							  			  '<div style="width:230px"> <table class="" style="width: 97%;margin-top: -45px;">' +  
							  			  '<tr>' +
							  			  '<td colspan="3" class="dashboardinnerheading"><span class="bgblurheadingclr">' + client.firstName + middle + ' ' + client.lastName + '</span><img src="../Common/assets/images/arrow.png" style="width: 12px;height: 21px;margin-top: -1px;"/><span style="float:right;color:black;font-size:12px"><b>'+client.age+'yrs</b></span></td>' +
							  			  '</tr>'+
							  			  '<tr style="font-size: 12px">'+
							  			  '<td class="textalignlft" style="width:50%;padding:0px"><img src="../Common/assets/images/calendar.jpg" style="width:29px"/>&nbsp;'+birthDate+'</td>'+
							  			  '</tr>'+
							  			  '<tr style="font-size: 12px">'+
							  			  '<td class="textalignlft" style="width:50%;padding:0px"><img src="../Common/assets/images/calendar.jpg" style="width:29px"/>&nbsp;'+client.emailId+'</td>'+
							  			  '</tr>'+
							  			  '<hr/>'+
							  			  '<tr style="font-size: 12px;">'+
							  			  '<td class="textalignlft style="width:50%;padding:0px"><img src="../Common/assets/images/calendar.jpg" style="width:29px"/>&nbsp;'+client.mobile+'</td>'+
							  			  '</tr>'+
							  			  '</table>'+
							  			  '</div></div>';
							  			  
							  		               $("#idlistUpcomingBirthday").append('<tr>' +
												  '<td>' +  client.firstName + ' ' + middle + ' ' + client.lastName + '</td>' +
												  '<td>' + birthDate + '</td>' +
												  '<td>' + client.emailId + '</td>' +
												  '<td>' + client.mobile + '</td>' +
												  '<td>' + client.age + '</td>' +
								                   '</tr>');
							  			 
							  		  });
							  		
							  		  html+='<a class="prev3" onclick="plusSlides2(-1)">&#10094;</a><a class="next3" onclick="plusSlides2(1)">&#10095;</a>';
							  	//	  console.log(html);
							  		  $("#idIterationDOB").html(html);
							  		   
							  		   slideIndex2 = 1;
							  		   showSlides2(slideIndex2);
							  	//	   console.log("end ");
							  	    } 
							  	  }
							  	$("#idSelectBirthday").on('change', function(){
							    	 var val = $(this).val();
							//    	 console.log("val "+val+" loggedUser.id "+loggedUser.id);
							    	  serviceurl = "findClientBirthdayByUserID/"+loggedUser.id+"/"+val;
							    	  getClientData("GET", "", serviceurl, onSuccessClientBirthday);
							    	  function onSuccessClientBirthday(data) {
							 //   		  console.log("len "+data.length);
									  	     var i=1;
									  	     var html="";
									  	     if(data.length>0){
									  		  $.each(data, function (index, client) {
									  			var middle;
												if (client.middleName == null) {
													    middle = "";
												} else {
													if (client.middleName != null) {
														middle = " "+client.middleName;
													}
												}
									  		  
												  birthDate = moment(client.birthDate,'DD/MM/YYYY').format('DD MMM YY');
									  			  
									  			  html+='<div class="mySlides2 fade2">' +
									  			  '<div style="width:230px"> <table class="" style="width: 97%;margin-top: -45px;">' +  
									  			  '<tr>' +
									  			  '<td colspan="3" class="dashboardinnerheading"><span class="bgblurheadingclr">' + client.firstName +middle + ' ' + client.lastName + '</span><img src="../Common/assets/images/arrow.png" style="width: 12px;height: 21px;margin-top: -1px;"/><span style="float:right;color:black;font-size:12px"><b>'+client.age+'yrs</b></span></td>' +
									  			  '</tr>'+
									  			  '<tr style="font-size: 12px">'+
									  			  '<td class="textalignlft" style="width:50%;padding:0px"><img src="../Common/assets/images/calendar.jpg" style="width:29px"/>&nbsp;'+birthDate+'</td>'+
									  			  '</tr>'+
									  			  '<tr style="font-size: 12px">'+
									  			  '<td class="textalignlft" style="width:50%;padding:0px"><img src="../Common/assets/images/calendar.jpg" style="width:29px"/>&nbsp;'+client.emailId+'</td>'+
									  			  '</tr>'+
									  			  '<hr/>'+
									  			  '<tr style="font-size: 12px;">'+
									  			  '<td class="textalignlft style="width:50%;padding:0px"><img src="../Common/assets/images/calendar.jpg" style="width:29px"/>&nbsp;'+client.mobile+'</td>'+
									  			  '</tr>'+
									  			  '</table>'+
									  			  '</div></div>';
									  			  
									  		
									  			
									  			 
									  		  });
									  		
									  		  html+='<a class="prev3" onclick="plusSlides2(-1)">&#10094;</a><a class="next3" onclick="plusSlides2(1)">&#10095;</a>';
								//	  		  console.log(html);
									  		  $("#idIterationDOB").html(html);
									  		
									  		    slideIndex2 = 1;
									  		   showSlides2(slideIndex2);
									//  		   console.log("end ");
							    	    }
									  		 
							    	  }
							  	}); 
							  /*	serviceurl = "findClientBirthdayByUserID/"+loggedUser.id+"/"+1;
							  	 getClientData("GET", "", serviceurl, onSuccessBirthdayDataList);
								  function onSuccessBirthdayDataList(data) {
							//	     console.log("len "+data.length);
								     var i=1;
								     $("#idlistUpcomingBirthday").empty();
									  $.each(data, function (index, client) {
								//		  console.log(client.firstName + ' ' + middle + ' ' + client.lastName);
										  var middle;
											if (client.middleName == null) {
												middle = " ";
											} else {
												if (client.middleName != null) {
													middle = client.middleName;
												}
											}
								  		  
											birthDate = moment(client.birthDate,'DD/MM/YYYY').format('DD-MMM-YY');
								  			  
						                  $("#idlistUpcomingBirthday").append('<tr>' +
										  '<td>' +  client.firstName + ' ' + middle + ' ' + client.lastName + '</td>' +
										  '<td>' + birthDate + '</td>' +
										  '<td>' + client.emailId + '</td>' +
										  '<td>' + client.mobile + '</td>' +
										  '<td>' + client.age + '</td>' +
						                   '</tr>');
										});		 
										 
								       }*/
								
								  $("#idSelectBirthdayList").on('change', function(){
								    	 var val = $(this).val();
								  //  	 console.log("val "+val+" loggedUser.id "+loggedUser.id);
								    	  serviceurl = "findClientBirthdayByUserID/"+loggedUser.id+"/"+val;
								    	  getClientData("GET", "", serviceurl, onSuccessSelectClientBirthdayList);
								    	  function onSuccessSelectClientBirthdayList(data) {
								    //		  console.log("len "+data.length);
										  	     var i=1;
										  	     var html="";
										  	   $("#idlistUpcomingBirthday").empty();
										  		  $.each(data, function (index, client) {
									//	  			 console.log(client.firstName + ' ' + middle + ' ' + client.lastName);
										  			var middle;
													if (client.middleName == null) {
														middle = "";
													} else {
														if (client.middleName != null) {
															middle = " "+client.middleName;
														}
													}
										  		  
													birthDate = moment(client.birthDate,'DD/MM/YYYY').format('DD-MMM-YY');
													 $("#idlistUpcomingBirthday").append('<tr>' +
															  '<td>' + client.firstName +middle + ' ' + client.lastName +'</td>' +
															  '<td>' + birthDate + '</td>' +
															  '<td>' + client.emailId + '</td>' +
															  '<td>' + client.mobile + '</td>' +
															  '<td>' + client.age + '</td>' +
											                   '</tr>');
										  		  });
								    	      }
								          });
								  
								  
 //=========================end 6th block===================


								
										
		 //================================start 9th block=========================
	 serviceurl = "upcomingGoal/"+loggedUser.id+"/"+7;
	 getClientData("GET", "", serviceurl, onSuccessGoalData);
	  function onSuccessGoalData(data) {
		// console.log("len "+data.length);
	     var i=1;
	     var html="";
	     $("#idIteration").empty();
	     if(data.length>0){
		  $.each(data, function (index, goal) {
			
			  startYearMonth = moment(goal.startMonthYear,'YYYY-MM-DD').format('MMM/YYYY');
			  html+='<div class="mySlides5 fade5">' +
			  '<div style="width:230px"> <table class="" style="width: 97%; margin-top: -45px;">' +  
			  '<tr>' +
			  '<td colspan="3" class="dashboardinnerheading"><span class="bgblurheadingclr">' + goal.name + '</span><img src="../Common/assets/images/arrow.png" style="width: 12px;height: 21px;margin-top: -1px;"/></td>' +
			  '</tr>'+
			  '<tr >'+
			  '<td class="textalignlft">Goals</td>'+
			  '<td class="textalignlft" ></td>'+
			  '<td class="textalignlft">Goal Start Year and Month</td>'+
			  '</tr>'+
			  '<hr/>'+
			  '<tr style="font-size: 12px;">'+
			  '<td class="textalignlft resulttopbrdr"><b>'+goal.lookupGoalTypeName+'</b></td>'+
			  '<td class="textalignlft resulttopbrdr"><b></b></td>'+
			  '<td style="text-align:left !important" class="resulttopbrdr"><b>'+startYearMonth+'</b></td>'+
			  '</tr>'+
			  '</table>'+
			  '</div></div>';
			  
			     
				
					
	                  $("#idListUpcomingGoal").append('<tr>' +
					  '<td>' + goal.name + '</td>' +
					  '<td>' + goal.lookupGoalTypeName + '</td>' +
					  '<td>' + goal.description + '</td>' +
					  '<td>' + startYearMonth + '</td>' +
					  '<td>' + goal.estimatedCostOfGoal + '</td>' +
					  '<td>' +  + '</td>' +
					  '<td>' + goal.lumpsum + '</td>' +
	                   '</tr>');
					
		 
			 
		  });
		
		  html+='<a class="prev4" onclick="plusSlides5(-1)">&#10094;</a><a class="next4" onclick="plusSlides5(1)">&#10095;</a>';
		// console.log(html);
		  $("#idIteration").html(html);
		  slideIndex5 = 1;
		//  console.log("slideIndex5 "+slideIndex5);
		  showSlides5(slideIndex5);
		//  console.log("end ");
		  }
	  }
	
	    $("#idUpcomingGoal").on('change', function(){
	    	 var val = $(this).val();
	   // 	 console.log("val "+val+" loggedUser.id "+loggedUser.id);
	    	  serviceurl = "upcomingGoal/"+loggedUser.id+"/"+val;
	    	  getClientData("GET", "", serviceurl, onSuccessClient);
	    	  function onSuccessClient(data) {
	    		 
	    		  var html="";
	    		  $("#idIteration").empty();
	    		  if(data.length>0){
	    		  $.each(data, function (index, goal) {
	    			  startYearMonth = moment(goal.startMonthYear,'YYYY-MM-DD').format('MMM/YYYY');
	    			
	    			  
	    			  html+='<div class="mySlides5 fade5">' +
	    			  '<div style="width:230px"> <table class="" style="width: 97%; margin-top: -45px;">' +  
	    			  '<tr>' +
	    			  '<td colspan="3" class="dashboardinnerheading"><span class="bgblurheadingclr">' + goal.name + '</span><img src="../Common/assets/images/arrow.png" style="width: 12px;height: 21px;margin-top: -1px;"/></td>' +
	    			  '</tr>'+
	    			  '<tr >'+
	    			  '<td class="textalignlft">Goals</td>'+
	    			  '<td class="textalignlft" ></td>'+
	    			  '<td class="textalignlft">Goal Start Year and Month</td>'+
	    			  '</tr>'+
	    			  '<hr/>'+
	    			  '<tr style="font-size: 12px;">'+
	    			  '<td class="textalignlft resulttopbrdr"><b>'+goal.lookupGoalTypeName+'</b></td>'+
	    			  '<td class="textalignlft resulttopbrdr"><b></b></td>'+
	    			  '<td style="text-align:left !important" class="resulttopbrdr"><b>'+startYearMonth+'</b></td>'+
	    			  '</tr>'+
	    			  '</table>'+
	    			  '</div></div>';
	    		  }); 
	    	 
	    		  html+='<a class="prev4" onclick="plusSlides5(-1)">&#10094;</a><a class="next4" onclick="plusSlides5(1)">&#10095;</a>';
	    		//	 console.log(html);
	    			  $("#idIteration").html(html);
	    			  slideIndex5 = 1;
	    		//	  console.log("slideIndex5 "+slideIndex5);
	    			  showSlides5(slideIndex5);
	    	//		  console.log("end ");
	    		  
		     }
	       } 
	    });
	    /* serviceurl = "upcomingGoal/"+loggedUser.id+"/"+7;
		 getClientData("GET", "", serviceurl, onSuccessGoalDataList);
		  function onSuccessGoalDataList(data) {
		//     console.log("len "+data.length);
		     var i=1;
		     $("#idListUpcomingGoal").empty();
			  $.each(data, function (index, goal) {
				  startYearMonth = moment(goal.startMonthYear,'YYYY-MM-DD').format('DD-MMM-YY');
                  $("#idListUpcomingGoal").append('<tr>' +
				  '<td>' + goal.name + '</td>' +
				  '<td>' + goal.lookupGoalTypeName + '</td>' +
				  '<td>' + goal.description + '</td>' +
				  '<td>' + startYearMonth + '</td>' +
				  '<td>' + goal.estimatedCostOfGoal + '</td>' +
				  '<td>' +  + '</td>' +
				  '<td>' + goal.lumpsum + '</td>' +
                   '</tr>');
				});		 
				 
		       }*/
		  
		       $("#idSelectUpcomingGoal").on('change', function(){
			     var val = $(this).val();
		    //	 console.log("val "+val+" loggedUser.id "+loggedUser.id);
			     serviceurl = "upcomingGoal/"+loggedUser.id+"/"+val;
				 getClientData("GET", "", serviceurl, onSuccessGoalDataListAll);
				  function onSuccessGoalDataListAll(data) {
				//       console.log("len "+data.length);
				      $("#idListUpcomingGoal").empty();
					  $.each(data, function (index, goal) {
				//		  console.log("hi");
						  startYearMonth = moment(goal.startMonthYear,'YYYY-MM-DD').format('DD-MMM-YY');
		                  $("#idListUpcomingGoal").append('<tr>' +
						  '<td>' + goal.name + '</td>' +
						  '<td>' + goal.lookupGoalTypeName + '</td>' +
						  '<td>' + goal.description + '</td>' +
						  '<td>' + startYearMonth + '</td>' +
						  '<td>' + goal.estimatedCostOfGoal + '</td>' +
						  '<td>' +  + '</td>' +
						  '<td>' + goal.lumpsum + '</td>' +
		                   '</tr>');
						});		 
						 
				       }
		  });
		       //================================end 9th block=========================
		      
					
	function populateAssetDrop(dropId) {
	 getClientDataAsyncFalse("GET", "", "getAssetForMaturityRenewal", onAssetSuccess);
						
	 function onAssetSuccess(data) {
						
		dropId.find('option').remove();
		var i=0;
		$.each(data, function (index, item) {
		if(i==0){
		asset=item.productName;	
		}
		i++;
		dropId.append('<option value="' + item.productName + '">'
		+ item.productName + '</option>');

		});
					
		}
	}		
		
	function populateInsuranceDrop(dropId) {
		//	//alert("dropId "+dropId);
			getClientDataAsyncFalse("GET", "", "AllInsuranceType", onInsuranceTypeSuccess);
		
			function onInsuranceTypeSuccess(data) {
			
				dropId.find('option').remove();
				var i=0;
				$.each(data, function (index, item) {
					if(i==0){
						insuranceType=item.id;	
					}
					i++;
					dropId.append('<option value="' + item.id + '">'
						+ item.description + '</option>');

				});
			//	//alert("insuranceType inside "+$(dropId+' > option').length);
			}
		}							
//===================================================					
	jQuery.fn.popupwindow = function(p)
	
{


	var profiles = p || {};
	
	return this.each(function(index){
		var settings, parameters, mysettings, b, a, winObj;
		
		// for overrideing the default settings
		mysettings = (jQuery(this).attr("rel") || "").split(",");


		settings = {
			height:600, // sets the height in pixels of the window.
			width:600, // sets the width in pixels of the window.
			toolbar:0, // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
			scrollbars:0, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
			status:0, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
			resizable:1, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
			left:0, // left position when the window appears.
			top:0, // top position when the window appears.
			center:0, // should we center the window? {1 (YES) or 0 (NO)}. overrides top and left
			createnew:1, // should we create a new window for each occurance {1 (YES) or 0 (NO)}.
			location:0, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
			menubar:0, // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
			onUnload:null // function to call when the window is closed
		};

		// if mysettings length is 1 and not a value pair then assume it is a profile declaration
		// and see if the profile settings exists

		if(mysettings.length == 1 && mysettings[0].split(":").length == 1)
		{
			a = mysettings[0];
			// see if a profile has been defined
			if(typeof profiles[a] != "undefined")
			{
				settings = jQuery.extend(settings, profiles[a]);
			}
		}
		else
		{
			// overrides the settings with parameter passed in using the rel tag.
			for(var i=0; i < mysettings.length; i++)
			{
				b = mysettings[i].split(":");
				if(typeof settings[b[0]] != "undefined" && b.length == 2)
				{
					settings[b[0]] = b[1];
				}
			}
		}

		// center the window
		if (settings.center == 1)
		{
			settings.top = (screen.height-(settings.height + 110))/2;
			settings.left = (screen.width-settings.width)/2;
		}
		
		parameters = "location=" + settings.location + ",menubar=" + settings.menubar + ",height=" + settings.height + ",width=" + settings.width + ",toolbar=" + settings.toolbar + ",scrollbars=" + settings.scrollbars  + ",status=" + settings.status + ",resizable=" + settings.resizable + ",left=" + settings.left  + ",screenX=" + settings.left + ",top=" + settings.top  + ",screenY=" + settings.top;
		
		jQuery(this).bind("click", function(){
			var name = settings.createnew ? "PopUpWindow" + index : "PopUpWindow";
			winObj = window.open(this.href, name, parameters);
			
			if (settings.onUnload) {
				// Incremental check for window status
				// Attaching directly to window.onunlaod event causes invoke when document within window is reloaded
				// (i.e. an inner refresh)
				unloadInterval = setInterval(function() {
					if (!winObj || winObj.closed) {
						clearInterval(unloadInterval);	
						settings.onUnload.call($(this));
					}
				},500);
			}
			
			winObj.focus();
			
			return false;
		});
	});

};
	var profiles =
	{

		window800:
		{
			height:800,
			width:1250,
			status:1
		}

			};

	function unloadcallback(){
		////alert("unloaded");
	};


   	$(function()
	{
   		$(".popupwindow").popupwindow(profiles);
   	});	
	
	
	
	
	
	//** code for max window clientsnapshot**//*
	
	var modal = document.getElementById("idPopnetworth");

// Get the button that opens the modal
var btn = document.getElementById("idMaxnetworthsum");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	$(".onpopupscroller").css("overflow","hidden");
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	$(".onpopupscroller").css("overflow","visible");
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
	//** code for max window assetclasswise**//*
	
	var modal1 = document.getElementById("idPopassetwise");

// Get the button that opens the modal
var btn1 = document.getElementById("idMaxassetclass");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
	$(".onpopupscroller").css("overflow","hidden");
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
	$(".onpopupscroller").css("overflow","visible");
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}


//** code for max window product type wise**//*
	
	var modal2 = document.getElementById("idPoptypewise");

// Get the button that opens the modal
var btn2 = document.getElementById("idMaxtypewise");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
	$(".onpopupscroller").css("overflow","hidden");
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
	$(".onpopupscroller").css("overflow","visible");
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
	
	
	//** code for max window asset maturity **//*
	
	var modal3 = document.getElementById("idPopassetmaturity");

// Get the button that opens the modal
var btn3 = document.getElementById("idmaxassetmaturity");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
	$(".onpopupscroller").css("overflow","hidden");
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
	$(".onpopupscroller").css("overflow","visible");
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}



	//** code for max window Insurance maturity **//*
	
	var modal4 = document.getElementById("idPopInsurancematurity");

// Get the button that opens the modal
var btn4 = document.getElementById("idmaxinsurancematurity");

// Get the <span> element that closes the modal
var span4= document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btn4.onclick = function() {
	$(".onpopupscroller").css("overflow","hidden");
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
	$(".onpopupscroller").css("overflow","visible");
    modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}


//** code for max window clientbday **//*
	
	var modal5 = document.getElementById("idPopClientbday");

// Get the button that opens the modal
var btn5 = document.getElementById("idmaxClientbday");

// Get the <span> element that closes the modal
var span5= document.getElementsByClassName("close5")[0];

// When the user clicks the button, open the modal 
btn5.onclick = function() {
	$(".onpopupscroller").css("overflow","hidden");
    modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
	$(".onpopupscroller").css("overflow","visible");
    modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}


//** code for max window meeting calendar**//*
	
	var modal6 = document.getElementById("idPopmeeting");

// Get the button that opens the modal
var btn6 = document.getElementById("idmaxmeeting");

// Get the <span> element that closes the modal
var span6= document.getElementsByClassName("close6")[0];

// When the user clicks the button, open the modal 
btn6.onclick = function() {
	$(".onpopupscroller").css("overflow","hidden");
    modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span6.onclick = function() {
	$(".onpopupscroller").css("overflow","visible");
    modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
}




//** code for max window task pinboard**//*
	
	var modal7 = document.getElementById("idPoptaskpin");

// Get the button that opens the modal
var btn7 = document.getElementById("idMaxtaskpin");

// Get the <span> element that closes the modal
var span7= document.getElementsByClassName("close7")[0];

// When the user clicks the button, open the modal 
btn7.onclick = function() {
	$(".onpopupscroller").css("overflow","hidden");
    modal7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span7.onclick = function() {
	$(".onpopupscroller").css("overflow","visible");
    modal7.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal7) {
        modal7.style.display = "none";
    }
	}

//** code for max window upcoming goals**//*
	
	var modal8 = document.getElementById("idPopupcomingoal");

// Get the button that opens the modal
var btn8 = document.getElementById("idMaxupcomingoal");

// Get the <span> element that closes the modal
var span8= document.getElementsByClassName("close8")[0];

// When the user clicks the button, open the modal 
btn8.onclick = function() {
	
	$(".onpopupscroller").css("overflow","hidden");
    modal8.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span8.onclick = function() {
	$(".onpopupscroller").css("overflow","visible");
    modal8.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal8) {
        modal8.style.display = "none";
    }
	}
	
	//** code for add meeting1 btn**//*
	
	var modal9 = document.getElementById("idPopaddmeeting");

// Get the button that opens the modal
var btn9 = document.getElementById("idaddmtngwindow");

// Get the <span> element that closes the modal
var span9= document.getElementsByClassName("close9")[0];

// When the user clicks the button, open the modal 
btn9.onclick = function() {
	$(".onpopupscroller").css("overflow","hidden");
    modal9.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span9.onclick = function() {
	$(".onpopupscroller").css("overflow","visible");
    modal9.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal9) {
        modal9.style.display = "none";
    }
	}

//** code for add meeting task pinboard btn**//*
	
	var modal10 = document.getElementById("idPopaddmeeting2");

// Get the button that opens the modal
var btn10 = document.getElementById("idaddmtngwindow2");

// Get the <span> element that closes the modal
var span10= document.getElementsByClassName("close10")[0];

// When the user clicks the button, open the modal 
btn10.onclick = function() {
	$(".onpopupscroller").css("overflow","hidden");
    modal10.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span10.onclick = function() {
	$(".onpopupscroller").css("overflow","visible");
    modal10.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal10) {
        modal10.style.display = "none";
    }
	}


//** code for edit metting btn**//*
	
	var modal11 = document.getElementById("idPopeditmeeting");

// Get the button that opens the modal
var btn11 = document.getElementById("ideditmtngwindow");

// Get the <span> element that closes the modal
var span11= document.getElementsByClassName("close11")[0];

// When the user clicks the button, open the modal 
btn11.onclick = function() {
	$(".onpopupscroller").css("overflow","hidden");
    modal11.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span11.onclick = function() {
	$(".onpopupscroller").css("overflow","visible");
    modal11.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal11) {
        modal11.style.display = "none";
    }
	}

	
	//** code for edit task  btn**//*
	
	var modal12 = document.getElementById("idPopeditask");

// Get the button that opens the modal
var btn12 = document.getElementById("idedittask");

// Get the <span> element that closes the modal
var span12= document.getElementsByClassName("close12")[0];

// When the user clicks the button, open the modal 
btn12.onclick = function() {
	$(".onpopupscroller").css("overflow","hidden");
    modal12.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span12.onclick = function() {
	$(".onpopupscroller").css("overflow","visible");
    modal12.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal12) {
        modal12.style.display = "none";
    }
	}

   





//** slideshow for asset maturity **//*

/*var slideIndex;
//showSlides(slideIndex);

function plusSlides(n) {
  console.log("plusSlides n "+n);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  console.log("currentSlide n "+n);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log("showSlides n "+n);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log("slides.length "+slides.length);
  var dots = document.getElementsByClassName("dot");
  console.log("dots.length "+dots.length);
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active1", "");
  }
  console.log("slideIndex  "+slideIndex);
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active1";
}*/



//** slideshow for InsuranceMaturity **//*

/*var slideIndex1;
//showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  if (n > slides1.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";  
  }
  for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active2", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots1[slideIndex1-1].className += " active2";
}
*/


//** slideshow for clientbday **//*



	//** slideshow for meeting calendar **//*

var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots3 = document.getElementsByClassName("dot3");
  if (n > slides3.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";  
  }
  for (i = 0; i < dots3.length; i++) {
      dots3[i].className = dots3[i].className.replace(" active4", "");
  }
  slides3[slideIndex3-1].style.display = "block";  
  dots3[slideIndex3-1].className += " active4";
}




//** slideshow for task pinboard**//*

var slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  var i;
  var slides4 = document.getElementsByClassName("mySlides4");
  var dots4 = document.getElementsByClassName("dot4");
  if (n > slides4.length) {slideIndex4 = 1}    
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";  
  }
  for (i = 0; i < dots4.length; i++) {
      dots4[i].className = dots4[i].className.replace(" active4", "");
  }
  slides4[slideIndex4-1].style.display = "block";  
  dots4[slideIndex4-1].className += " active4";

}



//** slideshow for upcoming board**//*



/*<div class="mySlides5 fade5">
<div style="width:230px"> <table class="" style="width: 97%; margin-top: -45px;">
<tr><td colspan="3" class="dashboardinnerheading"><span class="bgblurheadingclr">Supraad Hrt Chakraborty</span><img src="../Common/assets/images/arrow.png" style="width: 12px;height: 21px;margin-top: -1px;"/>
</td></tr>
<tr><td class="textalignlft">Goals</td><td class="textalignlft" ></td>
<td class="textalignlft">Goal Start Year and Month</td></tr>
<hr/>
<tr style="font-size: 12px;"><td class="textalignlft resulttopbrdr"><b>1</b></td>
<td class="textalignlft resulttopbrdr"><b></b></td>
<td style="text-align:left !important" class="resulttopbrdr"><b>Jan/2017</b></td>
</tr></table>
</div>
</div>*/

function onLoadAllPieCharts() {
	
	
	 Highcharts.chart('producttype', {
	       chart: {
	           plotBackgroundColor: '#ececec',
				
	           plotBorderWidth: null,
	           plotShadow: false,
	           type: 'pie'
	       },
	       legend: {
			  fontSize: '1em',
	           align: 'right',
				backgroundColor: '#ececec',
	       verticalAlign: 'bottom',
			layout: 'horizontal',
	       itemStyle: {
	               color: '#000000',
	                fontSize: '12px'
	           }
	       },
	       title: {
	           text: ''
	       },
	       tooltip: {
	           pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	       },
	       plotOptions: {
	           pie: {
	               allowPointSelect: true,
	               cursor: 'pointer',
	               dataLabels: {
	                   enabled: false
	               },
	               showInLegend: true
	           }
	       },
	       series: [{
	           name: 'Brands',
	           colorByPoint: true,
	            innerSize: '30%',
	          fontSize: '1px',
	           data: [{
	               name: 'Direct Equity',
	               y: totalDirectEquityPercentage,
	             fontSize: '1px'
	           }, {
	               name: 'MF/ETF/PMS',
	               y: totalMfEtfPmsPercentage,
	               sliced: true,
	               selected: true
	           }, {
	               name: 'Deposit/Bonds',
	               y: totalDepositBondsPercentage
	           }, {
	               name: 'Small Saving Schemes',
	               y: totalSmallSavingScemesPercentage
	           }, {
	               name: 'Retirement Schemes',
	               y: totalRetiRementScemesPercentage
	           }, {
	               name: 'Cash',
	               y: totalCash1Percentage
	           }]
	       }]
	   });
		
	
	
	 // Build the chart
  	 Highcharts.chart('assetclass', {
       chart: {
           plotBackgroundColor: '#ececec',
			
           plotBorderWidth: null,
           plotShadow: false,
           type: 'pie'
       },
       legend: {
           align: 'center',
			backgroundColor: '#ececec',
       verticalAlign: 'bottom',
		
       layout: 'vertical',
           itemStyle: {
               color: '#000000',
        fontSize: '12px'
           }
       },
       title: {
           text: ''
       },
       tooltip: {
           pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       },
       plotOptions: {
           pie: {
               allowPointSelect: true,
               cursor: 'pointer',
               dataLabels: {
                   enabled: false
               },
               showInLegend: true
           }
       },
       series: [{
           name: 'Brands',
           colorByPoint: true,
            innerSize: '30%',
          fontSize: '5px',
           data: [{
               name: 'Equity',
               y: totalEquityPercentage
            
           },
			{
               name: 'Debt',
               y: totalFixedIncomePercentage,
				 sliced: true,
               selected: true
           }, {
               name: 'Alternatives',
               y: totalalAlternatePercentage
           },{
               name: 'Cash',
               y: totalCashPercentage
              
           }]
       }]
   });
  	 

  	/*console.log("out "+data.name+" totalCash per  "+totalCashPercentage);
	console.log("out "+data.name+" totalEquity per "+totalEquityPercentage);
	console.log("out "+data.name+" totalFixedIncome per "+totalFixedIncomePercentage);
	console.log("out "+data.name+" totalalAlternate per "+totalalAlternatePercentage);	
	
	 console.log("out "+" totalCash1Percentage  "+totalCash1Percentage);
	 console.log("out "+" totalRetiRementScemesPercentage "+totalRetiRementScemesPercentage);
	 console.log("out "+" totalSmallSavingScemesPercentage "+totalSmallSavingScemesPercentage);
	 console.log("out "+" totalDepositBondsPercentage  "+totalDepositBondsPercentage);
	 console.log("out "+" totalMfEtfPmsPercentage  "+totalMfEtfPmsPercentage);
	 console.log("out "+" totalDirectEquityPercentage  "+totalDirectEquityPercentage);*/
	
}
	

});
var slideIndex;
//showSlides(slideIndex);

function plusSlides(n) {
console.log("plusSlides n "+n);
showSlides(slideIndex += n);
}

function currentSlide(n) {
console.log("currentSlide n "+n);
showSlides(slideIndex = n);
}

function showSlides(n) {
console.log("showSlides n "+n);
var i;
var slides = document.getElementsByClassName("mySlides");
console.log("slides.length "+slides.length);
var dots = document.getElementsByClassName("dot");
console.log("dots.length "+dots.length);
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
}
console.log("slideIndex  "+slideIndex);
if(slides.length>0)
slides[slideIndex-1].style.display = "block";  
if(slideIndex>=1 &&  slideIndex<=3)
dots[slideIndex-1].className += " active1";
}

var slideIndex1;
//showSlides1(slideIndex1);

function plusSlides1(n) {
showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
var i;
var slides1 = document.getElementsByClassName("mySlides1");
var dots1 = document.getElementsByClassName("dot1");
if (n > slides1.length) {slideIndex1 = 1}    
if (n < 1) {slideIndex1 = slides1.length}
for (i = 0; i < slides1.length; i++) {
  slides1[i].style.display = "none";  
}
for (i = 0; i < dots1.length; i++) {
  dots1[i].className = dots1[i].className.replace(" active2", "");
}
console.log("showSlides1 n "+n);
console.log("slides1.length "+slides1.length);
console.log("dots1.length "+dots1.length);
console.log("slideIndex1  "+slideIndex1);
if(slides1.length>0)
slides1[slideIndex1-1].style.display = "block";  
if(slideIndex1>=1 &&  slideIndex1<=3)
dots1[slideIndex1-1].className += " active2";
}


var slideIndex2;
//showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
  }

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
  for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active3", "");
  }
//  console.log(" slides2.length "+ slides2.length);
//  console.log("n "+n);
//  console.log("slideIndex2 "+slideIndex2);
  if(slides2.length!=0){
  slides2[slideIndex2-1].style.display = "block";  
  if(slideIndex2>=1 &&  slideIndex2<=3)
  dots2[slideIndex2-1].className += " active3";
  }
}

var slideIndex5;
//showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  
  var i;
  var slides5 = document.getElementsByClassName("mySlides5");
  var dots5 = document.getElementsByClassName("dot5");
  if (n > slides5.length) {slideIndex5 = 1}    
  if (n < 1) {slideIndex5 = slides5.length}
//  console.log("slides5.length "+slides5.length);
  for (i = 0; i < slides5.length; i++) {
//	  console.log("slides5[i] "+slides5[i]);
      slides5[i].style.display = "none";  
  }
  for (i = 0; i < dots5.length; i++) {
      dots5[i].className = dots5[i].className.replace(" active4", "");
  }
//  console.log("n "+n);
//  console.log("slideIndex5 "+slideIndex5);
  if(slides5.length!=0){
  slides5[slideIndex5-1].style.display = "block"; 
  if(slideIndex5>=1 &&  slideIndex5<=3)
  dots5[slideIndex5-1].className += " active4";
  }

}