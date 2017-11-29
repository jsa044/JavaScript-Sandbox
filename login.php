<?php

$username= $_POST['username'];
$password= $_POST['password'];

if ($username&&$password) {
	
	
	$connect = mysql_connect('localhost','root', '')or die('Could not Connect!');
	mysql_select_db('phplogin') or die("Couldn't find the database!");	
	
	$query = mysql_query("SELECT * FROM users WHERE username='$username'");
	
	
	$numrows = mysql_num_rows($query);
	
	if ($numrows !=0) {
		
		while ($row = mysql_fetch_assoc($query)) {
			$dbusername = $row['username'];
			$dbpassword = $row['password'];		
		}
		if ($username==$dbusername&&$password==$dbpassword){
			echo "You're in!";
		}
		else {
			echo "Incorrect password";
		}		
	}  //End of inner if statement at this line.
	else {
		die('That user does not exist.');
	}   //End of else statement
	
	
}  //End of outer if statement
else 

die('Please enter a username and password.');



?>




