<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <title>  Create an account </title>
    <style>

body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    background-image: url(creat.jpg); 
    background-size: cover;
    background-position: center; 
}


.login-container {
    width: 300px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8); 
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}


.login-container h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333; 
}


.login-form input[type="text"],
.login-form input[type="password"],
.login-form input[type="submit"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
    background-color: #f9f9f9;
    color: #333; 
}


.login-form input[type="submit"]:hover {
    background-color: green ;
}

    </style>


</head>
<body>


    <div class="login-container">

        <h1>  Create an account </h1>

        <form class="login-form" method="post">
            <input type="text" name="Username" required placeholder="Enter Email">
           


            <input type="password" name="Password" required placeholder="Enter Password">
			<input type="password" name="Rpassword" required placeholder="Reset the password">
            
			
            <input type="submit" value="Signup" name="sub">



<?php
session_start() ;
include("config.php");
if(isset($_POST["Username"]) && isset($_POST["Password"])){
	//$id = $_POST["UserID"];
	$un = $_POST["Username"];
	$Pass = $_POST["Password"];
	$rpass = $_POST["Rpassword"];

if($Pass!=$rpass){
	print "<center>";
print "The 2 passwords should be same";
}

else{
	$sql = "insert into user values(NULL, '$un','$Pass',2)";
	$result=mysqli_query($con,$sql) ;
	
	sleep(3);
	header('location: login.php');
	
}	
			
	
}
?>

    </p>

        </form>
    </div>
</body>
</html>
