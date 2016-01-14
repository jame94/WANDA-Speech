<?php 

// 1. Create a database connection
$connection = mysqli_connect("localhost","db12483686-admin","mNQgb44yt7h7tT27");
    if (!$connection) {
        die("Database connection failed: " . mysqli_error());
    } 
    
// 2. Select a database to use 
$db_select = mysqli_select_db($connection, "db12483686-maindata");
    if (!$db_select) {
        die("Database selection failed: " . mysqli_error());
    } 

$anfrage = mysqli_real_escape_string($connection, $_GET['anfrage']);
$ergebnis = mysqli_query($connection,"SELECT * FROM `interactiveSpeech` WHERE `attention` = '".$anfrage."'") or die("Error in SQL-Syntax<br>".mysqli_error());
$result = mysqli_fetch_assoc($ergebnis);
echo $result['action'];


mysqli_close($connection);

?>