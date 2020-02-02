<?php
	include 'base.php';
	$name=$_GET['username'];
	$psd=$_GET['psd'];
	$sql="select * from `user` where name='$name';";
	$sql2="insert into `user` (`name`,`pass`) VALUES('$name','$psd');";
	$res=mysql_query($sql);
	if(mysql_fetch_assoc($res)){
		echo '用户名已存在';
	}else {
		$res2=mysql_query($sql2);
		if(mysql_fetch_assoc($res2)){
			echo '注册成功';
		}
   
	}
	
?>