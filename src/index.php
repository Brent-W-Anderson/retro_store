<!DOCTYPE html>

<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" charset="UTF-8">
    <link rel="icon" href="./assets/icon.png">
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    <title>retro store - home</title>
  </head>

  <body>
    <div id="root" class="home"></div>

    <?php
      if( $_SERVER['REQUEST_METHOD'] === 'GET') {
        echo "<script src='./bundle.js'></script>";
      }
    ?>
  </body>
</html>

<?php
  trait MySQL_Connection {
    public $mysqli;
    public $dbs = [];
    public $dbName = 'retro_db'; // use locally
    // public $dbName = 'ics325sp2201'; // use on server
  }

  class MySQL_Connect {
    use MySQL_Connection; // trait ^^

    // global variables
    public static $db;
 
    public function set($data){ 
        return self::$db = $data;
    }
     
    public function get(){
        return self::$db;
    }

    // connect to mysql
    public function connect_mysql() {
      $this -> mysqli = mysqli_connect('localhost', 'root', 'password'); // use locally
      // $this -> mysqli = mysqli_connect('localhost', 'ics325sp2201', '2224'); // use on server

      // connection failed
      if ( !$this -> mysqli ) {
        echo 'MySQL connection error: ' . mysqli_conntect_error();
      };
    }

    public function drop_database() {
      // drop database
      $this -> mysqli -> query("DROP DATABASE ".$this -> dbName."");
    }

    // connect to retro-retro database
    public function connect_database() {
      // create a new database, so we have fresh data sets
      $this -> mysqli -> query("CREATE DATABASE IF NOT EXISTS ".$this -> dbName."");

      // connect
      $conn = new mysqli('localhost', 'root', 'password', $this -> dbName); // use locally
      // $conn = new mysqli('localhost', 'ics325sp2201', '2224', $this -> dbName); // use on server

      if( !$conn ) {
        echo 'Database connection error: ' . mysqli_conntect_error();
      }
      else {
        $this -> set( $conn );
        $this -> create_tables();
      }
    }

    // create base tables with data types for retro-retro
    public function create_tables() {
      $this -> get() -> query(
        "CREATE TABLE users (
          `id` INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
          `user` VARCHAR(30) NOT NULL,
          `pass` VARCHAR(30) NOT NULL,
          `email` VARCHAR(30),
          `fname` VARCHAR(30),
          `lname` VARCHAR(30),
          `phone` VARCHAR(30),
          `address` VARCHAR(30)
        )"
      );
    }

    public function populate_database() {
      // users
      $this -> get() -> query(
        "INSERT INTO users (`user`, `pass`, `email`, `fname`, `lname`, `phone`, `address`)
        VALUES ('admin', 'pass', 'admin@email.com', 'brent', 'anderson', '123456789', '123 vine st.'),
        ('admin0', 'pass0', 'admin0@email.com', 'luis', 'duran-enriquez', '987654321', '456 random ln.'),
        ('admin1', 'pass1', 'admin1@email.com', 'nate', 'loomis', '123456789', '789 orange dr.')"
      );
    }

    // function to see what other databases exist, besides retro-retro
    public function show_databases() {  
      // list of databases
      $res = $this -> mysqli -> query("SHOW DATABASES");
  
      $xVal = 0;
      while($this -> mysqli = mysqli_fetch_row($res)) {
        $this -> dbs[] = $this -> mysqli[0];
        echo '<script>console.warn("'.$this -> dbs[$xVal].'");</script>';
  
        $xVal++; // increment
      }
    }
  }

  $retro = new MySQL_Connect;
  $retro -> connect_mysql();

  if( $_SERVER['REQUEST_METHOD'] === 'GET') {
    $retro -> drop_database();
  }
  
  $retro -> connect_database();

  if( $_SERVER['REQUEST_METHOD'] === 'GET') {
    $retro -> populate_database();
  }

  include "./PHP/login.php";
  include "./PHP/account.php";
?>
