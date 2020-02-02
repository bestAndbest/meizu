<?php
include 'base.php';
$id=$_GET['id'];
$sql="select * FROM eardetail WHERE id='$id'";
$res=mysql_query($sql);
$arr=[];
while($row=mysql_fetch_assoc($res)){
    array_push($arr, $row);

}
echo json_encode($arr);
?>