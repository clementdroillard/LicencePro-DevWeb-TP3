 <?php
 	//connexion a notre base de donnÃ©e
 	include("../connexion.php");
 	//on vÃ©rifie si on a cliquÃ© sur le bouton supprimer
 	if(isset($_POST["del"]) && is_numeric($_POST["del"])){
 		$id = $_POST["del"];
 		//on supprime la saisie souhaitÃ©
 		$sql= 'DELETE FROM saisie WHERE id ='.$id;
 		if($dbh->exec($sql)){
 			http_response_code(200);
 		}
 		else
 		{
 			http_response_code(503);
 		}
 	}
 	else{
 		http_response_code(500);
 	}

 ?>