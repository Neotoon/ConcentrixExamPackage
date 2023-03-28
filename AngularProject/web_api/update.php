<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 
// check if form was submitted
if($_POST){
    include 'config/database.php';
    try{
        // write update query
        // in this case, it seemed like we have so many fields to pass and 
        // it is better to label them and not use question marks
        $query = "UPDATE employee 
                    SET p_name=:name, p_address=:address, p_email=:email, p_contact=:contact 
                    WHERE p_id = :id";
					header("Content-Type: application/json; charset=utf-8");
 
        // prepare query for excecution
        $stmt = $con->prepare($query);
 
        // posted values
        $id = $_POST['id'];
        $name = $_POST['name'];
        $address = $_POST['address'];
        $email = $_POST['email'];
		$contact = $_POST['contact'];
 
        // bind the parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':address', $address);
        $stmt->bindParam(':email', $email);
		$stmt->bindParam(':contact', $contact);
        $stmt->bindParam(':id', $id);
         
        // Execute the query
        if($stmt->execute()){
            echo json_encode(array('result'=>'success'));
        }else{
            echo json_encode(array('result'=>'fail'));
        }
         
    }
     
    // show errors
    catch(PDOException $exception){
        die('ERROR: ' . $exception->getMessage());
    }
}
?>
