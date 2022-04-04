<h1>This is the login handler page </h1>
<?php
// Resources used
// https://www.w3schools.com/php/php_mysql_connect.asp


//must create db in mysql named 'retro' for this to connect succesfully

$servername = "localhost";
$username = "root";
$password = "";
$db = "retro";

// Create connection
$conn = new mysqli($servername, $username, $password, $retro);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected Successfully";


// db interaction
$login = $_POST['login_username'];
$password = $_POST['login_password'];

//Need to set db up with Users in order for this to verify if they exist
$search_user = "SELECT login, password FROM Users";
$result = $conn->query($search_user);

if($result->num_rows > 0) {
    //output of data for testing
    echo "customer_id " . $row["customer_id"]. " - username " . $row["username"]. "<br>";
} else {
echo "failed test";
}



// Closes the connection to the db
$conn->close();

?> 