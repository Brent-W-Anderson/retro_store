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
    //Check if user already exists via Username, email.
    // Working to set up so the db does the work of validating the user
    /*
    $user_verify = $db -> query("IF NOT EXISTS ( BEGIN
                                                  SELECT username, email FROM customer 
                                                  WHERE username = '$username' 
                                                  AND email = '$email'
                                                  
                                                  BEGIN
                                                    INSERT INTO customer (username, password, email, fullname, phone, address, birthdate)
                                                    VALUES ('$username', '$password', '$email', '$fullname', '$phone',
                                                            '$address', '$birthdate')
                                                  END
                                                  END");
      */


    //Insert Record into DB
    $insert_user = "INSERT INTO customer (username, password, email, fullname, phone, address, birthdate)
    VALUES ('$username', '$password', '$email', '$fullname', '$phone',
            '$address', '$birthdate')";
    // Inserts the user into the db, if success prints success
    if( $db -> query($insert_user) === TRUE) {
        echo '<pre id="login_data"> User succesfully added ';
    } else {
        echo 'Error: ' .$sql. '<br>' .mysqli_error($db);
    }
    

      // Closes the db
      $db->close();

  }
?> 

</php>