
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
    	if (!$("#menu li a").is($this) || $this.hasClass("loan")) {
    		$("#menu ul:visible").slideUp("normal");
    	}
    	//else alert('Çlicked on a new menu on LHS or sub-menu of current menu');
    		
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
      
    $('.has-submenu ul li a').on('click', function(){
    	$('.editicon').show();
		$('.deleteicon').show();
		$('.editicon').addClass('btn_Disabled');
		$('.mandatory').hide();
		$("#mandatory-field-msg").hide();				     	
    });

    $('.activegoal').on('click', function(){
    	$('.addicon').show();
    	$('.editicon').show();
		$('.deleteicon').show();
		$('.editicon').addClass('btn_Disabled');
    });

    $('.activeloans').on('click', function(){
    	$('.editicon').show();
		$('.deleteicon').show();
		$('.addicon').show();
		$('.editicon').addClass('btn_Disabled');
    });   

    $('.ciriskprofile').on('click', function(){
    	$('.editicon').show();
		$('.deleteicon').show();
		$('.addicon').show();
		$('.editicon').addClass('btn_Disabled');
    });   
    
}

$(document).ready(function () {
	console.log("Entering document.ready  ");
    "use strict";
    initMenu();	
		
    $(".personalp").click(function(){
    	$(".pi,.fi,.cd,.le,.fai,.he,.gpr,.mfpms,.eqt,.fixedi,.retirement,.smallsvng,.altinvest,.cash,.lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass('activeitem');
    	$(".fi_arrow,.cd_arrow,.le_arrow,.pi_arrow,.he_arrow,.gpr_arrow,.fai_arrow,.nonlifeins_arrow,.lifeins_arrow,.mfpms_arrow,.eqt_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.lumpflow_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
    	$(".activegoal").removeClass('nosubmenu');
		$(".cisummary").removeClass('nosubmenu');
		$(".activeloans").removeClass('nosubmenu');
		$(".ciriskprofile").removeClass('nosubmenu');
	});

	$(".incomeex").click( function(){
		$(".pi,.fi,.cd,.le,.fai,.he,.gpr,.mfpms,.eqt,.fixedi,.retirement,.smallsvng,.altinvest,.cash,.lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass('activeitem');
		$(".fi_arrow,.cd_arrow,.le_arrow,.pi_arrow,.he_arrow,.gpr_arrow,.fai_arrow,.nonlifeins_arrow,.lifeins_arrow,.mfpms_arrow,.eqt_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.lumpflow_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide(); 
		$(".activegoal").removeClass('nosubmenu');
		$(".cisummary").removeClass('nosubmenu');
		$(".activeloans").removeClass('nosubmenu');
		$(".ciriskprofile").removeClass('nosubmenu');
	});
				
	$(".activeloans").click(function(){
		$(".activeloans").toggleClass('nosubmenu');
		$(".ciriskprofile").removeClass('nosubmenu');
		$(".cisummary").removeClass('nosubmenu');
		$(".activegoal").removeClass('nosubmenu');
		$(".has-submenu").removeClass('expanded');
		$(".pi,.fi,.cd,.le,.fai,.he,.gpr,.mfpms,.eqt,.fixedi,.retirement,.smallsvng,.altinvest,.cash,.lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass('activeitem');
		$(".fi_arrow,.cd_arrow,.le_arrow,.pi_arrow,.he_arrow,.gpr_arrow,.fai_arrow,.nonlifeins_arrow,.lifeins_arrow,.mfpms_arrow,.eqt_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.lumpflow_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
	});
								
	$(".activeportfolio").click( function(){
		$(".pi,.fi,.cd,.le,.fai,.he,.gpr,.mfpms,.eqt,.fixedi,.retirement,.smallsvng,.altinvest,.cash,.lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass('activeitem');
		$(".fi_arrow,.cd_arrow,.le_arrow,.pi_arrow,.he_arrow,.gpr_arrow,.fai_arrow,.nonlifeins_arrow,.lifeins_arrow,.mfpms_arrow,.eqt_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.lumpflow_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
		$(".activegoal").removeClass('nosubmenu');
		$(".cisummary").removeClass('nosubmenu');
		$(".activeloans").removeClass('nosubmenu');
		$(".ciriskprofile").removeClass('nosubmenu');
	});
				
	$(".activeinsurance").click( function(){
		$(".pi,.fi,.cd,.le,.fai,.he,.gpr,.mfpms,.eqt,.fixedi,.retirement,.smallsvng,.altinvest,.cash,.lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass('activeitem');
		$(".fi_arrow,.cd_arrow,.le_arrow,.pi_arrow,.he_arrow,.gpr_arrow,.fai_arrow,.nonlifeins_arrow,.lifeins_arrow,.mfpms_arrow,.eqt_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.lumpflow_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
		$(".activegoal").removeClass('nosubmenu');
		$(".cisummary").removeClass('nosubmenu');
		$(".activeloans").removeClass('nosubmenu');
		$(".ciriskprofile").removeClass('nosubmenu');
	});
				
	$(".activegoal").click( function(){
		$(".cisummary").removeClass('nosubmenu');
		$(".ciriskprofile").removeClass('nosubmenu');
		$(".activeloans").removeClass('nosubmenu');
		$(".activeinsurance").removeClass('nosubmenu');
		//$(".has-submenu").removeClass('expanded');
				
		$(".pi,.fi,.cd,.le,.fai,.he,.gpr,.mfpms,.eqt,.fixedi,.retirement,.smallsvng,.altinvest,.cash,.lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass('activeitem');
		$(".fi_arrow,.cd_arrow,.le_arrow,.pi_arrow,.he_arrow,.gpr_arrow,.fai_arrow,.nonlifeins_arrow,.lifeins_arrow,.mfpms_arrow,.eqt_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.lumpflow_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
	});
				
	$(".cisummary").click( function(){
		$(".cisummary").toggleClass('nosubmenu');
		$(".activegoal").removeClass('nosubmenu');
		$(".activeloans").removeClass('nosubmenu');
		$(".ciriskprofile").removeClass('nosubmenu');
		$(".has-submenu").removeClass('expanded');
		$(".pi,.fi,.cd,.le,.fai,.he,.gpr,.mfpms,.eqt,.fixedi,.retirement,.smallsvng,.altinvest,.cash,.lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass('activeitem');
		$(".fi_arrow,.cd_arrow,.le_arrow,.pi_arrow,.he_arrow,.gpr_arrow,.fai_arrow,.nonlifeins_arrow,.lifeins_arrow,.mfpms_arrow,.eqt_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.lumpflow_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
	});
				
	$(".cipersonal .pi").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	})
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".pi_arrow").show();
		$(".fi_arrow,.cd_arrow,.le_arrow").hide();
		$(".cipersonal .fi,.cipersonal .cd,.cipersonal .le").removeClass("activeitem");	
	});
				
	$(".cipersonal .fi").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	})
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".fi_arrow").show();
		$(".cd_arrow,.le_arrow,.pi_arrow").hide();
		$(".cipersonal .pi,.cipersonal .cd,.cipersonal .le").removeClass("activeitem");	
	});
					
	$(".cipersonal .cd").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	})
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".cd_arrow").show();
		$(".fi_arrow,.le_arrow,.pi_arrow").hide();
		$(".cipersonal .pi,.cipersonal .fi,.cipersonal .le").removeClass("activeitem");	
	});
					
	$(".cipersonal .le").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	})
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".le_arrow").show();
		$(".fi_arrow,.cd_arrow,.pi_arrow").hide();
		$(".cipersonal .pi,.cipersonal .fi,.cipersonal .cd").removeClass("activeitem");	
	});
					
	$(".cincome .fai").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".fai_arrow").show();
		$(".he_arrow,.gpr_arrow").hide();
		$(".cincome .he,.cincome .gpr").removeClass("activeitem");
	});
				
	$(".cincome .he").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".he_arrow").show();
		$(".fai_arrow,.gpr_arrow").hide();
		$(".cincome .fai,.cincome .gpr").removeClass("activeitem");
	});
				
	$(".cincome .gpr").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".gpr_arrow").show();
		$(".fai_arrow,.he_arrow").hide();
		$(".cincome .fai,.cincome .he").removeClass("activeitem");
	});
				
	$(".insurance .lifeins").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".lifeins_arrow").show();
		$(".nonlifeins_arrow").hide();
		$(".insurance .nonlifeins").removeClass("activeitem");
	});
				
	$(".insurance .nonlifeins").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".nonlifeins_arrow").show();
		$(".lifeins_arrow").hide();
		$(".insurance .lifeins").removeClass("activeitem");
	});
				
	$(".portfolio .mfpms").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".mfpms_arrow").show();
		$(".eqt_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.lumpflow_arrow,.nonlifeins_arrow,.lifeins_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
		$(".portfolio .eqt,.portfolio .fixedi,.portfolio .retirement,.portfolio.smallsvng,.portfolio .altinvest,.portfolio .cash,.portfolio .lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass("activeitem");
	});
				
	$(".portfolio .eqt").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".eqt_arrow").show();
		$(".mfpms_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.lumpflow_arrow,.nonlifeins_arrow,.lifeins_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
		$(".portfolio .mfpms,.portfolio .fixedi,.portfolio .retirement,.portfolio.smallsvng,.portfolio .altinvest,.portfolio .cash,.portfolio .lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass("activeitem");
	});
				
	$(".portfolio .fixedi").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".fixedi_arrow").show();
		$(".mfpms_arrow,.eqt_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.lumpflow_arrow,.nonlifeins_arrow,.lifeins_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
		$(".portfolio .mfpms,.portfolio .eqt,.portfolio .retirement,.portfolio.smallsvng,.portfolio .altinvest,.portfolio .cash,.portfolio .lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass("activeitem");
	});
				
	$(".portfolio .retirement").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		// $(".dashboardheading").html("Retirement Oriented Schemes");
		//$("#page-content-wrapper").css("height","739px");
		// $("#dashbord").empty();		 
		//	$("#dashbord").css("height","500%");
		//$("#dashbord").load("ci/viewCIDashboard.html");
					
		$(this).toggleClass('activeitem');
		$(".retirement_arrow").show();
		$(".mfpms_arrow,.eqt_arrow,.fixedi_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.lumpflow_arrow,.nonlifeins_arrow,.lifeins_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
		$(".portfolio .mfpms,.portfolio .eqt,.portfolio .fixedi,.portfolio.smallsvng,.portfolio .altinvest,.portfolio .cash,.portfolio .lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass("activeitem");
	});
				
	$(".portfolio .smallsvng").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".smallsvng_arrow").show();
		$(".mfpms_arrow,.eqt_arrow,.fixedi_arrow,.retirement_arrow,.altinvest_arrow,.cash_arrow,.lumpflow_arrow,.nonlifeins_arrow,.lifeins_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
		$(".portfolio .mfpms,.portfolio .eqt,.portfolio .fixedi,.portfolio .retirement,.portfolio .altinvest,.portfolio .cash,.portfolio .lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass("activeitem");
	});
				
	$(".portfolio .altinvest").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".altinvest_arrow").show();
		$(".mfpms_arrow,.eqt_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.cash_arrow,.lumpflow_arrow,.nonlifeins_arrow,.lifeins_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
		$(".portfolio .mfpms,.portfolio .eqt,.portfolio .fixedi,.portfolio .retirement,.portfolio .smallsvng,.portfolio .cash,.portfolio .lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass("activeitem");
	});
				
	$(".portfolio .cash").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".cash_arrow").show();
		$(".mfpms_arrow,.eqt_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.lumpflow_arrow,.nonlifeins_arrow,.lifeins_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
		$(".portfolio .mfpms,.portfolio .eqt,.portfolio .fixedi,.portfolio .retirement,.portfolio .smallsvng,.portfolio .altinvest,.portfolio .lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass("activeitem");
	});
				
	$(".portfolio .lumpflow").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".lumpflow_arrow").show();
		$(".mfpms_arrow,.eqt_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.nonlifeins_arrow,.lifeins_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
		$(".portfolio .mfpms,.portfolio .eqt,.portfolio .fixedi,.portfolio .retirement,.portfolio .smallsvng,.portfolio .altinvest,.portfolio .cash,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass("activeitem");
	});
				
	/*$(".existingclient").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$("#idClient").load("ci/viewClient.html");
		$(".addclientdata").removeClass("activeitem");
	});
				
	$(".addclientdata").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$("#idClient").load("ci/addClient.html");
		$(".existingclient).removeClass("activeitem");
	});
	*/

	$(".goal .goaladd").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".mfpms_arrow,.eqt_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.nonlifeins_arrow,.lifeins_arrow,.goalinput_arrow,.goalpriority_arrow").hide();
		$(".portfolio .mfpms,.portfolio .eqt,.portfolio .fixedi,.portfolio .retirement,.portfolio .smallsvng,.portfolio .altinvest,.portfolio .cash,.lifeins,.nonlifeins,.goalpriority").removeClass("activeitem");
		$(".goaladd_arrow").show();
		$(".goalpriority_arrow").hide();
		$(".goaladd .goalpriority").removeClass("activeitem");		
	});
				
	$(".goal .goalpriority").hover( function(){
		$(this).addClass('hoverweight');
	},
	function() {
		$(this).removeClass('hoverweight');
	}) 
	.click(function() {
		$(this).toggleClass('activeitem');
		$(".mfpms_arrow,.eqt_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.nonlifeins_arrow,.lifeins_arrow,.goalinput_arrow,.goaladd_arrow").hide();
		$(".portfolio .mfpms,.portfolio .eqt,.portfolio .fixedi,.portfolio .retirement,.portfolio .smallsvng,.portfolio .altinvest,.portfolio .cash,.lifeins,.nonlifeins,.goaladd").removeClass("activeitem");
		$(".goalpriority_arrow").show();
		$(".goaladd_arrow").hide();
		$(".goaladd .goalpriority").removeClass("activeitem");
	});				

	$(".ciriskprofile").click(function(){
		$(".ciriskprofile").toggleClass('nosubmenu');
		$(".cisummary").removeClass('nosubmenu');
		$(".activegoal").removeClass('nosubmenu');
		$(".has-submenu").removeClass('expanded');
		$(".pi,.fi,.cd,.le,.fai,.he,.gpr,.mfpms,.eqt,.fixedi,.retirement,.smallsvng,.altinvest,.cash,.lumpflow,.lifeins,.nonlifeins,.goaladd,.goalpriority").removeClass('activeitem');
		$(".fi_arrow,.cd_arrow,.le_arrow,.pi_arrow,.he_arrow,.gpr_arrow,.fai_arrow,.nonlifeins_arrow,.lifeins_arrow,.mfpms_arrow,.eqt_arrow,.fixedi_arrow,.retirement_arrow,.smallsvng_arrow,.altinvest_arrow,.cash_arrow,.lumpflow_arrow,.goalinput_arrow,.goaladd_arrow,.goalpriority_arrow").hide();
	});

