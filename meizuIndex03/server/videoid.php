<?php
include "base.php";
//设置编码格式
// header("content-type:text/html;charset:utf-8");

// //创建连接
// $conn = mysql_connect("localhost","root","root");

// //连接数据库,选择数据库
// mysql_select_db("meizu",$conn);
$id = $_GET["id"];

$sql = "select * from video where id = $id";

//开始执行sql语句
$row = mysql_query($sql);
$arr = [];

while($res = mysql_fetch_assoc($row)){
    array_push($arr,$res);
}
echo json_encode($arr);
?>