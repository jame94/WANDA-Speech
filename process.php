<?php 
error_reporting(E_ALL);


class Database
{
  private $connection = NULL;
  private $result = NULL;
  
  
  public function __construct($host = "localhost", $user = "dbu12483686-admin", $pass = "rn3xfyfjJV4Mgq3", $db = "dbu12483686-maindata")
  {
    $connection = mysql_connect($host,$user,$pass) or die("### Connection could not be established! ###"); 
    mysql_select_db($db) or die("### Database could not be selected! ###".mysql_error());
  }
  
  public function exe($statement)
  {
    return $this->result = mysql_query($statement) or die("### Error in SQL-Syntax ###<br>".mysql_error());
  }
  
  public function get()
  {
    return mysql_fetch_assoc($this->result);
  }
  
  public function num()
  {
    return mysql_num_rows($this->result);
  }
  
  
}

$DB = new Database();

$anfrage = "SELECT * FROM 'interactiveSpeech' WHERE attention = '"mysql_real_escape_string($_GET['anfrage'])"'; ";

/*
$query = sprintf("SELECT * FROM users WHERE user='%s' AND password='%s'", mysql_real_escape_string($user), mysql_real_escape_string($password));*/

$eintraege = $DB->exe($anfrage);
$ergebnis = $DB->get($eintraege);

echo $ergebnis['action');

//echo "sayHelloWanda";

?>