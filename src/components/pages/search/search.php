
<?php
  // search logic goes here..

  echo // alert if a user goes to this address.
    "<script>
      const rootHTML = document.getElementById('root');
      if( !rootHTML ){
        var tt0 = document.createElement(\"TITLE\"); 
        tt0.innerHTML = 'retro store - search'; 
        document.head.appendChild( tt0 );

        alert( 'Wrong landing page, did you get lost?' );
      }
    </script>";
?>
