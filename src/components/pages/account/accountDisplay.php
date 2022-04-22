<?php
    
    //this page will be for editing details of the user account


    if( $_SERVER['REQUEST_METHOD'] === 'POST') {
        //general login info
        $login = $_POST['username'];
        $password = $_POST['password'];

        //updateable info
        $update_address = $_POST['update_address'];
        $update_number = $_POST['update_number'];
        $update_email = $_POST['update_email'];


        // database connection
        @$db = new mysqli('localhost', 'root', '', 'retro');
        // database error out with error output
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


          if(isset($update_address)) {

            $updater = $db -> query("UPDATE customer SET address = '$update_address' WHERE username = '$login'");
          }
          elseif(isset($update_number)) {
            $updater = $db -> query("UPDATE customer SET address = '$update_number' WHERE username = '$login'");

          }
          elseif(isset($update_email)) {
            $updater = $db -> query("UPDATE customer SET address = '$update_email' WHERE username = '$login'");

          }

    }

    $db -> close();

?>