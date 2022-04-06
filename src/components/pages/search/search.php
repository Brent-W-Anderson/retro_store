
<?php
  // search logic goes here..
  if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    include "./RAWG_KEY.php";

    // form data passed over from the frontend
    $searchVal = $_POST['searchInput'];
    $pageNum = $_POST['pageNum'];

    // API url
    $url = 'https://api.rawg.io/api/games?key='.$RAWG_KEY.'&search='.$searchVal.'&page='.$pageNum.'&page_size=20';
    $ch = curl_init( $url ); // curl initialized

    // options
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );

    $resp = curl_Exec($ch); // make the request for data

    curl_close($ch); // close out, we have we need

    $replaceKey = 'key='.$RAWG_KEY;
    $newResp = str_replace( $replaceKey, '', $resp ); // get rid of our key, so it's not visible to the client

    // send the response to the DOM, so it's available to the frontend
    echo '<pre id="search_data">'.$newResp.'</pre>';
  }
?>
