
<?php
  // Resources used
  // https://www.w3schools.com/php/php_mysql_connect.asp

  //must create db in mysql named 'retro' for this to connect succesfully
  if( $_SERVER['REQUEST_METHOD'] === 'POST') {

    // login info
    $login = $_POST['login_username'];
    $password = $_POST['login_password'];

    // Database interaction

    //creates connection to db
    @$db = new mysqli('localhost', 'root', '', 'retro');

    // This is in place to catch if the connection fails, if it triggers it means it didnt connect.
    if ( $db->connect_error ) {
      die("connection failed: " .$db->connect_error);
    };
      
    // Statements for interaction with the DB
    //Query the db for the username and passowrd entered
    $userCk = $db -> query("SELECT username, password FROM customer WHERE username =  '$login' AND password = '$password'");


    // if no result comes back from db, throws error stating why
    if(!$userCk) { echo mysqli_error($db);}

    if ($userCk->num_rows > 0) {
      // output data of username/password that was matched in database
      while($row = $userCk->fetch_assoc()) {
        echo '<pre id="login_data"> Welcome to RETRO-RETRO: ' . $row["username"]. "<br> Password: " .$row["password"]. "<br>";

      }
    } else {
      echo "0 results";
    }

      // Closes the db
      $db->close();

  }
?> 