<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
if($_POST){

// include database connection
include 'config/database.php';

try{
header("Content-Type: application/json; charset=utf-8");
// insert query
$query = "INSERT INTO employee SET p_name=:name, p_address=:address, p_email=:email, p_contact=:contact";
// prepare query for execution
$stmt = $con->prepare($query);
// posted values
$name = $_POST['name'];
$address = $_POST['address'];
$email = $_POST['email'];
$contact = $_POST['contact'];
// bind the parameters
$stmt->bindParam(':name', $name);
$stmt->bindParam(':address', $address);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':contact', $contact);
// Execute the query
if($stmt->execute()){
    echo json_encode(array('result'=>'success'));
}else{
    echo json_encode(array('result'=>'fail'));
}
}
// show error
catch(PDOException $exception){
die('ERROR: ' . $exception->getMessage());
}
}
?>
