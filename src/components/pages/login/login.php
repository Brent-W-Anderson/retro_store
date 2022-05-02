
<?php
  class Login {
    // this trait has our database with the connection to MySQL
    use MySQL_Connection;

    public $username;
    public $password;
    public $email;
    public $fname;
    public $lname;
    public $phone;
    public $address;

    public function checkCredentials() {
      if( isset($_POST['username']) ) {
        $this -> username = $_POST['username'];
        $this -> password = $_POST['password'];

        $this -> loggedUser();
      }

      if( isset($_POST['new_username']) ) {
        $this -> username = $_POST['new_username'];
        $this -> password = $_POST['new_password'];
        $this -> email = $_POST['email'];
        $this -> fname = $_POST['fname'];
        $this -> lname = $_POST['lname'];
        $this -> phone = $_POST['phone'];
        $this -> address = $_POST['address'];

        $isDuplicate = $this -> checkDuplicate();
      }
    }

    public function loggedUser() {
      $result = MySQL_Connect::get() -> query("SELECT * FROM users");

      while( $row = $result->fetch_assoc() ) {
        if( $this -> username === $row['user'] && $this -> password === $row['pass'] ) {
          echo '<pre id="login_data">'.$row['user'].', '.$row['pass'].', '.$row['email'].', '.$row['fname'].', '.$row['lname'].', '.$row['phone'].', '.$row['address'].'</pre>';
        }
      }  
    }

    public function checkDuplicate() {
      $result = MySQL_Connect::get() -> query("SELECT * FROM users");

      while( $row = $result->fetch_assoc() ) {
        if( $this -> username === $row['user'] ) {
          echo '<script>alert("Sorry! That username already exists.");</script>';

          return;
        }
      }

      MySQL_Connect::get() -> query(
        "INSERT INTO users (`user`, `pass`, `email`, `fname`, `lname`, `phone`, `address`)
        VALUES ('".$this -> username."', '".$this -> password."', '".$this -> email."', '".$this -> fname."', '".$this -> lname."', '".$this -> phone."', '".$this -> address."')"
      );

      echo '<script>console.warn("new user added: '.$this -> username.', Welcome: '.$this -> fname.'");</script>';
      
      $this -> loggedUser();
    }
  }

  if( $_SERVER['REQUEST_METHOD'] === 'POST') {
    $loggedUser = new Login;
    $loggedUser -> checkCredentials();
  }
?> 