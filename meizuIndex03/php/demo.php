<?php
//获取数据
// $cb = $_GET["cb"];

// $name = $_GET["name"];

// $age = $_GET["age"];

// $arr  = json_encode(Array('name' =>$name ,'age'=>$age ));

// echo "$cb($arr)";
$list = $_GET["list"];


//设置编码格式
header("content-type:text/html;charset:utf-8");

//创建连接
$conn = mysql_connect("localhost","root","root");

//连接数据库,选择数据库
mysql_select_db("meizu",$conn);

//写sql 语句
$sql = "select * from $list";

//设置数据库编码
mysql_query("set names utf8");

//查询结果集
$row = mysql_query($sql);

//获取结果集
//创建一个数组
$arr = [];

while($res = mysql_fetch_assoc($row)){
    array_push($arr,$res);
}
//输出
echo json_encode($arr);
?>