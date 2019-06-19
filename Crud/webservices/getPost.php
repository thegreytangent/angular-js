<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once 'config.php';

$id = $_GET['id'];
$sql="SELECT * FROM tbl_posts where id = '$id'";
$query = mysqli_query($con,$sql);
$num_rows = mysqli_num_rows($query);

$data = array();
if ($num_rows > 0 ) {
  while ($row = mysqli_fetch_array($query) ) {
    $data['info'] = array(
      'id' => $row['id'],
      'title' => $row['title'],
      'description' => $row['description'],
      'published_on' => $row['published_on']
    );
  }
  $data['status'] = 1;

} else {
  echo "no result";
}

echo json_encode($data);

?>
