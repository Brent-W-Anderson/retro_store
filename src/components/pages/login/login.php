
<!-- TODO: look up documentation on PHP or watch a video on a basic setup for connecting your DB locally and just return a simple test: "hello world" from that table. -->

<?php
  // Resources used
  // https://www.w3schools.com/php/php_mysql_connect.asp

  //must create db in mysql named 'retro' for this to connect succesfully
  if( $_SERVER['REQUEST_METHOD'] === 'POST') {
    $login = $_POST['login_username'];
    $password = $_POST['login_password'];

    if (!$login || !$password) { // this is a little redundant to have because we are also going to check within the DB if a username or password exists
      echo '<pre id="login_data"> You did not enter login information. </pre>';
    }
    else {
      // Database stuff ( don't just say "Database stuff" ) -- this looks more like you're establishing a connection locally, be more specific
      @$db = new mysqli('localhost', 'root', '', 'retro');
      @$db = mysqli_connect('localhost,', 'root', '', 'retro');

      // why did this connect_error fail? this doesn't provide you with much information if you're trying to see what the error was.
      if ( mysqli_connect_errno() ) {
        echo '<pre id="login_data" Database connection failed';
        exit;
      };

      // leave yourself some notes here to describe what you're doing
      $query = 'SELECT login FROM customer'; // why is a query wrapped in a string? Is this how it's supposed to be?
      $stmt = $db -> prepare($query); // what does prepare do?
      $stmt->execute();
      $stmt->bind_result($login, $password);
      $num_results = mysqli_num_rows($result);

      // why would we need a while loop here?
      while( $stmt->fetch() ) {
        echo 'pre id="login_data"> Username: '.$login.' </pre>';
      };

      // Closes the db
      $db->close();

      // return data to frontend
      echo '<pre id="login_data"> welcome to RETRO-RETRO: '.$login.' </pre>';
    }
  }
?> 