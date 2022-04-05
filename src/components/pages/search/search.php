
<?php
  // search logic goes here..
  if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    $searchVal = $_POST['searchInput'];
    $pageNum = $_POST['pageNum'];

    // these 2 values are coming from the frontend, so now we can securely use RAWG with our API key to make a search.
    echo '<script> console.warn( "you typed: '.$searchVal.'" ); </script>';
    echo '<script> console.warn( "page #'.$pageNum.'" ) </script>';
  }
?>
