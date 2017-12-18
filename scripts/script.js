
function supprimer(id)
{
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "scripts/delete.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("del="+id);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var liste = document.getElementById("li"+id);
			var boutons = document.getElementById("boutton"+id);
			liste.parentNode.removeChild(liste);
			boutons.parentNode.removeChild(boutons);
		}
	};
}

function valider(id)
{
	var liste = document.getElementById("li"+id);
	var libelle = document.getElementById("p"+id);
	var valider;
	if(document.getElementById("strike"+id) != null)
	{
		valider = 1;
	}
	else
	{
		valider = 0;
	}
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "scripts/valider.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("valider="+valider+"&id="+id);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			if(valider){
				var strike = document.getElementById("strike"+id);
				strike.parentNode.removeChild(strike);
				liste.appendChild(libelle);
			}
			else{
				var strike = document.createElement("strike");
				strike.id = "strike"+id
				liste.insertBefore(strike,libelle);
				libelle.parentNode.removeChild(libelle);
				strike.appendChild(libelle);
			}
		}
	};
}

function ajouter()
{
	var saisie = document.getElementById("saisie").value;
	var xhr = new XMLHttpRequest();
	if(saisie != "")
	{
		xhr.open("POST", "scripts/insert.php", true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send("insert="+saisie);
	}
	else
	{
		document.getElementById("infoSaisie").innerHTML = "Vous n'avez rien saisie";
	}

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var id = xhr.responseText;
			id = id.trim();
			var ul = document.getElementById("ul");
			ul.innerHTML += "<li id=li"+id+"><p id=p"+id+">"+saisie+"</p></li><p id=boutton"+id+"><button id=\"btnSpr"+id+"\" onclick=\"supprimer("+id+");\">Supprimer</button><button id=\"btnVal"+id+"\" onclick=\"valider("+id+");\">Valider / Non Valider</button> <br/></p>";
			document.getElementById("saisie").value = "";
			document.getElementById("infoSaisie").innerHTML = "Vous avez saisie : \""+saisie+"\"";
		}
	};
}