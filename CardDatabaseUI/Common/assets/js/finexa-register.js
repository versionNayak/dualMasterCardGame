
$(document).ready(function() {
	
	$( "#registerForm" ).on( "submit", function( event ) {
		var data = JSON.stringify( $("#registerForm").serializeArray() ); //  <-----------

		  console.log( data );
		  return false; //don't submit

});