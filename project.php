<?php

session_start();
//$_SESSION["username"]='';
//$_SESSION["password"]='';

?>

<!DOCTYPE html>
<html lang="en">
<head>


<title> Musicorum, a music review site! </title>
<link rel="stylesheet" type="text/css" href="style1.css"> 
<link rel="icon" href="https://gifimage.net/wp-content/uploads/2018/05/spinning-record-gif-9.gif">
</head>

<body>
<div id="wholepage">

<?php

if(isset($_SESSION['userReg'])){
echo '<h2 style="float:right;" class="title"> Acct: ';
echo $_SESSION["userReg"], '</h2>';


$db = new mysqli('coscvm33.cs.laurentian.ca','root','Nickwar42@', 'Musicorum');
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}

}
else{
echo '<a style="float:right; color:burlywood;" class="title" href="https://coscvm33.cs.laurentian.ca/Project/signin.php"> Sign In </a>';
}
if(isset($_SESSION['userReg'])){

}
?>

<div class="main">
<a class="title" style="font-size:64px; text-align:center;" href="http://coscvm33.cs.laurentian.ca/Project/Musicorum.php">Musicorum!</a>
<h2 class="title"> It's latin for music! </h2>
<a href="http://coscvm33.cs.laurentian.ca/Project/Shelf.php" class="title">My Shelf</a>

<div class="space"></div>
<div class= "space"></div>
<a class="title"  href="http://coscvm33.cs.laurentian.ca">Home</a>
<div class="space"></div>

<?php if(isset($_SESSION['userReg'])){
echo '<form method="POST">';
echo '<input type="submit" name="logout" value="Logout">';
}

if(isset($_POST['logout'])){

// remove all session variables
session_unset();

// destroy the session
session_destroy();

header('Location: Musicorum.php');
}



?>
</form>
</div>
<br><br>

<div>
<form action="Search.php"> 
<input style="width:15%; box-sizing: border-box;" placeholder="Enter a Song, Artist, or User..." type="text" id="search" name="search">
<input type="submit" value="Submit">
</form>
</div>

<div class="space"></div>

<div class="topnine">
<a class="title" style="font-size:64px; text-align:left; padding-left: 12px;"> Top Nine! </a>
</div>

</div>
</body>

</html>

---------------------------------------------------------

Search:
<?php

session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
<title> Musicorum, a music review site! </title>
<link rel="stylesheet" type="text/css" href="style1.css"> 
<link rel="icon" href="https://gifimage.net/wp-content/uploads/2018/05/spinning-record-gif-9.gif">
</head>

<body>
<div id="wholepage">


<!-- Getting the positioning right gave me grey hairs. 04/12/20 -->

<?php
if(isset($_SESSION["userReg"])){
//$username = $_SESSION["username"];

echo '<h2 style="float:right;" class="title"> Acct: ';
echo $_SESSION["userReg"], '</h2>';


$db = new mysqli('coscvm33.cs.laurentian.ca','root','Nickwar42@', 'Musicorum');
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);

}
}
else{
echo '<a style="float:right; color:burlywood;" class="title" href="https://coscvm33.cs.laurentian.ca/Project/signin.php"> Sign In </a>';
}

?>

<div class="main">
<a class="title" style="font-size:64px; text-align:center;" href="http://coscvm33.cs.laurentian.ca/Project/Musicorum.php">Musicorum!</a>
<h2 class="title" style="text-align: center;"> It's latin for music! </h2>
<a href="http://coscvm33.cs.laurentian.ca/Project/Shelf.php" class="title">My Shelf</a>
<div class="space"></div>
<div class= "space"></div>
<a class="title"  href="http://coscvm33.cs.laurentian.ca">Home</a>
<div class="space"></div>


<?php if(isset($_SESSION['userReg'])){
echo '<form method="POST">';
echo '<input type="submit" name="logout" value="Logout">';
}

if(isset($_POST['logout'])){

// remove all session variables
session_unset();

// destroy the session
session_destroy();

header('Location: Musicorum.php');
}



?>


</div>
<br><br>

<form action="Search.php">
<input style="width:15%; box-sizing: border-box;" placeholder="Enter a Song, Artist, or User..." type="text" id="search" name="search">
<input type="submit" value="Submit">
</form>

<div class="space"></div>
<div class="middle">
<a class="title" style="font-size:64px; text-align:center; padding-left:12px;"> Search Results: </a>
<style>

p{
color:burlywood;
font-size: 18px;
}

</style>

<?php
echo "<p> The search returned:</p>";

//Both Song and Artist. Show song on left, artist on right.

$song_name = $_REQUEST["search"];
$artist_name = $_REQUEST["search"];
echo "<p>";
echo $_GET["search"];
echo"</p>"
?>



</div>
</div>
</body>


</html>

