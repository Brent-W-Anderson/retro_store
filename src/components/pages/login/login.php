
<?php
  include "../index.php";

  class Login {
    // this trait has our database with the connection to MySQL
    use MySQL_Connection;

    public function checkCredentials() {
      if( isset($_POST['username']) ) {
        $user = $_POST['username'];
        $pass = $_POST['password'];

        echo '<script>console.warn("user: '.$user.' pass: '.$pass.'");</script>';
      }

      if( isset($_POST['new_username']) ) {
        $user = $_POST['new_username'];
        $pass = $_POST['new_password'];

        echo '<script>console.warn("new user: '.$user.' new pass: '.$pass.'");</script>';
        MySQL_Connect::get() -> query("INSERT INTO users (user, pass) VALUES ('".$user."', '".$pass."')");
      }
    }

    public function test() {
      $conn = new mysqli('localhost', 'root', 'password', 'retro_db');

      if( !$conn ) {
        echo 'Database connection error: ' . mysqli_conntect_error();
        echo '<script>console.warn("Database connection error: '.mysqli_connect_error().'");</script>';
      }
      else {
        $result = MySQL_Connect::get() -> query("SELECT * FROM users");

        while($row = $result->fetch_assoc()) {
          echo '<script>console.warn("user: '.$row['user'].' pass: '.$row['pass'].'");</script>';
        }
      }
    }
  }

  if( $_SERVER['REQUEST_METHOD'] === 'POST') {
    $loggedUser = new Login;
    $loggedUser -> checkCredentials();

    $loggedUser -> test();
  }
?> 