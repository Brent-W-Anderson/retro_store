
<?php
  class Login {
    // this trait has our database with the connection to MySQL
    use MySQL_Connection;

    public $username;
    public $password;

    public function checkCredentials() {
      if( isset($_POST['username']) ) {
        $this -> username = $_POST['username'];
        $this -> password = $_POST['password'];
      }

      if( isset($_POST['new_username']) ) {
        $user = $_POST['new_username'];
        $pass = $_POST['new_password'];
        $email = $_POST['email'];
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];

        echo '<script>console.warn("new user: '.$user.' new pass: '.$pass.'");</script>';
        MySQL_Connect::get() -> query(
          "INSERT INTO users (`user`, `pass`, `email`, `fname`, `lname`, `phone`, `address`)
          VALUES ('".$user."', '".$pass."', '".$email."', '".$fname."', '".$lname."', '".$phone."', '".$address."')"
        );
      }
    }

    public function test() {
      $result = MySQL_Connect::get() -> query("SELECT * FROM users");

      while( $row = $result->fetch_assoc() ) {
        if( $this -> username === $row['user'] && $this -> password === $row['pass'] ) {
          echo '<pre id="login_data">'.$row['user'].', '.$row['pass'].', '.$row['email'].', '.$row['fname'].', '.$row['lname'].', '.$row['phone'].', '.$row['address'].'</pre>';
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