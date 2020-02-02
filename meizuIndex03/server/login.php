<?php
  include 'base.php';
$user=$_GET['user1'];
$pass=$_GET['pass1'];
$res=mysql_query("select * from user where name='$user' and pass='$pass'");
   if(mysql_fetch_assoc($res)){
   	echo 'ok';
   }else{
   	echo 'error';
   }
?>