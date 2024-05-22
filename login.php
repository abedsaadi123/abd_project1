<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <title>Login Page</title>
    <style>

        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
            background-image: url(login.jpg); 
    
        }

        .login-container {
            width: 300px;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .login-container h1 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
        }

        .login-form input[type="text"],
        .login-form input[type="password"] {


            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: none;
            border-radius: 5px;
            box-sizing: border-box;
            font-size: 16px;
        }

        .login-form input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        .login-form input[type="submit"]:hover {
            background-color: #45a049;
        }

        .login-form input[type="text"]:focus,
        .login-form input[type="password"]:focus {
            outline: none;
            box-shadow: 0 0 5px #4CAF50;
        }

    </style>


</head>
<body>


    <div class="login-container">

        <h1>Login</h1>

        <form class="login-form" action="loginprocess.php" method="post">
            <input type="text" name="uname" required placeholder="Enter Email">

            <input type="password" name="upassword" required placeholder="Enter Password">
            <input type="submit" value="Login" name="sub">
              <br> 
              <br> 

			<a href="signup.php"> Create an account</a>



            <?php 

    if(isset($_REQUEST["err"]))
        $msg="Invalid username or Password";
    ?>
    <p style="color:green;">
    <?php if(isset($msg))
    {
        
    echo $msg;
    }
    ?>

    </p>

        </form>
    </div>
</body>
</html>
