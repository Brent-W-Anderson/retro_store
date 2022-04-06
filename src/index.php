<!DOCTYPE html>

<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" charset="UTF-8">
    <link rel="icon" href="./assets/icon.png">
    <title>retro store - home</title>
  </head>

  <body>
    <div id="root" class="home"></div>
    <script src='./bundle.js'></script>
  </body>
</html>

<?php 
  // home specific php can go here.

  // Any other page logic can be included here (make sure to include any new php to webpack, too)
  include "./PHP/search.php";
?>
