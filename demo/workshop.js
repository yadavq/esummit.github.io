function submitClick() {
	var name = document.getElementById("name").value;
	var sr = document.getElementById("sr").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var database = firebase.database();
	var ref = database.ref("workshop");
	var data = {
		name:name,
		sr:sr,
		email:email,
		phone:phone,
	}
	ref.push(data);

	document.getElementById("name").value = "";
	document.getElementById("sr").value = "";
	document.getElementById("email").value = "";
	document.getElementById("phone").value = "";

	var str = "Your Registration has been completed, you will be recieveing an email soon. click here to go back !";
  	var result = str.link("index.html");
  	document.getElementById("demo").innerHTML = result;
}