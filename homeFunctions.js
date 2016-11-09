var config = {
		apiKey: "AIzaSyB3ocXC1s5sSMOT2ZV0snKdjBx85XsbPmA",
		authDomain: "college-4ab84.firebaseapp.com",
		databaseURL: "https://college-4ab84.firebaseio.com",
		storageBucket: "college-4ab84.appspot.com",
		messagingSenderId: "409094544332"
	  };
	  firebase.initializeApp(config);
	  
	  //logout not run
	  var logout=false;
	  
	  //handles login redirect
	  function Login() {
			   firebase.auth().onAuthStateChanged(function(user) {
			   //if user already signed in
				if(user){
					alert("You are already signed in!");
				}
				//else redirect to login page
				else{
					window.location="index.html";
				}
			});
		}
		//handles logout redirect
		function Logout() {
			   firebase.auth().onAuthStateChanged(function(user) {
			   //if user not signed in and logout false to avoid alert running after else runs
				if(user==null&&logout==false){
					alert("You are not signed in!");
				}
				//else sign out user, redirect to login page, logout set to true
				else{
					logout=true;
					window.location="index.html";
					firebase.auth().signOut();
				}
			});
	}