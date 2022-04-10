
<?php
  // Resources used
  // https://www.w3schools.com/php/php_mysql_connect.asp

  //must create db in mysql named 'retro' for this to connect succesfully

  if( $_SERVER['REQUEST_METHOD'] === 'POST') {
    $login = $_POST['login_username'];
    $password = $_POST['login_password'];

    if (!$login || !$password) {
      echo '<pre id="login_data"> You did not enter login information. </pre>';
    }
    else {


      // Database stuff
      @$db = new mysqli('localhost', 'root', '', 'retro');
      @$db = mysqli_connect('localhost,', 'root', '', 'retro');
          if (mysqli_connect_errno()) {
            echo '<pre id="login_data" Database connection failed';
            exit;
          }


      $query = 'SELECT login FROM customer';
      $stmt = $db -> prepare($query);
      $stmt->execute();
          $stmt->bind_result($login, $password);
          $num_results = mysqli_num_rows($result);
          while($stmt->fetch()) {
            echo 'pre id="login_data"> Username: '.$login.' </pre>';
          }
      




      // Closes the db
      $db->close();




      echo '<pre id="login_data"> welcome to RETRO-RETRO: '.$login.' </pre>';

    }


  }



    // Check connection
    /*
    //not sure if needed
    $db->select_db('retro');
      
    $query = 'SELECT * FROM customer';

    //$result = $db -> query($query);

    $result = mysqli_query($db, $query);

    if (mysqli_num_rows($result) > 0) {
      while($row = $result->fetch_assoc()) {
        echo 'username: ' .$row['username']. "<br>";
      }
    } else {
      echo "failed to produce results from db";
    }

 */


?> 