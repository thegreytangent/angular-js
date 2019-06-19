<?php

require_once 'config.php';
$json = file_get_contents('php://input');
$data = json_decode($json);
$value = get_object_vars($data);

$title = $value['data']->title;
$description = $value['data']->description;
$today = date('Y-m-d');

$sql = "INSERT INTO tbl_posts (title,description,published_on) VALUES ('$title', '$description', '$today')";

if (mysqli_query($con, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}

mysqli_close($con);