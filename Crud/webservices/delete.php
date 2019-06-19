<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once 'config.php';

$id = $_GET['id'];
$sql="DELETE FROM tbl_posts where id = '$id'";
$query = mysqli_query($con,$sql);

if ($query) {
    $msg = "Post delete successfully";
}else {
    $msg = "Failed to delete message!";
}

$data = array(
    "status" => 1,
    "msg" => $msg
);


echo json_encode($data);

?>
