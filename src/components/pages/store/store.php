<php>
<?php

if( $_SERVER['REQUEST_METHOD'] === 'POST') {


    $username = $_POST['username'];
    $game = $_POST['game'];


    @$db = new mysqli('localhost', 'root', '', 'retro');

    // This is in place to catch if the connection fails, if it triggers it means it didnt connect.
    if ( $db->connect_error ) {
        die("connection failed: " .$db->connect_error);
    };

    $game_id = $db -> query("SELECT game_id FROM game WHERE game = '$game'");

    $updateAcctPurchase = $db -> query("UPDATE transaction SET status='Owned', game_id='$game_id' WHERE username = 'NatesAccount'");

    $db -> close();

}

?>

</php>