<?php
    
    //this page will be for displaying the information to the account tab and editing details of the user account


    if( $_SERVER['REQUEST_METHOD'] === 'POST') {
        $login = $_POST['username'];
        $password = $_POST['password'];


        @$db = new mysqli('localhost', 'root', '', 'retro');

        if ( $db->connect_error ) {
            die("connection failed: " .$db->connect_error);
        };


        // This retreives user data from the db and echos is back to the console
        $user_info = $db -> query("SELECT username, email, fullname, phone, address, birthdate FROM customer WHERE username = '$login' AND password = '$password'");

        if ($user_info->num_rows > 0) {
            // output data of username/password that was matched in database
            while($row = $userCk->fetch_assoc()) {
              echo '<pre id="login_data"> Welcome to RETRO-RETRO: ' . $row["username"]. "<br> Email: " .$row["email"]. "<br> Name: " .$row["fullname"]. "<br> Phone: " .$row["phone"]. "<br> Birthdate: " .$row["birthdate"]. "<br>";
      
            }
          } else {
            echo "0 results";
          }
    }





?>