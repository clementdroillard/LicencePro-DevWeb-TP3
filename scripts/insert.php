 <?php
 	 //connexion a notre base de donnÃ©e
 	include("../connexion.php");
 	//on vérifie si il y a eu une saisie et qu'elle ne soit pas vide
 	if(isset($_POST["insert"]))
 	{
 		//contient la valeur qui vient d'etre saisie
 		$valeur =htmlspecialchars($_POST["insert"], ENT_QUOTES); 
 		//insertion de la valeur dans la base
 		$sql = 'INSERT INTO saisie(libelle,valider) VALUES(\''.$valeur.'\',false)';
 		if($dbh->exec($sql))
 		{
 			http_response_code(200);
 		}
 		else
 		{
 			http_response_code(503);
 		}
 	else
 	{
 		http_response_code(500);
 	}

 ?>