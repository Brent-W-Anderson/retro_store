<?php
// Resources used
// https://www.w3schools.com/php/php_mysql_connect.asp


//must create db in mysql named 'retro' for this to connect succesfully


if( $_SERVER['REQUEST_METHOD'] === 'POST') {


  $login = $_POST['login_username'];
  $password = $_POST['login_password'];

  
  if (!$login || !$password) {
    echo '<p>You did not enter login information</p>';
  }

  @$db = new mysqli('localhost', 'root', '');

  // Check connection
  if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
  }
  echo "Connected Successfully";

$db->select_db('retro');
  

$query = 'SELECT * FROM customer';

//Need to set db up with Users in order for this to verify if they exist
//$result = $db -> query($query);

$result = mysqli_query($db, $query);

if (mysqli_num_rows($result) > 0) {
  while($row = $result->fetch_assoc()) {
    echo 'username: ' .$row['username']. "<br>";
  }
} else {
  echo "failed to produce results from db";
}






//throwing some test data just to see if this works, delete later and turn into user account info return XXXX
//$testdata = 'test successful';

//echo '<pre id="user_info">'.$testdata.'</pre>';

// Closes the connection to the db
$db->close();

}

?> 