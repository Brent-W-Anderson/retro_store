<php>
<?php error_reporting(E_ALL ^ E_NOTICE); // suppresses undefined index errors ?>
<?php

    if( $_SERVER['REQUEST_METHOD'] === 'POST') {
        $username = $_POST['username'];
        $message = $_POST['message'];
        $game = $_POST['game'];
        $updatedmessage = $_POST['updatedmessage'];
        $replymessage = $_POST['replymessage'];

        @$db = new mysqli('localhost', 'root', '', 'retro');

        if ( $db->connect_error) {
            die("connection failed" .$db->connect_error);
        };



        // Checks if updatemessage variable has a value, if it evaluates to true is enters the function
        // and updates the message
        if ( isset($updatedmessage) && isset($username)) {
        
        // Updates post
        //$post_update = "UPDATE forum SET message = '$updatedmessage' WHERE customer_id = '2'";
        $update_post = $db -> query("UPDATE forum SET message = '$updatedmessage' WHERE customer_id = '2'");
        
        $updated_post = $db -> query("SELECT message FROM forum WHERE customer_id = '2'");
            if($updated_post->num_rows > 0) {
                while($row = $updated_post->fetch_assoc()) {
                    echo '<pre id="user_post"> Message in Forum: ' . $row["message"]. "<br>";
                }
            } else {
                echo "failed to updated";
            }
        }



        // Reply logic
        if( isset($replymessage) && isset($username)) {
            // this will be where the logic for posting message will go



        }

        // Forum post logic
        // Check the username, message, and game variables and if they evaluate to true
        // enters the function to post the message
        if (isset($username) && isset($message) && isset($game)) {
        // query game id
            $int_game_id = '';
            $game_id = $db -> query("SELECT game_id FROM game WHERE name = '$game'");
            if(!$game_id) { echo mysqli_error($db);}

            if ($game_id->num_rows > 0) {
                // output data of username/password that was matched in database
                while($row = $game_id->fetch_assoc()) {
                    echo '<pre id="user_post"> Game ID: ' . $row["game_id"]. "<br>";
                //return $int_game_id = $row["game_id"];
                }
            } else {
                echo "0 results";
            }



            // query customer id
            $int_customer_id = '';
            $customer_id = $db -> query("SELECT Customer_id FROM customer WHERE username = '$username'");
            if(!$customer_id) { echo mysqli_error($db);}

            if ($customer_id->num_rows > 0) {
                // output data of username/password that was matched in database
                while($row = $customer_id->fetch_assoc()) {
                    echo '<pre id="user_post"> Customer ID: ' . $row["Customer_id"]. "<br>";
                //return $int_customer_id = $row["Customer_id"];
                }
            } else {
                echo "0 results";
            }


            // 
            // insert user post on forum
            $insert_user_post = "INSERT INTO forum (customer_id, game_id, message)
                                    VALUES ($customer_id, $game_id, $message)";
            if( $db -> query($insert_user_post) === TRUE) {
                echo '<pre id="user_post"> Post Successfully ... Posted <br> Game ID: ' .$game_id['game_id']. '<br> Customer ID: ' .$customer_id['Customer_id'];
            } else {
                echo 'Error: ' .$sql. '<br>' .mysqli_error($db);
            }

        }

        $db->close();

    }



?>
</php>