/*	$(".existingclientlhs").click(function(){
		$(".existingclientlhs").addClass('nosubmenu');
		$("#idClient").load("clientInfo/ci/viewClient.html");
		$("#wrapper").css("height","auto");
	 	$(".form-section-container").removeClass("height1257px");
		$(".addclientdata").removeClass('nosubmenu');
		// Resetting selected client when user clicks on Existing Client
		$("#idSelectedClientName").empty();		
		sessionStorage.removeItem("SELECTED_CLIENT_ID");
	});
*/
	$(".existingclientlhs").click(function(){
		$(".existingclientlhs").addClass('nosubmenu');
		$("#wrapper").css("height","auto");
	 	$(".form-section-container").removeClass("height1257px");
		$(".addclientdata").removeClass('nosubmenu');
		$("#dashbord").empty();
		$("#sidebar-wrapper").load("../Common/partials/myclient_sidebar_clientinfo.html");
		$(".dashboardheading").html("Client List");
		$("#dashbord").load("clientInfo/viewCIDashboard.html");		
		// Resetting selected client when user clicks on Existing Client
		$("#idSelectedClientName").empty();		
		sessionStorage.removeItem("SELECTED_CLIENT_ID");
		$(".top-nav-items").hide();
		$('.nav-client-info a').addClass('white');
		$('.nav-resources a').removeClass('white');
		$('.nav-reports a').removeClass('white');
		$('.nav-review a').removeClass('white');
		$('.nav-invest a').removeClass('white');
		$('.nav-plan a').removeClass('white');
		$("#clientimg").removeClass('activeclient');
		$("#planimg").removeClass('activeplan');
		$("#Investimg").removeClass('activeinvest');
		$("#Reviewimg").removeClass('activereview');
		$("#Reportsimg").removeClass('activereports');
		$("#Resourcesimg").removeClass('activeresource');
		
	});

	$(".addclientdata").click(function(){	
		$("#wrapper").css("height","1433px");
		$("#page-content-wrapper").css("height","auto");
		$(".form-section-container").addClass("height1257px");
		$(".addclientdata").addClass('nosubmenu');
		$("#idClient").load("clientInfo/ci/addClient.html");					
		$(".existingclientlhs").removeClass('nosubmenu');
		// Not required- Done in addClient.js Resetting selected client when user clicks on Add Client
		// $("#idSelectedClientName").empty();		
		sessionStorage.removeItem("SELECTED_CLIENT_ID");
		sessionStorage.setItem("PAGE_MODE", "ADD");					
	});
				
	$('.has-submenu ul li a').click(function(){
		$('.addicon').show();
	});

/*	$('.activegoal').click(function(){
		$('.addicon').show();
	});
*/
});



