
$("#menu-toggle").on("click", function (e) {
    "use strict";
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$("#menu-toggle-2").on("click", function (e) {
    "use strict";
    e.preventDefault();
    $("#wrapper").toggleClass("toggled-2");
    $("#sidebar-toggle-button-wrapper").toggleClass("toggled-2");
    $("#sidebar-toggle-top-menu-left-wrapper").toggleClass("toggled-2");
    $("#menu li").removeClass("expanded");
    $("#menu ul").hide();
});
function initMenu() {
    "use strict";
    $("#menu ul").hide();
    $("#menu ul").children(".current").parent().show();
    $("#menu li a").on("click", function () {
        var $this = $(this);
        var checkElement = $this.next();
        var listItem = $this.closest("li");
        if ((checkElement.is("ul")) && (checkElement.is(":visible"))) {
            checkElement.slideUp("normal");
            listItem.removeClass("expanded");
            return false;
        }
        if ((checkElement.is("ul")) && (!checkElement.is(":visible"))) {
            $("#menu ul:visible").slideUp("normal");
            $("#menu li").removeClass("expanded");
            checkElement.slideDown("normal");
            listItem.addClass("expanded");
            return false;
        }
    });
}
$(document).ready(function () {
    "use strict";
    initMenu();	
	
	
				$(".addactive").click( function(){
					$(".budgetdash,.budgetinput,.budgetplanning,.financialInput,.financialdash,.financialplanning,.portfoliodash,.portfolioinput,.portfolioplanning,.inputplanning,.goaldash,.goalplanning").removeClass('activeitem');
						  $(".budgetdash_arrow").hide();
						   $(".budgetinput_arrow").hide();
						    $(".budgetplanning_arrow").hide();
                             $(".financialdash_arrow").hide();
							 $(".financialInput_arrow").hide();
							  $(".financialplanning_arrow").hide();
							   $(".portfoliodash_arrow").hide();
							    $(".portfolioinput_arrow").hide();
								 $(".portfolioplanning_arrow").hide();
								  $(".goalinput_arrow").hide();
								  $(".goaldash_arrow").hide();
								 $(".goalplanning_arrow").hide();
				});
					$(".activeincome").click( function(){
			
					$(".budgetdash,.budgetinput,.budgetplanning,.financialInput,.financialdash,.financialplanning,.portfoliodash,.portfolioinput,.portfolioplanning,.inputplanning,.goaldash,.goalplanning").removeClass('activeitem');
						  $(".budgetdash_arrow").hide();
						   $(".budgetinput_arrow").hide();
						    $(".budgetplanning_arrow").hide();
                             $(".financialdash_arrow").hide();
							 $(".financialInput_arrow").hide();
							  $(".financialplanning_arrow").hide();
							   $(".portfoliodash_arrow").hide();
							    $(".portfolioinput_arrow").hide();
								 $(".portfolioplanning_arrow").hide();
								  $(".goalinput_arrow").hide();
								  $(".goaldash_arrow").hide();
								 $(".goalplanning_arrow").hide();
				});
				$(".activeloans").click( function(){
					$(".budgetdash,.budgetinput,.budgetplanning,.financialInput,.financialdash,.financialplanning,.portfoliodash,.portfolioinput,.portfolioplanning,.inputplanning,.goaldash,.goalplanning").removeClass('activeitem');
						  $(".budgetdash_arrow").hide();
						   $(".budgetinput_arrow").hide();
						    $(".budgetplanning_arrow").hide();
                             $(".financialdash_arrow").hide();
							 $(".financialInput_arrow").hide();
							  $(".financialplanning_arrow").hide();
							   $(".portfoliodash_arrow").hide();
							    $(".portfolioinput_arrow").hide();
								 $(".portfolioplanning_arrow").hide();
								  $(".goalinput_arrow").hide();
								  $(".goaldash_arrow").hide();
								 $(".goalplanning_arrow").hide();
				});
				$(".activeportfolio").click( function(){
					$(".budgetdash,.budgetinput,.budgetplanning,.financialInput,.financialdash,.financialplanning,.portfoliodash,.portfolioinput,.portfolioplanning,.inputplanning,.goaldash,.goalplanning").removeClass('activeitem');
						  $(".budgetdash_arrow").hide();
						   $(".budgetinput_arrow").hide();
						    $(".budgetplanning_arrow").hide();
                             $(".financialdash_arrow").hide();
							 $(".financialInput_arrow").hide();
							  $(".financialplanning_arrow").hide();
							   $(".portfoliodash_arrow").hide();
							    $(".portfolioinput_arrow").hide();
								 $(".portfolioplanning_arrow").hide();
								  $(".goalinput_arrow").hide();
								  $(".goaldash_arrow").hide();
								 $(".goalplanning_arrow").hide();
				});
				
				
				
				
				
				
				
				$(".nestedpersonalp .budgetdash").hover( function(){
					$(this).addClass('hoverweight');
				},
				function() {
					$(this).removeClass('hoverweight');
				})
				.click(function() {
					$(this).toggleClass('activeitem');
					$(".budgetdash_arrow").show();
					$(".budgetinput_arrow,.budgetplanning_arrow").hide();
					$(".nestedpersonalp .budgetinput, .nestedpersonalp .budgetplanning").removeClass("activeitem");	
					});
				$(".nestedpersonalp .budgetinput").hover( function(){
					$(this).addClass('hoverweight');
				},
				function() {
					$(this).removeClass('hoverweight');
				})
				.click(function() {
					$(this).toggleClass('activeitem');
					$(".budgetinput_arrow").show();
					$(".budgetdash_arrow,.budgetplanning_arrow").hide();
					$(".nestedpersonalp .budgetplanning,.nestedpersonalp .budgetdash").removeClass("activeitem");
				});
				$(".nestedpersonalp .budgetplanning").hover( function(){
					$(this).addClass('hoverweight');
				},
				function() {
					$(this).removeClass('hoverweight');
				})
				.click(function() {	
				
							
					$(this).toggleClass('activeitem');
				$("#wrapperdata").show();
		
				
									
										
					
					
					
					
					
					
					$(".budgetplanning_arrow").show();
					$(".budgetdash_arrow, .budgetinput_arrow").hide();
					$(".nestedpersonalp .budgetinput, .nestedpersonalp .budgetdash").removeClass("activeitem");
				});
				$(".nestedincome .goaldash").hover( function(){
					$(this).addClass('hoverweight');
				},
				function() {
					$(this).removeClass('hoverweight');
				})
				.click(function() {	
					$(this).toggleClass('activeitem');
						$(".goaldash_arrow").show();
					$(".goalinput_arrow,.goalplanning_arrow").hide();
					$(".nestedincome .inputplanning,.nestedincome .goalplanning").removeClass("activeitem");
				});
				$(".nestedincome .inputplanning").hover( function(){
					$(this).addClass('hoverweight');
				},
				function() {
					$(this).removeClass('hoverweight');
				})
				.click(function() {	
					$(this).toggleClass('activeitem');
						$(".goalinput_arrow").show();
					$(".goaldash_arrow,.goalplanning_arrow").hide();
					$(".nestedincome .goalplanning,.nestedincome .goaldash").removeClass("activeitem");
				});
				$(".nestedincome .goalplanning").hover( function(){
					$(this).addClass('hoverweight');
				},
				function() {
					$(this).removeClass('hoverweight');
				})
				.click(function() {	
					$(this).toggleClass('activeitem');
				$("#goalsection").show();
			    $("#budgetsection").hide();
						$(".goalplanning_arrow").show();
					$(".goaldash_arrow,.goalinput_arrow").hide();
					$(".nestedincome .inputplanning,.nestedincome .goaldash").removeClass("activeitem");
				});
				$(".nestedportfolio .portfoliodash").hover( function(){
					$(this).addClass('hoverweight');
				},
				function() {
					$(this).removeClass('hoverweight');
				})
				.click(function() {	
					$(this).toggleClass('activeitem');
				    $(".portfoliodash_arrow").show();
					$(".portfolioplanning_arrow,.portfolioinput_arrow").hide();
					$(".nestedportfolio .portfolioinput,.nestedportfolio .portfolioplanning").removeClass("activeitem");
				});
				$(".nestedportfolio .portfolioinput").hover( function(){
					$(this).addClass('hoverweight');
				},
				function() {
					$(this).removeClass('hoverweight');
				})
				.click(function() {	
					$(this).toggleClass('activeitem');
					   $(".portfolioinput_arrow").show();
					$(".portfoliodash_arrow,.portfolioplanning_arrow").hide();
					$(".nestedportfolio .portfoliodash,.nestedportfolio .portfolioplanning").removeClass("activeitem");
				});
				$(".nestedportfolio .portfolioplanning").hover( function(){
					$(this).addClass('hoverweight');
				},
				function() {
					$(this).removeClass('hoverweight');
				})
				.click(function() {	
					$(this).toggleClass('activeitem');
					   $(".portfolioplanning_arrow").show();
					$(".portfoliodash_arrow,.portfolioinput_arrow").hide();
					$(".nestedportfolio .portfoliodash,.nestedportfolio .portfolioinput").removeClass("activeitem");
				});
				$(".nestedfinancial .financialdash").hover( function(){
					$(this).addClass('hoverweight');
				},
				function() {
					$(this).removeClass('hoverweight');
				})
				.click(function() {	
					$(this).toggleClass('activeitem');
					  $(".financialdash_arrow").show();
					$(".financialplanning_arrow,.financialInput_arrow").hide();
				$(".nestedfinancial .financialInput,.nestedfinancial .financialplanning").removeClass("activeitem");
				});
				$(".nestedfinancial .financialInput").hover( function(){
					$(this).addClass('hoverweight');
				},
				function() {
					$(this).removeClass('hoverweight');
				})
				.click(function() {	
					$(this).toggleClass('activeitem');
					  $(".financialInput_arrow").show();
					$(".financialdash_arrow,.financialplanning_arrow").hide();
		$(".nestedfinancial .financialdash,.nestedfinancial .financialplanning").removeClass("activeitem");
				});
	$(".nestedfinancial .financialplanning").hover( function(){
					$(this).addClass('hoverweight');
				},
				function() {
					$(this).removeClass('hoverweight');
				})
				.click(function() {	
					$(this).toggleClass('activeitem');
					  $(".financialplanning_arrow").show();
					$(".financialdash_arrow,.financialInput_arrow").hide();
		$(".nestedfinancial .financialInput,.nestedfinancial .financialdash").removeClass("activeitem");
				});
});
$(".nestedincome .goalplanning").click(function(){
		 $(".dashboardheading").html("Goal Planning Report");
		 		 $("#wrapper").css("height","auto");
		 $("#dashbord").empty();
	 $("#dashbord").css("height","483px");
		$("#dashbord").load("plan/gp/viewGPDashboard.html");
		
	});
	$(".nestedpersonalp .budgetplanning").click(function(){
       	 $(".dashboardheading").html("Budget Planning Report"); 
		  $("#wrapper").css("height","auto");
		 $("#dashbord").empty();
	$("#dashbord").css("height","483px");
			$("#dashbord").load("plan/bm/viewBudgetDashboard.html");
				

	});
