<?php

	
$method = $_SERVER['REQUEST_METHOD'];

if($method = "POST"){
	$requestBody = file_get_contents('php://input');
	$json = json_decode($requestBody);

	//location, action, intentName
	$location = $json->result->parameters->Location;
	$intent = $json->result->metadata->intentName;


	switch(intent){
		case 'makeSandwich':

			//check location; (show my current location)
			if(meat){
				$speech = "choose meat".$meat;
				$displayText = "choose meat".$meat;
			}else{
				//ask user to repeat it again.
				$speech = "choose condiments".$condiments;
				$displayText = "choose condiments".$condiments;
			}
			break;

		case 'stillHungry':
			//welcome message
			if(meat){
				$speech = "choose new meat".$meat;
				$displayText = "choose new meat".$meat;
			}
			else{
				$speech = "choose new condiments".$ocndiments;
				$displayText = "choose new condiments".$condiments;
			}
			break;
		default:
			//place shown
			$speech = "could you please repeat that?";
			break;
	}


	$response = new \stdClass();
	$response->speech = "";
	$response->displayText = "";
	$response->source = "webhook";

	echo json_encode($response);

}else{

	//do not process request
	echo "Sorry, this is not allowed.";
}



?>