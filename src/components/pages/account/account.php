<php>
<?php

//must create db in mysql named 'retro' for this to connect succesfully
  if( $_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $fullname = $_POST['fullname'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $birthdate = $_POST['birthdate'];


    // Database interaction

    //creates connection to db
    @$db = new mysqli('localhost', 'root', '', 'retro');

    // This is in place to catch if the connection fails, if it triggers it means it didnt connect.
    if ( $db->connect_error ) {
      die("connection failed: " .$db->connect_error);
    };
      
    // Statements for interaction with the DB
    $user_verify = $db -> query("SELECT username FROM customer WHERE username = '$username'");

    if($user_verify->num_rows == 0) {

      $insert_user = "INSERT INTO customer (username, password, email, fullname, phone, address, birthdate)
      VALUES ('$username', '$password', '$email', '$fullname', '$phone',
              '$address', '$birthdate')";
      // Inserts the user into the db, if success prints success
      if( $db -> query($insert_user) === TRUE) {
          echo "User succesfully added ";
      } else {
          echo "Error: " .$sql. "<br>" .mysqli_error($db);
      }

    }
    else {
      echo "Username is taken! Try again!";
    }
    
    

    

      // Closes the db
      $db->close();

  }
?> 

</php>