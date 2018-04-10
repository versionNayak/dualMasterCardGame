$(document).ready(function() {
	sessionStorage.removeItem("SELECTED_CLIENT_ID");
	sessionStorage.removeItem("PAGE_MODE");

	//$("#header").load("../Common/partials/myclient_header-finexa.html");
	//$("#sidebar-wrapper").load("../Common/partials/myclient_Sidebar-clientinfo.html");

	$("#header").load("../Common/partials/myclient_header_finexa.html");	
	$("#sidebar-wrapper").load("../Common/partials/myclient_sidebar_clientinfo.html");	
	$("#wrapper").load("../Common/partials/myclient_wrapper.html");
	//$("#finexa-footer").load("../Common/partials/footer-finexa.html");
	$("#finexa-footer").load("../Common/partials/footer_finexa.html");	
});