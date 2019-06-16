<?php

$conn = mysqli_connect('localhost', 'root', '','lacastellanatreatment');
$data = array();


if (isset($_GET['id'])) {
	// ===========================
	$sql = "SELECT * FROM patients WHERE Id='{$_GET['id']}'";
	$result = mysqli_query($conn, $sql);
	while ($row = mysqli_fetch_array($result)) {
		$data = array(
			'id' => $row['Id'],
			'firstname' => $row['Firstname'],
			'lastname' => $row['Lastname']
		);
	}
	// ===========================
}elseif (isset($_GET['name'])) {
	// ===========================
	$sql = "SELECT * FROM patients WHERE Firstname='{$_GET['name']}'";
	$result = mysqli_query($conn, $sql);
	while ($row = mysqli_fetch_array($result)) {
		$data[] = array(
			'id' => $row['Id'],
			'firstname' => $row['Firstname'],
			'lastname' => $row['Lastname']
		);
	}
	// ===========================

} else {
	// ===========================
	$sql = "SELECT * FROM patients";
	$result = mysqli_query($conn, $sql);
	while ($row = mysqli_fetch_array($result)) {
		$data[] = array(
			'id' => $row['Id'],
			'firstname' => $row['Firstname'],
			'lastname' => $row['Lastname']
		);
	}
	// ===========================
}
if (isset($_GET['total'])) {
	$data = array(
		"total" => 10,
		"males" => 5,
		"females" => 5
	);
}




echo json_encode($data);
