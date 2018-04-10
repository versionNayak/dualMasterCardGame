var loggedUser = JSON.parse(sessionStorage.getItem("LOGGED_IN_USER"));
//alert("loggedUser: " + loggedUser);
console.log("logged user" + loggedUser);

if (loggedUser === null){
	window.location = "../index.html";
}


/*function logout(){
	//alert(sessionStorage.getItem("LOGGED_IN_USER"));
	sessionStorage.removeItem("LOGGED_IN_USER");
	window.location = "../index.html";
}*/

function logout() {
	serviceurl = "logout?advisorUserId="+loggedUser.id;
	getClientData("GET", "", serviceurl, onSuccess);
	function onSuccess(data) {
		//alert("inside onSuccess");
		sessionStorage.clear();
		sessionStorage.clear();
		window.location = "../index.html";
	}
}

