function submitClick() {
	var name = document.getElementById("name").value;
	var college = document.getElementById("college").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var database = firebase.database();
	var ref = database.ref("campus_ambassador");
	var data = {
		name:name,
		college:college,
		email:email,
		phone:phone,
	}
	ref.push(data);

	document.getElementById("name").value = "";
	document.getElementById("college").value = "";
	document.getElementById("email").value = "";
	document.getElementById("phone").value = "";

	var str = "Your Registration has been completed, you will be recieveing an email soon. click here to go back !";
  	var result = str.link("index.html");
  	document.getElementById("demo").innerHTML = result;
}