<?php
  class AccountUpdate {
    // this trait has our database with the connection to MySQL
    use MySQL_Connection;

    public $username;
    public $password;
    public $email;
    public $fname;
    public $lname;
    public $phone;
    public $address;

    public function test() {
        if( isset($_POST['update_username']) ) {
            $this -> username = $_POST['update_username'];
            $this -> password = $_POST['update_password'];
            $this -> email = $_POST['update_email'];
            $this -> fname = $_POST['update_fname'];
            $this -> lname = $_POST['update_lname'];
            $this -> phone = $_POST['update_phone'];
            $this -> address = $_POST['update_address'];

            echo '<script>console.warn("update: '.$this -> username.'");</script>';
        }
    }
  }

  if( $_SERVER['REQUEST_METHOD'] === 'POST') {
    $updateAccount = new AccountUpdate;

    $updateAccount -> test();
  }
?>