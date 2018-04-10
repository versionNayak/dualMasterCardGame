
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
					
               	
					});