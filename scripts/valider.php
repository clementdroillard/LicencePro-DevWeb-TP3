 <?php	

  	//connexion a notre base de donnee
 	include("../connexion.php");

 	if(isset($_POST["valider"]) && isset($_POST["id"]) && is_numeric($_POST["id"]) && is_numeric($_POST["valider"]) ){
 		$id = $_POST["id"];
 		$valider = $_POST["valider"];
 		//on change la valeur de la validation 
 		$valider = (boolval(!$valider) ? 'true' : 'false');
 		//on met cette valeur dans la bdd
 		$sql= 'UPDATE saisie SET valider = '.$valider.' WHERE id ='.$id;
 		// on revoie le bon code http
 		if($dbh->exec($sql))
 		{
 			http_response_code(200);
 		}
 		else
 		{
 			http_response_code(503);
 		}
 	}
 	else
 	{
 		http_response_code(500);
 	}

 ?>