
<?php
  // Resources used
  // https://www.w3schools.com/php/php_mysql_connect.asp

  //must create db in mysql named 'retro' for this to connect succesfully
  if( $_SERVER['REQUEST_METHOD'] === 'POST') {

    // login info from POST
    $login = $_POST['login_username'];
    $password = $_POST['login_password'];

    // Database interactions
    //creates connection to db
    @$db = new mysqli('localhost', 'root', '', 'retro');

    // This is in place to catch if the connection fails, if it triggers it means it didnt connect.
    if ( $db->connect_error ) {
      die("connection failed: " .$db->connect_error);
    };


    // Validates if the user is in the database, prints account info if they are, prints error if they are not or incorrectly entered something
    $userCk = $db -> query("SELECT username, password FROM customer WHERE username =  '$login' AND password = '$password'");

    if(!empty($userCk) && $userCk->num_rows == 1) {

      // Selecting the account info of the user who entered their login credentials
      $account_info = $db -> query("SELECT username, email, fullname, phone, address, birthdate FROM customer WHERE username = '$login'");

      // Displays the data
      if(!empty($account_info) && $account_info->num_rows > 0) {
        while($user_row = $account_info->fetch_assoc()) {
      // displays header and user info
      echo "<h1> Welcome to your Account </h1>";
      echo '<pre id="login_data"> Welcome to RETRO-RETRO: ' . $user_row["username"]. "<br> Address: " .$user_row["address"]. "<br> Phone: " .$user_row["phone"]. "<br>";
      
        }

      //displays games that user owns
      // XXXXXXXXX displays game ID right now, need to make display game and image of the games
      $user_games = $db -> query("SELECT game_id FROM transaction WHERE username = '$login'");
      if(!empty($user_games) && $user_games->num_rows > 0) {
        echo "<br>Games Owned: <br>";
        while($row = $user_games->fetch_assoc()) {
          echo "Game name: " .$row['game_id']. "<br>";
        }
      }
      }
      else {
        echo "You dont own any games";
      }
    
    }
    else {
      print "<h1> Login info incorrect, try again. </h1>";
    }

      // Closes the db
      $db->close();

  }
?> 