 <?php
 	 //connexion a notre base de donnee
 	include("../connexion.php");
 	//on vérifie si il y a eu une saisie 
 	if(isset($_POST["insert"]))
 	{
 		//contient la valeur qui vient d'etre saisie au format html
 		$valeur =htmlspecialchars($_POST["insert"], ENT_QUOTES); 
 		//insertion de la valeur dans la base
 		$sql = 'INSERT INTO saisie(libelle,valider) VALUES(\''.$valeur.'\',false)';
 		// on revoie le bon code http
 		if($dbh->exec($sql))
 		{
 			http_response_code(200);
 			// on recupere l'id de l'insertion
 			$id = $dbh->query('SELECT MAX(id) FROM saisie');
 			foreach ($id as $value) {
 				echo $value['MAX(id)'];
 			}
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