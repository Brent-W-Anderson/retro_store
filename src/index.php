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
    <script src='./bundle.js'></script>
  </body>
</html>

<?php 
  // home specific php can go here.

  // Any other page logic can be included here (make sure to include any new php to webpack, too)
  include "./PHP/search.php";
  include "./PHP/login.php";
  include "./PHP/account.php";
  include "./PHP/forum.php";
  include "./PHP/store.php";
?>
