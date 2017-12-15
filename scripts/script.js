
function supprimer(id)
{
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "scripts/delete.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("del="+id);

	var liste = document.getElementById("li"+id);
	var boutons = document.getElementById("boutton"+id);
	liste.parentNode.removeChild(liste);
	boutons.parentNode.removeChild(boutons);
}

function valider(id)
{
	var liste = document.getElementById("li"+id);
	var libelle = document.getElementById("p"+id);
	var valider;
	if(document.getElementById("strike"+id) != null)
	{
		var strike = document.getElementById("strike"+id);
		strike.parentNode.removeChild(strike);
		liste.appendChild(libelle);
		valider = 1;
	}
	else
	{
		var strike = document.createElement("strike");
		strike.id = "strike"+id
		liste.insertBefore(strike,libelle);
		libelle.parentNode.removeChild(libelle);
		strike.appendChild(libelle);
		valider = 0;
	}
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "scripts/valider.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("valider="+valider+"&id="+id);
	
}

function ajouter()
{
	var saisie = document.getElementById("saisie").value;
	if(saisie != "")
	{
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "scripts/insert.php", true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send("insert="+saisie);
	}
}