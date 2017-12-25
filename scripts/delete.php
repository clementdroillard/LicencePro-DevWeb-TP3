 <?php
 	//connexion a notre base de donnee
 	include("../connexion.php");
 	//on verifie si on a cliquee sur le bouton supprimer
 	if(isset($_POST["del"]) && is_numeric($_POST["del"])){
 		$id = $_POST["del"];
 		//on supprime la saisie souhaitee
 		$sql= 'DELETE FROM saisie WHERE id ='.$id;
 		// on revoie le bon code http
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