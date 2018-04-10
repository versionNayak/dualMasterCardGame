$(document).ready(function(){
	$(".existingclient").show();
		
	$('input:radio[name="tgl"]').change(
	    function(){
	        if ($(this).val() == '0') {
				window.location='../MyBusiness/mybusinessDashboard.html';
				// Resetting selected client when user clicks on Existing Client			
				$("#idSelectedClientName").empty();		
				sessionStorage.removeItem("SELECTED_CLIENT_ID");
	
				//alert("if");
			}
	        else {
			alert("else");
				//window.location='../MyClient/myclientDashboard.html';
		}
	});
	
	$("#clientimg").addClass('activeclient');
	
	$('.nav-client-info a').addClass('white');
	$("#hum").click( function(){
		$("#mySidenav").toggle();
	});
	$(".help").click(function(){
		$(this).addClass("onclickbg");
		$(".search").removeClass("onclickbg");
		$(".logout").removeClass("onclickbg");		
	});
	$(".search").click(function(){
		$(this).addClass("onclickbg");
		$(".help").removeClass("onclickbg");
		$(".logout").removeClass("onclickbg");		
	});
	$(".logout").click(function(){
		$(this).addClass("onclickbg");
		$(".search").removeClass("onclickbg");
		$(".help").removeClass("onclickbg");		
	});

	// Actions when top navigation bar menu items are clicked
	// Client Info Icon
	$("#clientimg").hover( function(){
		$(this).addClass('hoverclient');
	},
	function() {
		$(this).removeClass('hoverclient');
	})
	.click(function() {
		$(this).toggleClass('activeclient');
		$('.nav-client-info a').addClass('white');
		$('.nav-resources a').removeClass('white');
		$('.nav-reports a').removeClass('white');
		$('.nav-review a').removeClass('white');
		$('.nav-invest a').removeClass('white');
		$('.nav-plan a').removeClass('white');
		$("#planimg").removeClass('activeplan');
		$("#Investimg").removeClass('activeinvest');
		$("#Reviewimg").removeClass('activereview');
		$("#Reportsimg").removeClass('activereports');
		$("#Resourcesimg").removeClass('activeresource');
		// Resetting selected client when user clicks on Client Info icon on top navigation bar
		//$("#idSelectedClientName").empty();		
		//sessionStorage.removeItem("SELECTED_CLIENT_ID");
		//$(".top-nav-items").hide();
		$("#dashbord").empty();
		$("#sidebar-wrapper").load("../Common/partials/myclient_sidebar_clientinfo.html");
		$("#dashbord").load("clientInfo/viewCIDashboard.html");
	});
	
	// Plan Icon
	$("#planimg").hover( function(){
		$(this).addClass('');
	},
	function() {
		$(this).removeClass('');
	})
	.click(function() {
		$(this).toggleClass('activeplan');
		$('.nav-plan a').addClass('white');
		$('.nav-invest a').removeClass('white');
		$('.nav-reports a').removeClass('white');
		$('.nav-review a').removeClass('white');
		$('.nav-resources a').removeClass('white');
		$('.nav-client-info a').removeClass('white');
		$("#Investimg").removeClass('activeinvest');
		$("#Reviewimg").removeClass('activereview');
		$("#Reportsimg").removeClass('activereports');
		$("#Resourcesimg").removeClass('activeresource');
		$("#clientimg").removeClass('activeclient');
		$("#dashbord").empty();
		$("#sidebar-wrapper").load("../Common/partials/myclient_sidebar_plan.html");
		// load Budget Management by default onclick on Plan icon
		$(".dashboardheading").html("Budget Management");
		$("#dashbord").load("plan/bm/viewBudgetDashboard.html");	
	});

	// Invest Icon	
	$("#Investimg").hover( function(){
		$(this).addClass('');
	},
	function() {
		$(this).removeClass('');
	})
	.click(function() {
		$(this).toggleClass('activeinvest');
		$('.nav-invest a').addClass('white');
		$('.nav-reports a').removeClass('white');
		$('.nav-review a').removeClass('white');
		$('.nav-resources a').removeClass('white');
		$('.nav-client-info a').removeClass('white');
		$('.nav-plan a').removeClass('white');
		$("#planimg").removeClass('activeplan');
		$("#Reviewimg").removeClass('activereview');
		$("#Reportsimg").removeClass('activereports');
		$("#Resourcesimg").removeClass('activeresource');
		$("#clientimg").removeClass('activeclient');
	});
	
	// Review Icon	
	$("#Reviewimg").hover( function(){
		$(this).addClass('');
	},
	function() {
		$(this).removeClass('');
	})
	.click(function() {
		$(this).toggleClass('activereview');
		$('.nav-review a').addClass('white');
		$('.nav-reports a').removeClass('white');
		$('.nav-resources a').removeClass('white');
		$('.nav-client-info a').removeClass('white');
		$('.nav-invest a').removeClass('white');
		$('.nav-plan a').removeClass('white');
		$("#planimg").removeClass('activeplan');
		$("#Investimg").removeClass('activeinvest');
		$("#Reportsimg").removeClass('activereports');
		$("#Resourcesimg").removeClass('activeresource');
		$("#clientimg").removeClass('activeclient');
	});
	
	// Reports Icon	
	$("#Reportsimg").hover( function(){
		$(this).addClass('hoverreports');
	},
	function() {
		$(this).removeClass('hoverreports');
	})
	.click(function() {
		$(this).toggleClass('activereports');
		$('.nav-reports a').addClass('white');
		$('.nav-resources a').removeClass('white');
		$('.nav-client-info a').removeClass('white');
		$('.nav-review a').removeClass('white');
		$('.nav-invest a').removeClass('white');
		$('.nav-plan a').removeClass('white');
		$("#planimg").removeClass('activeplan');
		$("#Investimg").removeClass('activeinvest');
		$("#Reviewimg").removeClass('activereview');
		$("#Resourcesimg").removeClass('activeresource');
		$("#clientimg").removeClass('activeclient');
		$("#dashbord").empty();
		$("#sidebar-wrapper").load("../Common/partials/myclient_sidebar_reports.html");
		//$("#idreports").load("reports/latestReports/abcreports.html");
		$(".dashboardheading").html("Reports");
		$("#dashbord").load("reports/latestReports.html");	
	});
	
	// Resource Icon	
	$("#Resourcesimg").hover( function(){
		$(this).addClass('');
	},
	function() {
		$(this).removeClass('');
	})
	.click(function() {
		$(this).toggleClass('activeresource');
		$('.nav-resources a').addClass('white');
		$('.nav-client-info a').removeClass('white');
		$('.nav-reports a').removeClass('white');
		$('.nav-review a').removeClass('white');
		$('.nav-invest a').removeClass('white');
		$('.nav-plan a').removeClass('white');
		$("#planimg").removeClass('activeplan');
		$("#Investimg").removeClass('activeinvest');
		$("#Reviewimg").removeClass('activereview');
		$("#Reportsimg").removeClass('activereports');
		$("#clientimg").removeClass('activeclient');
		$("#dashbord").empty();
		$("#sidebar-wrapper").load("../Common/partials/myclient_sidebar_resources.html");
		$(".dashboardheading").html("Resources");
		$("#dashbord").load("resources/productCalculator.html");	
	});

	$(".sidebar-icon-profile").hover( function(){
		$(this).addClass('hovericon_profile');
	},
	function() {
		$(this).removeClass('hovericon_profile');
	})
	.click(function() {
		$(this).toggleClass('activeicon_profile');
		$("#planimg").removeClass('activeplan');
		$("#Investimg").removeClass('activeinvest');
		$("#Reviewimg").removeClass('activereview');
		$("#Reportsimg").removeClass('activereports');
		$("#Resourcesimg").removeClass('activeresource');
	});
	
/*	$("#clientimg").click(function(){
		$("#dashbord").empty();
		$("#sidebar-wrapper").load("../Common/partials/myclient_sidebar_clientinfo.html");
		$(".dashboardheading").html("Client List");
		$("#dashbord").load("clientInfo/viewCIDashboard.html");
	});
		
	$("#planimg").click(function(){
		$("#dashbord").empty();
		$("#sidebar-wrapper").load("../Common/partials/myclient_sidebar_plan.html");
		// load Budget Management by default onclick on Plan icon
		$(".dashboardheading").html("Budget Management");
		$("#dashbord").load("plan/bm/viewBudgetDashboard.html");	
	});
	
	$("#Reportsimg").click(function(){
		$("#dashbord").empty();
		$("#sidebar-wrapper").load("../Common/partials/myclient_sidebar_reports.html");
		//$("#idreports").load("reports/latestReports/abcreports.html");
		$(".dashboardheading").html("Reports");
		$("#dashbord").load("reports/latestReports.html");	
	});
	
	$("#Resourcesimg").click(function(){
		$("#dashbord").empty();
		$("#sidebar-wrapper").load("../Common/partials/myclient_sidebar_resources.html");
		$(".dashboardheading").html("Resources");
		$("#dashbord").load("resources/productCalculator.html");	
	});
*/
	
	$(".existingclient").click(function(){
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
});