
<!-- TODO: look up documentation on PHP or watch a video on a basic setup for connecting your DB locally and just return a simple test: "hello world" from that table. -->

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
      $host = 'localhost';
      $user = 'root';
      $pass = 'password';
      $db = 'retro_db';
  
      $con=new mysqli($host,$user,$pass,$db); // making our connection to the database
  
      if( $con->connect_errno ) { // if there's an error:
          echo '<script> console.error( "failed to connect: '.$con->connect_errno.'" ); </script>';
      }
      else {
          $query = mysqli_query( $con, 'SELECT user_name FROM users' ); // grabbing all of the usernames in the database
  
          echo '<script> console.warn( "usernames:" ) </script>';
          while( $rows = mysqli_fetch_array( $query ) ) { // if another row exists, keep outputting the data.
              echo '<script> console.warn( "'.$rows[ 0 ].'" ); </script>'; // output ( don't send to the frontend because we just need to check if it exists ).
          }
      }
    }
  }
?> 