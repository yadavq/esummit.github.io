firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var user = firebase.auth().currentUser;

    if(user != null){
    	var email = user.email;
    	var verify = user.emailVerified;
    	var user_name = user.displayName;
    	if(verify){
	    	document.getElementById("register").style.display="none";
	   	 	document.getElementById("main").style.display="block";
    		document.getElementById("confirm").style.display="none";
	    	document.getElementById("user").innerHTML = "Welcome Bro, "+ user_name;
	    	document.getElementById("status").innerHTML = "Welcome "+ email;
	    	document.getElementById("logout").innerHTML = "LOGOUT";
    	}
    	else{
    		document.getElementById("confirm").style.display="block";
    		document.getElementById("register").style.display="none";
	   	 	document.getElementById("main").style.display="none";
	   	 	document.getElementById("registerpage").style.display="none"

    	}
    	
    }
    
  } 
  else {
    
    document.getElementById("register").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("user").innerHTML = "Welcome to the website";
    document.getElementById("status").innerHTML = "SignIn/Register"
    document.getElementById("logout").innerHTML = "";
   	document.getElementById("confirm").style.display="none";
  }
});

function status(){
	document.getElementById("register").style.display="block";
    document.getElementById("main").style.display="none";
   	document.getElementById("confirm").style.display="none";
}

function createNew(){
	document.getElementById("register").style.display="none";
    document.getElementById("main").style.display="none";
   	document.getElementById("confirm").style.display="none";
   	document.getElementById("registerpage").style.display="block";
}

function login(){

	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error : "+ errorMessage);
});
}

function check(){
	var user = firebase.auth().currentUser;
	var database = firebase.database();
	var collect = database.ref("college");
	collect.on('value', gotData, errData);
	window.user_college;
	function gotData(data){
		var detail = data.val();
		var keys = Object.keys(detail);
		for (var i = 0; i < keys.length; i++) {
			var k = keys[i];
			var email = detail[k].email;
			var college = detail[k].college;
			var phone = detail[k].phone;
			if(user.email === email){
				var user_email = email;
				window.user_college = college;
				var user_phone = phone;
				console.log(user_email,window.user_college,user_phone);
			}
			console.log(window.user_college);
			
		}
		console.log(window.user_college);
		event1_registration();
	}
	function errData(err){
		console.log(err);
	}
}

function event1_registration(){
	var user = firebase.auth().currentUser;
	if (user){
				
				console.log(window.user_college);
				if(window.user_college === "hbtu"){
					var database = firebase.database();
					var ref = database.ref("event1");
					var data = {
						name: user.displayName,
						email: user.email
					}
					ref.push(data);
					window.alert("Event 1 registration Complete, Please see other events too !!");
				
				}
				else{
						console.log("NON HBTU")
				}		
	}
	else{
		window.alert("First Register");
	}
}
function event2_registration(){
	var user = firebase.auth().currentUser;
	if (user){
		var database = firebase.database();
		var ref = database.ref("event2");
		var data = {
			name: user.displayName,
			email: user.email
		}
		ref.push(data);
		window.alert("Event 2 registration Complete, Please see other events too !!");
	}
	else{
		window.alert("First Register");
	}
}

function create(){
	var email = document.getElementById("email_create").value;
	var password = document.getElementById("password_create").value;
	var name = document.getElementById("name").value;
	var college = document.getElementById("college").value;
	var phone = document.getElementById("phone").value;

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error : "+ errorMessage);
	}).then(function verification(){
			var user = firebase.auth().currentUser;

		user.sendEmailVerification().then(function() {
		  // Email sent.
		  window.alert("Verification Sent");
		}).catch(function(error) {
		  // An error happened.
		});

		console.log(college + email);
		var database = firebase.database();
		var ref = database.ref("college");
		var detail = {
			email: user.email,
			college: college,
			phone: phone
		}
		ref.push(detail);

		console.log(name);
		user.updateProfile({
		  displayName: name
		}).then(function() {
		  // Update successful.
		}).catch(function(error) {
		  // An error happened.
		});


	});

}

function logout(){
		firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	}).catch(function(error) {
	  // An error happened.
	});
}

