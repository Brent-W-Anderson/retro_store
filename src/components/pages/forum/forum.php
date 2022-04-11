<php>
<?php

    if( $_SERVER['REQUEST_METHOD'] === 'POST') {
        $username = $_POST['username'];
        $message = $_POST['message'];
        $game = $_POST['game'];

        @$db = new mysqli('localhost', 'root', '', 'retro');

        if ( $db->connect_error) {
            die("connection failed" .$db->connect_error);
        };

        // query game id
        $game_id = $db -> query("SELECT game_id FROM game WHERE name = '$game'");
        if(!$game_id) { echo mysqli_error($db);}

        // query customer id
        $customer_id = $db -> query("SELECT Customer_id FROM customer WHERE username = '$username'");
        if(!$customer_id) { echo mysqli_error($db);}

        // converts strings to int for db
        // NOT WORKING
        /*
        $int_game_id = (int)$game_id;
        $int_customer_id = (int)$customer_id;

        echo 'pre game id' .$game_id. '<br>';
        echo 'game id' .$int_game_id. '<br>';
        */

        // insert user post on forum
        $insert_user_post = "INSERT INTO forum (customer_id, game_id, message)
                                VALUES (' $customer_id', '$game_id', '$message')";
        if( $db -> query($insert_user_post) === TRUE) {
            echo '<pre id="user_post"> Post Successfully ... Posted ';
        } else {
            echo 'Error: ' .$sql. '<br>' .mysqli_error($db);
        }

        $db->close();

    }



?>
</php>