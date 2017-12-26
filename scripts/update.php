 <?php	

  	//connexion a notre base de donnee
 	include("../connexion.php");
 	parse_str(file_get_contents("php://input"),$_PUT);
 	if(isset($_PUT["update"]) && isset($_PUT["id"]))
 	{
 		if($_PUT["update"] != $_PUT["old"])
 		{
	 		$id = $_PUT["id"];
	 		$update = htmlspecialchars($_PUT["update"], ENT_QUOTES); 
	 		//on met cette valeur dans la bdd
	 		$sql= 'UPDATE saisie SET libelle = \''.$update.'\' WHERE id ='.$id;
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
 			http_response_code(200);
 		}
 	}
 	else
 	{
 		http_response_code(500);
 	}

 ?>