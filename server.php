<?php
$students = array(
  array("id"  => 1, "name" => "jason","lastname" => "castellano", "grades" => 80 ),
  array( "id" => 2, "name" => "John","lastname" => "Volta", "grades" => 45 )

);

if (isset($_GET['id'])) {
  $find = array_search($_GET['id'],array_column($students, 'id'));
  $data = $students[$find];
} else {
  $data = $students;
}




echo json_encode($data);
