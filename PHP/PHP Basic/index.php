
<?php

//Constants:   ALL CAPS   No $

define("YEAR", 2015);
define("JOB_TITLE", "Teacher");
define("MAX_BADGES", 100);

$name = "KOOST";
$location = "In Bed";
$full_name = "KOOST SOOPER POOPER";
$name = $full_name;




//  This is a comment:  First Name:  Daniel

?>


<!DOCTYPE html>
<html>
  <head>
  	<meta charset=utf-8>
  	<title><?php echo $name ?> | Treehouse Profile</title>
  	<link href="css/style.css" rel="stylesheet" />
  </head>

  <body>

    <section class="sidebar text-center">
      <div class="avatar">
        <img src="img/avatar.png" alt="<?php echo $name ?>">
      </div>

      <h1><?php echo $name ?></h1>


      <p><?php echo $location ?></p>
      <hr />
      <p>Welcome to PHP Basics!</p>
      <hr />
      <ul class="social">
        <li><a href=""><span class="icon twitter"></span></a></li>
      </ul>
    </section>

    <section class="main">
      <p>Let's Get Started!</p>

      <p><?php echo "Wonderful World"   ?></p>

      <pre>

      <?php

          $array_example = array();
          $eye_color = array("Barn" => "blue", "Mook" =>"brown", "Koost" => "green", "Nibs" =>"yellow", "turd");




          print_r($eye_color);
          echo "MOOK eyeColor: ", $eye_color["Mook"] , "\n" ;
          $eye_color["Mook"] = "supercolor";
          echo "MOOK eyeColor: ", $eye_color["Mook"] , "\n" ;

          $eye_color['Steve'] = "barf";
          print_r($eye_color);





          print_r($array_example);

          echo "Eye Color [2]:  ", $eye_color[2] , "\n";

          $eye_color[1] = 'purple';
          echo "Eye Color [1]:  ", $eye_color[1] , "\n";
          print_r($eye_color);

          $daniel = array(12, "orange", TRUE);
          print_r($daniel);


          $eye_color[] = "vomit";
          echo "XXX:";
          print_r($eye_color);



          echo "Constant Year:  ", YEAR, "\n" ;
          echo "Job Title:  ", JOB_TITLE, "\n" ;


          //Variables:
          $one = 1;
          $two = 2;
          $three = 3;
          $string_1 = "1";

          $distance_to_home = 1.2;
          $distance_to_work = 2.5;

          $greeting = "Hello Friends!";

          $bool = TRUE;
          var_dump($bool);
          $bool = FALSE;
          var_dump($bool);




          var_dump((bool)  "abc");
          var_dump((bool)  0);
          var_dump((bool) 0.0);
          var_dump((bool)  array());

          echo  "\n" ;
          echo "Variable $one is:  ", $one , "\n";
          echo  "\n" ;


          echo "Greeting:  ", $greeting , "\n";
          echo  "\n" ;
          $greeting{0} = "j";
          echo "First Letter:", $greeting{0}  , "\n" ;
          echo  "\n" ;
          echo "Greeting with new first letter:  ", $greeting  , "\n"  ;

        ?>

      <?php
        $names = array ("chris", "mike", "james", "mook");
        print_r($names);
      ?>








      </pre>

      <ul>
        <li><?php echo $one ?></li>
        <li><?php echo gettype($one); ?></li>

        <li><?php echo $string_1 ?></li>
        <li><?php echo gettype($string_1); ?></li>

        <li><?php echo "Some Math:  ", $one + $two ?></li>

        <li><?php echo "Distance:  ", $distance_to_home + $distance_to_work;  ?> </li>
        <li><?php echo "Distance + 3=  ", $distance_to_home + $distance_to_work + 3;  ?> </li>


              </ul>


    </section>
  </body>
</html>